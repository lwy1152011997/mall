import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import './assets/css/reset.css'
import './assets/css/font-icon.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
