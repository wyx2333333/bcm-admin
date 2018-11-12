/** @format */

import axios from './http'
// 发送get请求(返回一个Promise)
const get = (url, param, showLoading, loadingText) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: param,
        showLoading: showLoading,
        loadingText: loadingText
      })
      .then(
        response => {
          resolve(response.data)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}

// 发送post请求(返回一个Promise)
const post = (url, params, showLoading, loadingText) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, {
        showLoading: showLoading,
        loadingText: loadingText
      })
      .then(
        response => {
          resolve(response.data)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}
// 获取菜单
const getMenuData = () => {
  return get('/json/menu.json', null, false, null)
}

export default {
  getMenuData: getMenuData
}
