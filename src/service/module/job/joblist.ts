import myRequest from '@/service/index'

//joblist: any

export function postJobListRequest() {
  return myRequest.post({
    url: '/job',
  })
}
