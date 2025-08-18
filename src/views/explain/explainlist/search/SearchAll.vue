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
//子组件自定义事件
const emit = defineEmits(['onChildSubmit'])
const searchStore = useSearchStore()

const searchValue = reactive({
  title: '',
})

function bounceToSearch() {
  console.log('键盘搜索', searchValue)
  searchStore.searchResultAction(searchValue)

  router.push({
    path: '/searchadmin',
  })
}

function handleSearch() {
  // router.push({
  //   path: '/searchadmin',
  // })

  console.log('提交搜索', searchValue.title)
  emit('onChildSubmit', searchValue)
}
</script>

<style scoped>
.text-center {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
</style>
