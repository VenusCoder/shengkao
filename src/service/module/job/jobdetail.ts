import myRequest from '@/service/index'

//joblist: any

export function postJobDetailRequest(jobdetail: any) {
  return myRequest.post({
    url: '/jobdetail',
    data: {
      jobdetail,
    },
  })
}
