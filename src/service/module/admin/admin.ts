import myRequest from '@/service/index'

export function postAdminListRequest(adminlist: any) {
  return myRequest.post({
    url: '/administration',
    data: adminlist,
  })
}


