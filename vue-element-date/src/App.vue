<template>
  <div id="app">
    <monthsPage />
  </div>
</template>

<script>
import monthsPage from './pages/monthsPage.vue'

export default {
  name: 'App',
  components: {
    monthsPage,
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
