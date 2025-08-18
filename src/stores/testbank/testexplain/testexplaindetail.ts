import { defineStore } from 'pinia'
import { postTestexplainDetailRequest } from '@/service/module/testbank/testexplain/testexplaindetail'

interface Meta {
  title: string
  keywords: string
  description: string
}

interface Itestexplaindetaildemo {
  iid: number
  nid: number
  nickname: string
  question: string

  answer: string
  title: string

  paper: string
  name: string
  content: string
  meta:Meta
}

export const useTestExplainDetailStore = defineStore('testexplaindetail', {
  state: () => ({
    testexplaindetailDatas: [] as Itestexplaindetaildemo[],

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
    async testExplainDetailResultAction(detailparams: any) {
      const res = await postTestexplainDetailRequest(detailparams)
      // console.log(res, '申论数据')

      this.testexplaindetailDatas = res.data.data.findTestExplainDetailData[0].questions
            this.meta=this.testexplaindetailDatas[0]?.meta

      // console.log(this.testexplaindetailDatas, '申论题库详情页的数据')
      // this.optionsData=res.data.data.findTestAdminDetailData[0].questions.options
    },
  },
  persist: true,
})
