import { defineStore } from 'pinia'
import { postExplainDetailRequest } from '@/service/module/explain/explaindetail'

interface Meta {
  title: string
  keywords: string
  description: string
}

interface Iexplaindetaildemo {
  iid: number
  title: string

  image: string
  content: string
  connectInformation: string,
  meta:Meta
}

export const useExplainDetailStore = defineStore('explaindetail', {
  state: () => ({
    explaindetaildemo: [] as Iexplaindetaildemo[],
    meta: {
      title: '',
      keywords: '',
      description: '',
    } as Meta, 
  }),

  getters: {
    // GET_TRAIN() {
    //     this.getTrainList()
    // }
  },
  actions: {
    async explainDetailResultAction() {
      //实验  getAdminRequest

      const res = await postExplainDetailRequest()
      this.explaindetaildemo = res.data.data.findExplainDetailData
      this.meta=res.data.data.findExplainDetailData[0].meta
    },
  },
  persist: true,
})
