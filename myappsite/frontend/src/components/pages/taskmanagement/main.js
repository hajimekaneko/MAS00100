import Vue from 'vue'
import TaskManagement from './TaskManagement.vue'
import router from '@/router'
import store from '@/store'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css' // add
import 'bootstrap-vue/dist/bootstrap-vue.css' // add

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(TaskManagement)
}).$mount('#app')

