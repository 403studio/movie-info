import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import { Loading } from 'element-ui'
// import store from '../store'

const request = axios.create({
  headers: {
    showLoading: true
  }
})
NProgress.configure({ showSpinner: false })

request.interceptors.request.use(config => {
  // let loadingInstance = Loading.service()
  // store.dispatch('setLoadingInstance', loadingInstance)
  if (config.headers.showLoading) {
    NProgress.start()
    delete config.headers.showLoading
  }
  return config
})
request.interceptors.response.use(response => {
  NProgress.done()
  // let loadingInstance = store.state.loadingInstance
  // loadingInstance.close()
  return response
}, function (error) {
  NProgress.done()
  // let loadingInstance = store.state.loadingInstance
  // loadingInstance.close()
  return Promise.reject(error)
})

export default request
