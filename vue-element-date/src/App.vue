<!-- eslint-disable linebreak-style -->
<template>
  <div id="app">
    <!-- <monthsPage /> -->
    <!-- <selectFilterSelAll/> -->
    <selectVirtualScroll />
  </div>
</template>

<script>
// import monthsPage from './pages/monthsPage.vue'
// import selectFilterSelAll from './pages/selectFilterSelAll.vue'
import selectVirtualScroll from './pages/selectVirtualScroll.vue'

export default {
  name: 'App',
  components: {
    // monthsPage,
    // selectFilterSelAll,
    selectVirtualScroll,
  },
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
