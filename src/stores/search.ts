import { defineStore } from 'pinia'
import { postSearchRequest } from '@/service/module/search/search'

interface Iadmindemo {
  iid: number
  title: string
  paper: string
  image: string
  path: string
  name: string
  content: string
}

export const useSearchStore = defineStore('search', {
  state: () => ({
    searchdemo: [] as Iadmindemo[],
    total: 0,
    iid: 0,
    name: '',
    hasResults: false, // 新增：是否有搜索结果的标记
  }),

  actions: {
    async searchResultAction(searchParams: any): Promise<boolean> {
      try {
        const res = await postSearchRequest(searchParams)
        console.log(res, '搜索结果的数据')
        
        // 检查响应结构是否有效
        if (res.data && res.data.data && res.data.data.list) {
          this.searchdemo = res.data.data.list
          this.total = res.data.data.pagination.total
          
          // 安全获取第一个结果的 iid（避免空数组错误）
          this.iid = res.data.data.list[0]?.iid || 0
          
          // 设置是否有结果的标记
          this.hasResults = res.data.data.list.length > 0
          
          // console.log(res.data.data, '444444')
          return this.hasResults
        } else {
          console.error('搜索结果格式错误:', res)
          this.hasResults = false
          return false
        }
      } catch (error) {
        console.error('搜索请求失败:', error)
        this.hasResults = false
        return false
      }
    },
  },
  persist: true,
})