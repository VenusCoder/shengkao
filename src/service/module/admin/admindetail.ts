import myRequest from '@/service/index'

export function getAdminDetailRequest(iid: number) {
  return myRequest.post({
    url: '/admindetail',
    data: {
      iid,
    },
  })
}
