import Vue from 'vue'
import Vuex from 'vuex'
import actions from '@/store/taskmanagement/actions'
import getters from '@/store/taskmanagement/getters'
import mutations from '@/store/taskmanagement/mutations'
import state from '@/store/taskmanagement/state'

Vue.use(Vuex)

export default new Vuex.Store({
  // modules:{
  //   taskmanagement: {
  //     namespaced: false,
  //     state, // 定義したstateを`state`オプションに指定
  //     getters,
  //     actions,
  //     mutations,
  //   }
  // },
  state, // 定義したstateを`state`オプションに指定
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})
