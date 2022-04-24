import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store'
import ElementUI from 'element-ui';
// import router from './zRouter'; // 自实现的router
// import store from './zStore'; // 自实现的store

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
