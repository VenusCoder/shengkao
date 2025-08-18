import { defineStore } from 'pinia'
import { postExplainListRequest } from '@/service/module/explain/explainlist'

// interface IloginFace{
//     id: number,
//     title:string,
//     path: string,
//     name: string,
//     content:string,
// }

interface Iadmindemo {
  iid: number
  title: string
  paper: string
  image: string
  path: string
  name: string
  content: string
}

export const useExplainListStore = defineStore('explainlist', {
  state: () => ({
    admindemo: [] as Iadmindemo[],
    total: 0,
    iid: 0,
  }),

  getters: {
    // GET_TRAIN() {
    //     this.getTrainList()
    // }
  },
  actions: {
    //行测技巧列表数据
    async explainResultAction(explainlist: any) {
      const res = await postExplainListRequest(explainlist)

      this.admindemo = res.data.data.findExplainListData
      this.total = res.data.data.total
      // console.log(res, '888888')
    },
  },
  persist: true,
})
