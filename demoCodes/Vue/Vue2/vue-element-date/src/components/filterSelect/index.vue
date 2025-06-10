<template>
  <div class="stick-select-area">
    <el-button type="text" @click="handleSelAll">{{name}}</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    }
  },
  methods: {
    handleSelAll() {
      this.$emit('selectAll')
    },
  },
}
</script>

<style lang="css" scoped>
.stick-select-area {
  text-align: center;
    position: sticky;
    top: 0;
    background: #fff;
    z-index: 9999;
}
</style>
