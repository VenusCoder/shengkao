import { defineStore } from 'pinia'
import { postTestExplainListRequest } from '@/service/module/testbank/testexplain/testexplainlist'

// interface IloginFace{
//     id: number,
//     title:string,
//     path: string,
//     name: string,
//     content:string,
// }

interface Itestexplainlistdemo {
  label: string // 一级分类名称
  children: [
    {
      label: string // 二级分类名称
      children: [
        {
          label: string // 三级分类名称
          questions: number // 该三级分类下的题目数量
        },
      ]
    },
  ]
}

export const useTestExplainkListStore = defineStore('testexplainlist', {
  state: () => ({
    testExplainlistDatas: [] as Itestexplainlistdemo[],

    total: 0,
    iid: 0,
  }),

  actions: {
    //行测技巧列表数据
    async testExplianListResultAction() {
      const res = await postTestExplainListRequest()
      // console.log(res, '申论分类的列表数据')

      this.testExplainlistDatas = res.data.data.findTestExplainListData
      //   this.shiyeDatas = res.data.data.findJobListData[0].shiye

      //   this.guoqiDatas = res.data.data.findJobListData[0].guoqi

      //   this.total = res.data.data.total
      // console.log(this.testExplainlistDatas, '题库分类的列表数据')
    },
  },
  persist: true,
})
