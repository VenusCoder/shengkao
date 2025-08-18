<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="280px">
        <LeftNavBar />
      </el-aside>
      <el-main>
        <search-all @onChildSubmit="handleChildSearch" ref="searchRef" />
        <AdministrationSub ref="adminListRef" />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import LeftNavBar from '@/component/leftnavbar/LeftNavBar.vue'
import AdministrationSub from './administrationsub/AdministrationSub.vue'
import SearchAll from '@/views/administration/search/SearchAll.vue'
import { ref } from 'vue'

import { useSearchStore } from '@/stores/search'
import { useHead } from '@unhead/vue'

useHead({
  title: '行测技巧,行测做题技巧,言语技巧,图推技巧', // 设置页面标题
  meta: [
    { name: 'description', content: '行测技巧需针对五大模块(言语理解、判断推理、资料分析、数量关系、常识判断)分别掌握核心方法：言语理解重逻辑与关键词;判断推理强图形规律与逻辑链;资料分析练速算与数据定位;数量关系熟记公式与题型分类;常识判断需积累时政与多领域知识。通过模块化训练，结合真题强化专项技巧，提升解题效率与准确率。' }, 
    { name: 'keywords', content: '言语技巧,数量技巧,资料分析技巧,速算技巧,常识技巧,科推技巧' },
  ],
})
const searchStore = useSearchStore()

// searchStore.searchResultAction(searchRef.value.title)

function handleChildSearch(formData: any) {
  adminListRef.value?.feachPage(formData)
}

const adminListRef = ref<InstanceType<typeof AdministrationSub>>()
const searchRef = ref<InstanceType<typeof SearchAll>>()
</script>

<style></style>
