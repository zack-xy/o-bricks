import Vue from 'vue'
import App from './App.vue'
// import router from './router';
import router from './zRouter'; // 自实现的router
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
