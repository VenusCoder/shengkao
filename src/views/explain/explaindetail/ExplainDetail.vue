<template>
  <div v-for="item in explainetailStore.explaindetaildemo" :key="item.iid">
    <h2>{{ item.title }}</h2>
    <p>{{ item.connectInformation }}</p>
  </div>
</template>
<script setup lang="ts">
import LeftNavBar from '@/component/leftnavbar/LeftNavBar.vue'

import { useExplainDetailStore } from '@/stores/explain/explaindetail'
import { useRoute } from 'vue-router'
const route = useRoute()
import { ref,computed } from 'vue'
import { useHead } from '@unhead/vue'


const activeNames = ref(['1'])

const radio = ref('0')
const radio2 = ref('0')
const radio3 = ref('0')
const radio4 = ref('0')
// const iid = Number(route.params.iid)

// const iid = parseInt(route.query.iid)

// console.log(iid, '4444')

const explainetailStore = useExplainDetailStore()
// console.log(iid, typeof iid, '55555')
explainetailStore.explainDetailResultAction()

// ✅ 使用 computed 创建响应式的 head 配置
const head = computed(() => {
  const meta = explainetailStore.meta
  return {
    title: meta.title || '加载中...',
    meta: [
      { name: 'description', content: meta.description || '' },
      { name: 'keywords', content: meta.keywords || '' },
    ],
  }
})

// ✅ 在 setup 中直接调用 useHead，传入响应式 computed
useHead(head)
</script>
<style lang="less" scoped>
.common-layout {
  .el-radio {
    display: block;
  }
}
</style>
