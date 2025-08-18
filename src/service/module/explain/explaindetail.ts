import myRequest from '@/service/index'

export function postExplainDetailRequest() {
  return myRequest.post({
    url: '/explaindetail',
  })
}
