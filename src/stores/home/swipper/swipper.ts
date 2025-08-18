import { defineStore } from 'pinia'
import { getSwipperRequest } from '@/service/module/home/swipper'

// interface Iswipperdemo {


//   image: string[]
// }

export const useSwipperStore = defineStore('swipper', {
  state: () => ({
    swipperdemo: [] ,
  }),

  getters: {
    // GET_TRAIN() {
    //     this.getTrainList()
    // }
  },
  actions: {
    async swipperResultAction() {
      //实验  getAdminRequest

      const res = await getSwipperRequest()

      this.swipperdemo = res.data.data.findSwipperData[0].image
      // console.log(this.swipperdemo , '轮播图数据')
    },
  },
  persist: true,
})
