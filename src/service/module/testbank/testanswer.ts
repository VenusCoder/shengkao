import myRequest from '@/service/index'

//joblist: any

export function postTestAnswerRequest(detailparams: any) {
  return myRequest.post({
    url: '/testanswer',
    data: {
      detailparams
    },
  })
}
