import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// const routes = [

// ]

// const stockchart = { template: '<div>初めてのVue Resource</div>'}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes : [
		// {path:'/stockchart', redirect : '/stockchart'},
	]
})

export default router