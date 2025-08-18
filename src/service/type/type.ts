import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface MYinterceptors<T = AxiosResponse> {
  requestSuccess?: (config: any) => any
  requestFail?: (err: any) => any
  responseSuccess?: (res: T) => T
  responseFail?: (err: any) => any
}

export interface MYrequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MYinterceptors<T>
}

export interface Iadmindemo {
  limit: number
  page: number
}
