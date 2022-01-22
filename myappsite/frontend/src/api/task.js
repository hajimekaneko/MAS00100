import client from './client'

export default {
  add: (token, { name, description, list }) => {

    return new Promise((resolve, reject) => {

      client.post(`/tasks/`, { name, description, list }, { headers: { 'x-kbn-token': token } })
        .then(response => resolve(response.data))
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },

  update: (token, { taskId, name, description, list }) => {
    return new Promise((resolve, reject) => {
      client.put(`/tasks/${taskId}/`, { name, description, list }, { headers: { 'x-kbn-token': token } })
      // client.put(`/tasks/${taskId}/`, {name, description})
        .then(
          () => resolve()
        )
        .catch(err => {
          console.log("err")
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },

  remove: (token, taskId ) => {
    return new Promise((resolve, reject) => {
      client.delete(`/tasks/${taskId}/`, { headers: { 'x-kbn-token': token } })
        .then(() => resolve())
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },

  move: (token, { taskId, list }) => {
    return new Promise((resolve, reject) => {
      client.put(`/tasks/${taskId}/`, {list}, { headers: { 'x-kbn-token': token } })
        .then(() => resolve())
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
