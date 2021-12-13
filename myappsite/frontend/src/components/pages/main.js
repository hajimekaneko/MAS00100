import Vue from 'vue'
import MyAppSite from './MyAppSite.vue'
import router from '@/router'
import store from '@/store'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css' // add
import 'bootstrap-vue/dist/bootstrap-vue.css' // add

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(MyAppSite)
}).$mount('#app')
