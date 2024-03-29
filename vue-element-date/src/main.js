/* eslint-disable linebreak-style */
/* eslint-disable import/order */
import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

import ElementUI from 'element-ui'

Vue.use(ElementUI)

// import DatePicker from './components/date-picker'

// Vue.use(DatePicker)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
