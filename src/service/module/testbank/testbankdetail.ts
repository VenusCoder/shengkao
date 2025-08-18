import myRequest from '@/service/index'

//joblist: any

export function postTestBanDetailRequest(detailparams: any) {
  return myRequest.post({
    url: '/testadmindetail',
    data: { 
      detailparams 
    },
  })
}
