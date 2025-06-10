<template>
  <div>
    <h1>实现非连续多选月份</h1>
    <div class="block">
      <span class="demonstration">多选月份:</span>
      <el-date-picker type="months" v-model="months" value-format="yyyy-MM"
      placeholder="选择一个或多个日期">
      </el-date-picker>
    </div>
    <p>
      选中的月份值：{{months}}
    </p>
    <div class="block">
      <span class="demonstration">多选日期:</span>
      <el-date-picker type="dates" v-model="dates" value-format="yyyy-MM-dd"
      placeholder="选择一个或多个日期">
      </el-date-picker>
    </div>
    <p>
      选中的日期值：{{dates}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'months-page',
  data() {
    return {
      dates: [],
      months: [],
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
