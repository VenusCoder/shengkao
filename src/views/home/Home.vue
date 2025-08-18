<template>
  <div class="nav">
    <search-all />
    <job-information></job-information>

   
  </div>
</template>

<script lang="ts" setup>
import SearchAll from '@/views/administration/search/SearchAll.vue'
import JobInformation from '../job/JobInformation.vue'
import { useSeoMeta  } from '@unhead/vue'

useSeoMeta ({
  title: '广东省考技巧网官网,广东公务员考试,行测真题,申论真题,广东省考,行测技巧,申论考试', 
  
    keywords:'公务员考试,广东省考,广东公务员考试,广东省考真题,行测真题,申论真题',
    description:'广东省考技巧网是专注于广东公务员考试的备考平台，提供行测与申论系统的答题策略及真题解析。针对行测，强调模块化训练，重点突破言语理解、判断推理等高频高分模块，并分享时间分配技巧;申论部分结合时政热点，提供写作模板与模拟题库，提升材料分析与对策撰写能力。'
   
  
})

</script>

<style scoped></style>
