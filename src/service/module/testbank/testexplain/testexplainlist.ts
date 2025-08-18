import myRequest from '@/service/index'

//joblist: any

export function postTestExplainListRequest() {
  return myRequest.post({
    url: '/testexplainlist',
  })
}
