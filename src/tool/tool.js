import axios from '../axios/axios'
export default {
  random (max, min) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
  },
  getImgUrl (url) {
    return `url(${require('@/assets/image/' + url)})`
  },
  getAsyncData (url) {
    return axios.get('/data/' + url)
  }
}
