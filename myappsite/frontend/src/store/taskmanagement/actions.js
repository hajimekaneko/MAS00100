import * as types from './mutation-types'
import { Auth, List, Task } from '@/api'
// import { Auth, Task } from '@/api'


export default {
  login: ({ commit }, authInfo) => {
    console.log("1")
    return Auth.login(authInfo)
      .then(({ token, userId }) => {
        console.log("2")
        localStorage.setItem('token', token)
        commit(types.AUTH_LOGIN, { token, userId })
      })
      .catch(
        console.log("3"),
        err => { throw err }
        )
  },

  fetchLists: ({ commit, state }) => {
    return List.fetch(state.auth.token)
      .then((response) => {
        commit(types.FETCH_ALL_TASKLIST, response.lists)
      })
      .catch(err => { throw err })
  },

  // fetchTasks: ({ commit, state }) => {
  //   return Task.fetch(state.auth.token)
  //     .then((response) => {
  //       commit(types.FETCH_ALL_LISTLIST, response.tasks)
  //     })
  //     .catch(err => { throw err })
  // },

  addTask: ({ commit, state }, { name, list }) => {
    return Task.add(state.auth.token, { list, name })
      .then((task) => {
        commit(types.ADD_TASK, task)
      })
      .catch(err => { throw err })
  },

  updateTask: ({ commit, state }, task) => {
    return Task.update(state.auth.token, task)
      .then(() => {
        commit(types.UPDATE_TASK, task)
      })
      .catch(err => { throw err })
  },

  removeTask: ({ commit, state }, { taskId, list }) => {
    return Task.remove(state.auth.token, taskId)
      .then(() => {
        commit(types.REMOVE_TASK, { taskId, list })
      })
      .catch(err => { throw err })
  },

  moveTaskFrom: ({ commit }, { id, listId }) => {
    commit(types.MOVE_TASK_FROM, { target: id, from: listId })
    return Promise.resolve()
  },

  moveToTask: ({ commit }, { id, listId }) => {
    commit(types.MOVE_TO_TASK, { target: id, to: listId })
    return Promise.resolve()
  },

  performTaskMoving: ({ commit, state }) => {
    const { target, from, to } = state.dragging
    return Task.move(state.auth.token, { id: target, from, to })
      .then(() => {
        commit(types.MOVE_TASK_DONE, { target, from, to })
      })
      .catch(err => { throw err })
  },

  logout: ({ commit, state }) => {
    return Auth.logout(state.auth.token)
      .then(() => {
        commit(types.AUTH_LOGOUT, { token: null, userId: null })
      })
      .catch(err => { throw err })
  }
}
