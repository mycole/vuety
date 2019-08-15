import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'

axios.defaults.baseURL = "https://api.example.com"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
