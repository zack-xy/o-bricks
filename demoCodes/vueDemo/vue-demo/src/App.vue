<template>
  <div id="app">
     <el-select v-model="value" 
        placeholder="请选择" 
        filterable
        @change="selectChanged">
        <el-option
          v-for="item in list"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      value:"",
      list: [
        {name: "模拟受限编辑", id:"editableDivPage", path: "/editableDivPage"},
        {name: "只渲染20条表格", id:"betterRenderTable", path: "/betterRenderTable"}
      ]
    }
  },
  methods: {
    selectChanged(val) {
      this.$router.push(this.list.find(item=>item.id===val).path)
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
