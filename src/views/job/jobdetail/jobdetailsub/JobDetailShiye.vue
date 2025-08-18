<template>
       <div class="xingzheng" v-for="item in jobDetailStore.shiyeDatas" :key="item.siid">
    <h2>{{ item.title }}</h2>
    <p>{{ item.content }}</p>
   </div>
   
</template>

<script lang="ts" setup>
import { useJobDetailStore } from '@/stores/job/jobdetail'
import { useRoute } from 'vue-router'
import{computed}from'vue'
import { useHead } from '@unhead/vue'

const route = useRoute()
const siid = Number(route.params.siid)
const jobDetailStore = useJobDetailStore()
jobDetailStore.jobDetailResultAction(route.params)

// ✅ 使用 computed 创建响应式的 head 配置
const head = computed(() => {
  const meta = jobDetailStore.meta
  return {
    title: meta.title || '广东省考技巧网',
    meta: [
      { name: 'description', content: meta.description || '' },
      { name: 'keywords', content: meta.keywords || '' },
    ],
  }
})


// ✅ 在 setup 中直接调用 useHead，传入响应式 computed
useHead(head)


</script>
<style scoped lang="less">

</style>
