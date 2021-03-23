import Vue from 'vue'
import md5 from 'js-md5'
const axios = require('axios')

const api = {
  /*
  * 测试
  */
  test: '/qingzhouApi/index.php/index/Index/index'
}

/*
* 生成签名
*/
const getSignature = function () {
  let port = '787720'
  let key = '7829103092'
  let value = '7c28d32a71ebd416'
  let timestamp = Date.parse(new Date()).toString().substr(0, 10)
  let sign = md5(timestamp + key + value).toUpperCase()
  let obj = {
    sign: sign,
    port: port,
    time: timestamp
  }
  return obj
}

/**
 * Get请求
 * @param [object] [请求参数]
 * @callback [function] [回调函数]
 */
Vue.prototype.get = function (param, callback) {
  let query = param.data ? param.data : {}
  let obj = getSignature()
  query.sign = obj.sign
  query.port = obj.port
  query.timestamp = obj.time
  let token = localStorage.getItem('qingZhouUserToken')
  if (token) {
    query.token = token
  }
  axios.get(api[param.url], {
    params: query
  }).then((res) => {
    callback(res.data)
  }).catch((err) => {
    console.log(err)
  })
}

/**
 * POST请求
 * @param [object] [请求参数]
 * @callback [function] [回调函数]
 */
Vue.prototype.post = function (param, callback) {
  let query = param.data ? param.data : {}
  let obj = getSignature()
  query.sign = obj.sign
  query.port = obj.port
  query.timestamp = obj.time
  let token = localStorage.getItem('qingZhouUserToken')
  if (token) {
    query.token = token
  }
  axios.post(api[param.url], query).then((res) => {
    callback(res.data)
  }).catch((err) => {
    console.log(err)
  })
}

/**
 * PUT请求
 * @param [object] [请求参数]
 * @callback [function] [回调函数]
 */
Vue.prototype.put = function (param, callback) {
  let query = param.data ? param.data : {}
  let obj = getSignature()
  query.sign = obj.sign
  query.port = obj.port
  query.timestamp = obj.time
  let token = localStorage.getItem('qingZhouUserToken')
  if (token) {
    query.token = token
  }
  axios.put(api[param.url], query).then((res) => {
    callback(res.data)
  }).catch((err) => {
    console.log(err)
  })
}

/**
 * DELETE请求
 * @param [object] [请求参数]
 * @callback [function] [回调函数]
 */
Vue.prototype.delete = function (param, callback) {
  let query = param.data ? param.data : {}
  let obj = getSignature()
  query.sign = obj.sign
  query.port = obj.port
  query.timestamp = obj.time
  let token = localStorage.getItem('qingZhouUserToken')
  if (token) {
    query.token = token
  }
  axios.delete(api[param.url], {
    params: query // data改为params即可
  }).then((res) => {
    callback(res.data)
  }).catch((err) => {
    console.log(err)
  })
}
