<template>
  <div>
    <h1>实现非连续多选月份</h1>
    <div class="block">
      <span class="demonstration">多个日期:</span>
      <el-date-picker type="dates" v-model="dates" placeholder="选择一个或多个日期">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: 'months-page',
  data() {
    return {
      dates: [],
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
