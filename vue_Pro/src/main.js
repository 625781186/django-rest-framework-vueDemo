// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

import router from './router'
import axios from "axios"
// Vue.use(axios)
Vue.prototype.$axios = axios

// Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router: router
})
