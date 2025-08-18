<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="280px">
        <LeftNavBar />
      </el-aside>
      <el-main>
        <search-all @onChildSubmit="handleChildSearch" ref="searchRef" />
        <ExplainListSub ref="explainlistsubRef" />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import LeftNavBar from '@/component/leftnavbar/LeftNavBar.vue'
import ExplainListSub from '@/views/explain/explainlist/explainsub/ExplainListSub.vue'
import SearchAll from '@/views/administration/search/SearchAll.vue'
import { ref } from 'vue'

import { useSearchStore } from '@/stores/search'

import { useHead } from '@unhead/vue'

useHead({
  title: '申论答题技巧,申论答题模板,申论怎么答题,申论答题思路,申论答题要点', // 设置页面标题
  meta: [
    { name: 'description', content: '申论答题技巧提升写作效率，申论答题模板助你规范作答，详解申论怎么答题，快速掌握高分秘诀，备考必备指南。' }, 
    { name: 'keywords', content: '申论答题技巧,申论答题模板,申论怎么答题,申论答题思路,申论答题要点' },
  ],
})




const searchStore = useSearchStore()

// searchStore.searchResultAction(searchRef.value.title)
// console.log(searchStore.searchdemo, '1111111111111')

function handleChildSearch(formData: any) {
  console.log(formData, '5555')
  explainlistsubRef.value?.feachPage(formData)
}

const explainlistsubRef = ref<InstanceType<typeof ExplainListSub>>()
const searchRef = ref<InstanceType<typeof SearchAll>>()
</script>

<style></style>
