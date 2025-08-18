import { defineStore } from 'pinia'
import { postJobDetailRequest } from '@/service/module/job/jobdetail'

interface Meta {
  title: string
  keywords: string
  description: string
}


interface Ijobdetaildemo {
  xiid?: number
  siid?: number
  giid?:number
  name: string

  content: string

  title: string

  
  condition: string
  meta:Meta
}

export const useJobDetailStore = defineStore('jobdetail', {
  state: () => ({
    jobDetailDatas: [] as Ijobdetaildemo[],
    xingzhengDatas:[]as Ijobdetaildemo[],
    shiyeDatas:[]as Ijobdetaildemo[],
    guoqiDatas:[]as Ijobdetaildemo[],
    xiid: 0,
    
    meta: {
      title: '',
      keywords: '',
      description: '',
    } as Meta, 

  }),

  actions: {
    //行测技巧列表数据
    async jobDetailResultAction(jobdetail: any) {
      const res = await postJobDetailRequest(jobdetail)
      // console.log(res,'职位表详情页的搜索过滤的数据')
      

        this.xingzhengDatas = res.data.data.findJobDetailData[0].xingzheng|| []
        this.shiyeDatas = res.data.data.findJobDetailData[0].shiye|| []
        this.guoqiDatas = res.data.data.findJobDetailData[0].guoqi|| []

      //   this.guoqiDatas = res.data.data.findJobListData[1].guoqi

  // console.log(this.xingzhengDatas, '行政数据')
  //   console.log(this.shiyeDatas, '事业数据')

      //   this.total = res.data.data.total
       this.meta = 
    this.xingzhengDatas[0]?.meta || 
    this.shiyeDatas[0]?.meta || 
    this.guoqiDatas[0]?.meta || 
    { title: '', keywords: '', description: '' } 

            //  console.log(this.meta, 'seo数据')

    },
  },
  persist: true,
})
