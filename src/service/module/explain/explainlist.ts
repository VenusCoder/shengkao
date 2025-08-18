import myRequest from '@/service/index'

export function postExplainListRequest(explainlist: any) {
  return myRequest.post({
    url: '/explainlist',
    data: explainlist,
  })
}
