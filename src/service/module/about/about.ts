import myRequest from '@/service/index'

//joblist: any

export function getAboutUsDetailRequest() {
  return myRequest.get({
    url: '/about',
  })
}
