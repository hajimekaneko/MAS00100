import client from './client'

export default {
  add: (token, { name, listId }) => {
    return new Promise((resolve, reject) => {
      console.log({ name,"list_id":listId })
      // client.post(`/tasks/`, { name, listId }, { headers: { 'x-kbn-token': token } })
      client.post(`/tasks/`,{ name,"list":listId })
        .then(response => resolve(response.data))
        .catch(err => {
          console.log("listId")
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },

  update: (token, { taskId, name, description, list }) => {
    return new Promise((resolve, reject) => {
      console.log(list)
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
