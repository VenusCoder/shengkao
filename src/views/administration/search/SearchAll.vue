<template>
  <div class="text-center">
    <el-form :model="searchValue" label-width="120px" style="max-width: 600px" @submit.prevent>
      <el-form-item>
        <el-input
          v-model="searchValue.title"
          style="width: 300px; margin-right: 20px"
          size="large"
          placeholder="请输入关键词搜索"
          :suffix-icon="Search"
          @keyup.enter="bounceToSearch()"
        />
        <el-button type="primary" @click="handleSearch">搜索</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { useSearchStore } from '@/stores/search'

const router = useRouter()
const searchStore = useSearchStore()

// 如果不需要自定义事件，可以移除这一行
// const emit = defineEmits(['onChildSubmit'])

const searchValue = reactive({
  title: '',
})

async function bounceToSearch() {
  console.log('键盘搜索', searchValue.title)
  
  // 确保有搜索关键词
  if (!searchValue.title.trim()) {
    console.warn('搜索关键词为空')
    return
  }
  
  try {
    // 执行搜索并获取结果状态
    const hasResults = await searchStore.searchResultAction(searchValue)
    
    // 根据结果跳转路由
    if (hasResults) {
      router.push({ path: '/searchadmin' })
    } else {
      router.push({ path: '/404' })
    }
  } catch (error) {
    console.error('搜索过程出错:', error)
    router.push({ path: '/404' })
  }
}

// 修改后的搜索按钮处理函数
async function handleSearch() {
  console.log('提交搜索', searchValue.title)
  
  // 如果需要自定义事件，可以保留
  // emit('onChildSubmit', searchValue)
  
  // 调用相同的搜索逻辑
  await bounceToSearch()
}
</script>

<style scoped>
.text-center {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
</style>