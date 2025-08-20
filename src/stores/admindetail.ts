import { defineStore } from 'pinia'
import { getAdminDetailRequest } from '@/service/module/admin/admindetail'

// 定义 meta 的接口
interface Meta {
  title: string
  keywords: string
  description: string
}

interface Inavdemo {
  iid: number
  title: string

  options: {
    optionA: string
    optionB: string

    optionC: string
    optionD: string
  }

  answer: string
  question: string
  paper: string
  image: string
  path: string
  name: string
  content: string
  meta: Meta // 初始为空，获取数据后赋值为 Meta
}

export const useAdminDetailStore = defineStore('admindetail', {
  state: () => ({
    adminDetaildemo: [] as Inavdemo[],
    options: {},
    meta: {
      title: '',
      keywords: '',
      description: '',
    } as Meta, // 指定 meta 类型并设置初始值
  }),

  getters: {
    // GET_TRAIN() {
    //     this.getTrainList()
    // }
  },
  actions: {
    async adminDetailResultAction(iid: number) {
      //实验  getAdminRequest

      const res = await getAdminDetailRequest(iid)

      this.adminDetaildemo = res.data.data.findAdminDetailData

      this.options = res.data.data.findAdminDetailData[0].options
      this.meta = res.data.data.findAdminDetailData[0].meta
    },
  },
  persist: true,
})
