import myRequest from '@/service/index'

//joblist: any

export function postTestexplainDetailRequest(detailparams: any) {
  return myRequest.post({
    url: '/testexplaindetail',
    data: {
      detailparams,
    },
  })
}
