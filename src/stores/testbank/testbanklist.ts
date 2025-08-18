import { defineStore } from 'pinia'
import { postTestBankListRequest } from '@/service/module/testbank/testbanklist'

interface Itestbanklistdemo {
  label: string // 一级分类名称
  children: [
    {
      label: string // 二级分类名称
      children: [
        {
          label: string // 三级分类名称
          questions?: number // 该三级分类下的题目数量
        },
      ]
    },
  ]
}

export const useTestBankListStore = defineStore('testbanklist', {
  state: () => ({
    testbanklistDatas: [] as Itestbanklistdemo[],

    total: 0,
    iid: 0,
  }),

  actions: {
    //行测技巧列表数据
    async testBankListResultAction() {
      const res = await postTestBankListRequest()

      this.testbanklistDatas = res.data.data.findTestBankListData
      //   this.shiyeDatas = res.data.data.findJobListData[0].shiye

      //   this.guoqiDatas = res.data.data.findJobListData[0].guoqi

      //   this.total = res.data.data.total
      // console.log(this.testbanklistDatas, '题库分类的列表数据')
    },
  },
  persist: true,
})
