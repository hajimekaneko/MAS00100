import client from './client'

export default {
  add: (token, { name, list }) => {

    return new Promise((resolve, reject) => {

      client.post(`/tasks/`, { name, list }, { headers: { 'x-kbn-token': token } })
        .then(response => resolve(response.data))
        .catch(err => {
          console.log("list")
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },

  update: (token, { taskId, name, description, list }) => {
    return new Promise((resolve, reject) => {
      console.log([list])
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

  remove: (token, { id }) => {
    return new Promise((resolve, reject) => {
      client.delete(`/tasks/${id}/remove/`, { headers: { 'x-kbn-token': token } })
        .then(() => resolve())
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },

  move: (token, { id, from, to }) => {
    return new Promise((resolve, reject) => {
      client.post(`/tasks/${id}/move/`, { from, to }, { headers: { 'x-kbn-token': token } })
        .then(() => resolve())
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
