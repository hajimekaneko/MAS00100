import client from './client'

export default {
  login: authInfo => {
    console.log(authInfo)
    return new Promise((resolve, reject) => {
      console.log("hogehoge2")
      console.log(authInfo)
      client.post('/auth/login', authInfo)
        .then(res => resolve({ token: res.data.token, userId: res.data.userId }))
        .catch(err => {
          console.log("hogehoge123")
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },

  logout: token => {
    return new Promise((resolve, reject) => {
      client.delete('/auth/logout', { headers: { 'x-kbn-token': token } })
        .then(() => resolve())
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
