import axios from 'axios'
import type {
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
   
  
} from 'axios'
import type{ MYrequestConfig } from '../type/type'





class MYrequest {
  instance: AxiosInstance

  constructor(config: MYrequestConfig) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use(
      (config) => {

        return config
      },
      (err) => {
        return err
      },
    )
    //全局拦截器，也就是每个实例都会加上拦截器
    this.instance.interceptors.response.use(
      (res) => {
        console.log('全局响应拦截器')
        return res
      },
      (err) => {
        return err
      },
    )

    //局部拦截
    
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccess,

      config.interceptors?.requestFail,
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccess,
      config.interceptors?.responseFail,
    )
  }
  //请求方法
  request<T=any>(config: MYrequestConfig<T>) {
    //单次拦截
    if(config.interceptors?.requestSuccess){
      config=config.interceptors.requestSuccess(config)
      
    }

    console.log('全局响应拦截器成功')

    return new Promise<T>((resolve,reject)=>{
      //在响应内部发送网络请求
      this.instance.request<any,T>(config).then(res=>{
        
       if(config.interceptors?.responseSuccess){
        res=config.interceptors?.responseSuccess(res)
        
       }
       resolve(res)

      }).catch(err=>{
        reject(err)
      })
     

    })
  }
  get<T=any>(config: MYrequestConfig<T>){
    return this.request({...config,method:'GET'})

  }
  post<T=any>(config: MYrequestConfig<T>){
    return this.request({...config,method:'POST'})

  }
}

export default MYrequest
