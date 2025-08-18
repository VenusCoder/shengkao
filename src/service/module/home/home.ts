import myRequest from '../../index.ts'

//codercba.com:1888/airbnb/api/home/highscore

interface IhomeData {
  data: any
  returnCode: string
  success: boolean
}

// 没有局部和单次拦截
export function multidataRequest() {
  return myRequest.get<IhomeData>({
    url: '/home/multidata',
  })
}

export function getNavRequest(iid: number) {
  return myRequest.get({
    url: '/home',
    params: {
      iid,
    },
  })
}
