import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5008'
axios.interceptors.response.use(response => {
  return response.data
})

export default axios
