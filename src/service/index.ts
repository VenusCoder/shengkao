import MYrequest from './request/request'
import { TIME_OUT } from './config/config'

// 任意组件/工具文件中
const apiUrl = import.meta.env.VITE_BASE // 自动类型推断为 string
const imgUrl = import.meta.env.VITE_IMG_BASE

let myRequest = new MYrequest({
  baseURL: import.meta.env.VITE_BASE,
  timeout: TIME_OUT,
})

//  export const myRequest2 = new MYrequest({
//   baseURL: "http://codercba.com:1888/airbnb/api",
//   timeout: TIME_OUT,
//   interceptors: {
//     requestSuccess: (config) => {
//       console.log('某个实例的请求拦截')

//       return config
//     },
//     requestFail: (err) => {
//       console.log('某个实例请求拦截失败')
//       return err
//     },
//     responseSuccess: (res) => {
//       console.log('某个实例响应成功')
//       return res
//     },
//     responseFail: (err) => {
//       console.log('某个实例响应失败')
//       return err
//     },
//   },
// })

export default myRequest
