import { defineStore } from 'pinia'
import { getAboutUsDetailRequest } from '@/service/module/about/about'

interface Iaboutusdemo {
  iid: number
  title: string

  image: string
  content: string
  connectInformation: string
}

export const useAboutUsDetailStore = defineStore('aboutus', {
  state: () => ({
    aboutusdemo: [] as Iaboutusdemo[],
  }),

  getters: {
    // GET_TRAIN() {
    //     this.getTrainList()
    // }
  },
  actions: {
    async aboutusResultAction() {
      //实验  getAdminRequest

      const res = await getAboutUsDetailRequest()
      // console.log(res, '11111')

      this.aboutusdemo = res.data.data
    },
  },
  persist: true,
})
