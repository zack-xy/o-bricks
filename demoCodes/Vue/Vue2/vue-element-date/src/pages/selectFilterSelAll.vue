<template>
  <div>
  <p>选中的值:{{value}}</p>
  <el-select v-model="value" multiple filterable clearable ref="select"
  popper-class="custom-all-select" placeholder="请选择" @visible-change="selectVisible">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>
</template>

<script>
import Vue from 'vue'
import { escapeRegexpString } from 'element-ui/src/utils/util'
import selectBtn from '../components/filterSelect/index.vue'

let instance = null

export default {
  data() {
    return {
      value: '',
      options: [
        { value: 1,label: '苹果' },
        { value: 2,label: '红苹果' },
        { value: 3,label: '绿苹果' },
        { value: 4,label: '青苹果' },
        { value: 5,label: '紫苹果' },
        { value: 6,label: '梨' },
        { value: 7,label: '白梨' },
        { value: 8,label: '紫梨' },
        { value: 9,label: '绿梨' },
        { value: 10,label: '红梨' },
      ],
    }
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

<style lang="scss" scoped>

</style>
