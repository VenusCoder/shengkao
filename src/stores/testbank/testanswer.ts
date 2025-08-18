import { defineStore } from 'pinia'
import { postTestAnswerRequest } from '@/service/module/testbank/testanswer'

// interface IloginFace{
//     id: number,
//     title:string,
//     path: string,
//     name: string,
//     content:string,
// }

interface Itestbankdetaildemo {
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
  correctAnswer: string

  paper: string
  image: string
  name: string
  content: string
}

export const useTestAdminAnswerStore = defineStore('testadminanswer', {
  state: () => ({
    testadminanswerDatas: {} as Itestbankdetaildemo,

    total: 0,
    iid: 0,
  }),

  actions: {
    //行测技巧列表数据
    async testAdminAnswerResultAction(detailparams: any) {
      const res = await postTestAnswerRequest(detailparams)
      console.log(res, '来自对过答案后的数据')

      this.testadminanswerDatas = res.data.data[0].questionData
      console.log(this.testadminanswerDatas, '答案详情页的数据')
      // this.optionsData=res.data.data.findTestAdminDetailData[0].questions.options
    },
  },
  persist: true,
})
