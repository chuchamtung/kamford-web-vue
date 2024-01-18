import axios from 'axios'
// import store from '@/store/index' 如果使用vuex，那么token，userinfo都可以在登录以后存储到store中，不需要使用storage
// 获取浏览器的接口地址。
//axios.defaults.baseURL = 'https://kamford.app'
//axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// axios.defaults.headers['token'] = localGet('token') || ''
//axios.defaults.headers['Access-Control-Allow-Origin'] = '*,*'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.timeout = 60000
axios.defaults.responseType = 'json'
axios.defaults.xsrfCookieName = 'XSRF-TOKEN'
axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN'



//
// // 请求拦截器，设置token
// axios.interceptors.request.use(config => {
//     if (localStorage && localStorage.getItem('token')) {
//         const token = localStorage.getItem('token')
//         token && (config.headers.Authorization = token)
//     }
//     return config
// }, error => {
//     // 可以安装elementui等ui组件，将错误信息输出到界面。
//     console.log(error)
//     return Promise.error(error)
// })
// // 响应拦截器
// axios.interceptors.response.use(response => {
//     if (response.status === 200) {
//         // 993登录过期
//         if (response.data.code !== '993') {
//             return Promise.resolve(response)
//         } else {
//             console.log('登录过期')
//             // store.commit('clearUserInfo')  // 使用vuex存储过用户信息，这里需要清空一下。
//             window.location.href = '/#/login'
//         }
//     } else {
//         return Promise.reject(response)
//     }
// })

// 2、封装请求方式
// @param url 接口地址
// @param data 携带参数
// @param file 上传文件对象
// @param auth 是否携带token
// get请求
export function get (url, data) {
    return axios.get(url, data)
}
// post请求
export function post (url, data) {
    return axios.post(url, data)
}
// put请求
export function put (url, data) {
    return axios.put(url, data)
}
// delete 请求
export function del (url, data) {
    return axios.delete(url, data)
}
// upload 请求
export function uploader (url, file) {
    let params = new FormData()
    params.append('file', file)
    return axios.post(url, params)
}