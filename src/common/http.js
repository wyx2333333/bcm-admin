/** @format */

import axios from 'axios'
import qs from 'qs'
import { Loading, Message } from 'element-ui'

let loading
const startLoading = (loadingText = '加载中...') => {
  loading = Loading.service({
    lock: true,
    text: loadingText,
    background: 'rgba(0, 0, 0, 0.5)'
  })
}
const endLoading = () => {
  loading.close()
}

let needLoadingRequestCount = 0
const showFullScreenLoading = loadingText => {
  if (needLoadingRequestCount === 0) {
    startLoading(loadingText)
  }
  needLoadingRequestCount++
}
const endFullScreenLoading = () => {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = 'http://localhost:8080'

// POST传参序列化
axios.interceptors.request.use(
  config => {
    if (config.showLoading) {
      showFullScreenLoading(config.loadingText)
    }
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  error => {
    console.error('错误的传参!')
    return Promise.reject(error)
  }
)

// code状态码200判断
axios.interceptors.response.use(
  res => {
    if (res.config.showLoading) {
      endFullScreenLoading()
    }
    if (res.status === 200) {
      // 设计的接口状态码,成功返回1,失败返回0
      if (res.data.status !== 1) {
        Message({
          message: res.data.msg, // 服务端返回的错误信息
          duration: 1200,
          type: 'error'
        })
        return Promise.reject(res.data.msg)
      }
    } else {
      return Promise.reject(res)
    }
    return res
  },
  error => {
    Message({
      message: '网络异常，请稍后再试！',
      duration: 1200,
      type: 'error'
    })
    return Promise.reject(error)
  }
)
export default axios
