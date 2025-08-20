import { defineStore } from 'pinia'
import { getNavRequest } from '@/service/module/home/home'
import { postAdminListRequest } from '@/service/module/admin/admin'

// interface IloginFace{
//     id: number,
//     title:string,
//     path: string,
//     name: string,
//     content:string,
// }
interface Inavdemo {
  iid: number
  path: string
  name: string
  title: string
  content: string
}
interface Iadmindemo {
  iid: number
  title: string
  paper: string
  image: string
  path: string
  name: string
  content: string
}

export const useLoginStore = defineStore('login', {
  state: () => ({
    navdemo: [] as Inavdemo[],
    admindemo: [] as Iadmindemo[],
    total: 0,
    iid: 0,
  }),

 
  actions: {
    //左侧导航栏
    async loginResult(iid: number) {
      const res=await getNavRequest(iid)
      
        this.navdemo = res.data.data.findNavData

       
        

    },

    //行测技巧列表数据
    async adminResultAction(adminlist: any) {
      const res = await postAdminListRequest(adminlist)

      this.admindemo = res.data.data.list
      this.total = res.data.data.pagination.total
    },
  },
  persist: true,
})
