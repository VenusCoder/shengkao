import myRequest from '@/service/index'

//joblist: any

export function postTestBankListRequest() {
  return myRequest.post({
    url: '/testbank',
  })
}
