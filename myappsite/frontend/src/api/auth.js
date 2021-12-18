import client from './client'

export default {
  login: authInfo => {
    return new Promise((resolve, reject) => {
      client.post('/auth/login/', authInfo)
        // .then(response => console.log(response.data))
        .then(response => resolve({ token: response.data.token, userId: response.data.userId }),
        )
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },

  logout: token => {
    return new Promise((resolve, reject) => {
      client.delete('/auth/logout/', { headers: { 'x-kbn-token': token }})
        .then(() => resolve())
        .catch(err => {
          console.log("err"),
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
