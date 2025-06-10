<!-- eslint-disable vue/no-unused-components -->
<template>
  <div>
    <p>选中的值个数:{{ value.length }}</p>
    <p>数据条数:{{ options.length }}</p>
    <el-select
      ref="select"
      v-model="value" collapse-tags multiple filterable clearable
      popper-class="custom-all-select" placeholder="请选择" @visible-change="selectVisible"
    >
      <RecycleScroller
        class="scroller"
        :items="filterOptions"
        :item-size="32"
        key-field="value"
        v-slot="{ item }"
      >
      <el-option
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
      </RecycleScroller>
      <!-- <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      /> -->
    </el-select>

  </div>
</template>

<script>
import Vue from 'vue'
import { escapeRegexpString } from 'element-ui/src/utils/util'
import { RecycleScroller, DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
import selectBtn from '../components/filterSelect/index.vue'

let instance = null

export default {
  data() {
    return {
      value: '',
      options: [
      ],
      query: '',
      refSelect: {
        query: '',
      },
    }
  },
  components: {
    RecycleScroller,
    DynamicScroller,
    DynamicScrollerItem,
  },
  computed: {
    filterOptions() {
      if (!this.query) return this.options
      return this.options.filter((item) => item.label.includes(this.query))
    },
  },
  watch: {
    'refSelect.query': function (newVal, oldVal) {
      this.query = this.refSelect.query
    },
  },
  created() {
    function selectFrom(lowerValue, upperValue) {
      const choices = upperValue - lowerValue + 1
      return Math.floor(Math.random() * choices + lowerValue)
    }
    function getRandomName() {
      const num = selectFrom(1, 10)
      if (num < 2) { return '苹果' }
      if (num > 3 && num < 5) { return '梨' }
      if (num > 5 && num < 7) { return '桃子' }
      if (num > 7 && num < 9) { return '香蕉' }
      return '西瓜'
    }
    for (let i = 0; i < 100000; i++) { this.options.push({ value: i, label: getRandomName() + selectFrom(1, 100) }) }
  },
  mounted() {
    this.refSelect = this.$refs.select
  },
  methods: {
    selectVisible(visible) {
      if (visible) {
        this.$nextTick(() => {
          if (!instance) {
            const parentNode = document.querySelector('.custom-all-select .el-select-dropdown__wrap')
            const SelectBtnConstructor = Vue.extend(selectBtn)
            instance = new SelectBtnConstructor({
              data: {
                name: '一键全选',
              },
            })
            instance.$mount()
            instance.$on('selectAll', this.filterSelectAll)
            parentNode.insertBefore(instance.$el, parentNode.lastChild)
          }
        })
      }
    },
    filterSelectAll() {
      const selRef = this.$refs.select
      const filteredOptions = this.options.filter((item) => new RegExp(escapeRegexpString(selRef.query), 'i').test(item.label))
      this.value = filteredOptions.map((item) => item.value)
    },
  },
}
</script>

<style lang="css" scoped>
/* @import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'; */

.scroller {
  height: 100px;
}

.user {
  height: 32%;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
</style>
