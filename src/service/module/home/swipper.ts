import myRequest from '../../index.ts'

//codercba.com:1888/airbnb/api/home/highscore

export function getSwipperRequest() {
  return myRequest.get({
    url: '/swipper',
  })
}
