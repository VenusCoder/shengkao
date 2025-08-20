import { defineStore } from 'pinia'
import { postTestBanDetailRequest } from '@/service/module/testbank/testbankdetail'

interface Meta {
  title: string
  keywords: string
  description: string
}
interface Itestbankdetaildemo {
  nid: number
  nickname: string
  questions: {
    iid: number
    _id: number

    question: string
    options: [
      {
        value: string
        label: string
        isCorrect: boolean
      },
    ]

    answer: string
    title: string

    paper: string
    image: string
    name: string
    content: string
    meta:Meta
  }
}

export const useTestBankDetailStore = defineStore('testbankdetail', {
  state: () => ({
    testbankdetailDatas: [] as Itestbankdetaildemo[],

    total: 0,
    iid: 0,
     meta: {
      title: '',
      keywords: '',
      description: '',
    } as Meta, // 指定 meta 类型并设置初始值
  }),

  actions: {
    //行测技巧列表数据
    async testAdminBankDetailResultAction(detailparams: any) {
      const res = await postTestBanDetailRequest(detailparams)
      // console.log(res, '平均数数据')

      this.testbankdetailDatas = res.data.data.findTestAdminDetailData
      this.meta=this.testbankdetailDatas[0]?.questions.meta
   
    },
  },
  persist: true,
})
