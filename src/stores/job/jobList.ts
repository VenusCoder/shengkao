import { defineStore } from 'pinia'
import { postJobListRequest } from '@/service/module/job/joblist'

// interface IloginFace{
//     id: number,
//     title:string,
//     path: string,
//     name: string,
//     content:string,
// }

interface Ixjobdemo {
  xiid: number
  
  name: string
  salary: string
  people: string
  state: string
  content: string
  address: string
  title: string

  requireds: string

  path: string
}
interface Isjobdemo {
  
  siid: number
 
  name: string
  salary: string
  people: string
  state: string
  content: string
  address: string
  title: string

  requireds: string

  path: string
}
interface Igjobdemo {
  
  giid: number
  name: string
  salary: string
  people: string
  state: string
  content: string
  address: string
  title: string

  requireds: string

  path: string
}

export const useJobStore = defineStore('job', {
  state: () => ({
    xingzhengDatas: [] as Ixjobdemo[],
    shiyeDatas: [] as Isjobdemo[],
    guoqiDatas: [] as Igjobdemo[],
    total: 0,
    iid: 0,
  }),

  actions: {
    //行测技巧列表数据
    async jobResultAction() {
      const res = await postJobListRequest()
            // console.log(res, '职位表数据')


      this.xingzhengDatas = res.data.data.findJobListData[0].xingzheng
      this.shiyeDatas = res.data.data.findJobListData[0].shiye

      this.guoqiDatas = res.data.data.findJobListData[0].guoqi

      this.total = res.data.data.total
      // console.log(this.xingzhengDatas, '888888')
    },
  },
  persist: true,
})
