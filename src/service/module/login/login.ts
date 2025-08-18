import myRequest from '@/service/index'

export function getLoginRequest(loginParams: any) {
  return myRequest.get({
    url: '/login',
    data: loginParams,
  })
}
