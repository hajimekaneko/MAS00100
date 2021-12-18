import axios from 'axios'

export default axios.create({
    baseURL: process.env.VUE_APP_ROOT_API,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest"
    }
  });
