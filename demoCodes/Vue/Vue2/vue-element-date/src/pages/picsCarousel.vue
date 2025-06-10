<script>
import { Loading } from 'element-ui'
const isNull = (val) => {
  return val === '' || val === null || val === undefined
}
export default {
  props: {
    // 图片列表
    imgsList: {
      type: Array,
      default: () => ([])
    },
    // 查询图片的方法，应该返回一个查询图片的Promise
    queryImg: {
      type: Function,
      default: () => ({})
    },
    // 是否懒加载
    lazy: {
      type: Boolean,
      default: true
    },
    // 定义如何从返回中拿链接
    getUrl: {
      type: Function,
      default: res => res.data // 默认data里返回base64
    }
  },
  data() {
    return {
      previewIndex: 0,
      activatedIdx: 0,

      moved: 0
    }
  },
  computed: {
    previewList() {
      return this.imgsList.map(i => i.url)
    }
  },
  watch: {
    activatedIdx(newIdx, oldIdx) {
      if (isNull(this.imgsList[newIdx].url)) {
        const loading = Loading.service({ target: this.$refs.pics[newIdx].$el })
        this.queryImg(newIdx).then((res) => {
          loading.close()
          if (res.code !== 200)
            return this.$message('查询失败，请重试')
          this.$set(this.imgsList[newIdx], 'url', this.getUrl(res))
        })
      }
    }
  },
  mounted() {
    this.initRender()
  },
  methods: {
    async initRender() {
      if (this.lazy) {
        const loading = Loading.service({ target: '.pic-container' })
        const containerDom = document.getElementsByClassName('pics-auto-scroll')
        const { x, width } = containerDom.getBoundingClientRect()
        const size = Math.ceil(width / 130)
        const posts = []
        for (let i = 0; i < size; i++)
          posts.push(this.queryImg(i))

        try {
          const res = await Promie.allSettled(posts)
          res.forEach((res, idx) => {
            const { status, value } = res
            status === 'fulfilled' && this.$set(this.imgsList[idx], 'url', this.getUrl(value))
          })
        }
        catch (error) {
          console.error(error)
        }
        finally {
          loading.close()
        }
      }
      this.$nextTick(() => {
        this.setTransform()
      })
    },
    // 大图预览
    handleImgPreview(idx) {
      this.previewIndex = idx
      this.handleMouseOver(idx)
      if (this.masked(idx) === 'left')
        this.moveToLeft()
      if (this.masked(idx) === 'right')
        this.moveToRight()
      this.$nextTick(() => {
        const nextDom = document.getElementsByClassName('el-image-viewer__next')
        const prevDom = document.getElementsByClassName('el-image-viewer__prev')
        nextDom[0].addEventListener('click', () => {
          if (this.activatedIdx === this.imgsList.length - 1)
            this.scrollToStart()
          else
            this.handleNext()

        })
        prevDom[0].addEventListener('click', () => {
          if (this.activatedIdx === 0)
            this.scrollToEnd()
          else
            this.handlePrev()

        })
      })
    },
    handleMouseOver(idx) {
      if (!isNull(this.masked(idx)))
        return
      this.activatedIdx = idx
    },
    // 上一张
    handlePrev() {
      if (this.activatedIdx)
        this.activatedIdx--
      this.moveToLeft()
    },
    // 下一张
    handleNext() {
      if (this.activatedIdx < this.imgsList.length - 1)
        this.activatedIdx++
      this.moveToRight()
    },
    // 真实移动
    setTransform() {
      if (this.moved < 0)
        return (this.moved = 0)
      for (let i = 0; i < this.$refs.pics.length; i++) {
        this.$refs.pics[i].$el.style.transform = `translateX(-${100 * this.moved}%)`
        this.$refs.pics[i].$el.style.transformOrigin = `${-100 * this.moved + 50}% 50%`
      }
    },
    // 向左移动
    moveToLeft() {
      if (this.moved) {
        while (!isNull(this.masked(this.activatedIdx))) {
          this.moved--
          this.setTransform()
        }
      }
    },
    // 向右移动
    moveToRight() {
      if (this.moved < this.imgsList.length && !this.touchEnd()) {
        while (!isNull(this.masked(this.activatedIdx))) {
          this.moved++
          this.setTransform()
        }
      }
    },
    // 滚动到开始
    scrollToStart() {
      this.activatedIdx = 0
      this.moved = 0
      this.setTransform()
    },
    // 滚动到结束
    scrollToEnd() {
      this.activatedIdx = this.imgsList.length - 1
      this.moveToRight()
    },
    // 触底
    touchEnd() {
      return isNull(this.masked(this.imgsList.length - 1))
    },
    // 遮盖
    masked(idx) {
      const containerDom = document.getElementsByClassName('pics-auto-acroll')[0]
      const { x, width } = containerDom.getBoundingClientRect()
      const { x: imgX, width: imgWidth } = this.$refs.pics[idx].$el.getBoundingClientRect()
      if (imgX < x)
        return 'left'
      if (imgX + imgWidth + 10 > x + width)
        return 'right'
      return ''
    }
  }
}
</script>

<template>
  <div class="pic-container">
    <div class="operation prev">
      <i class="el-icon-d-arrow-left" @click="handlePrev" />
    </div>
    <div class="pics-auto-scroll">
      <el-tooltip
        v-for="(item, idx) in imgsList"
        :key="idx"
        placement="top"
        effect="light"
        :content="item.fileName"
        :disabled="activatedIdx !== idx"
      >
        <el-image
          ref="pics"
          class="pics" :class="[activatedIdx === idx ? 'active' : '']"
          style="width: 100px;height: 100px"
          :src="item.url"
          :initial-index="previewIndex"
          fit="fill"
          :preview-src-list="previewList"
          @mouseover="handleMouseOver(idx)"
          @click="handleImgPreview(idx)"
        >
          <template #error>
            <div class="el-image__error">
              加载中
            </div>
          </template>
        </el-image>
      </el-tooltip>
    </div>
    <div class="operation next">
      <i class="el-icon-d-arrow-right" @click="handleNext" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pic-container {
    display: flex;
    .operation {
        background: #ccc;
        width: 35px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        i {
            font-size: 20px;
            cursor: pointer;
        }
    }
    .prev {
        margin-right: 5px;
    }
    .next {
        margin-left: 5px;
    }
    .pics-auto-scroll {
        border: 1px solid #333;
        border-radius: 5px;
        padding: 15px;
        display: flex;
        width: 100%;
        overflow: hidden;
        .pics {
            border: 1px solid red;
            flex-shrink: 0;
            margin: 0 15px;
        }
        .active {
            border: 1px solid #2348f7;
            scale: (1.3);
        }
    }
}
</style>
