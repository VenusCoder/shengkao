import myRequest from '@/service/index'

export function postSearchRequest(searchParams: any) {
  return myRequest.post({
    url: '/administration',
    data: searchParams,
  })
}
