<template>
    <div class="guoqi" v-for="item in jobDetailStore.guoqiDatas" :key="item.giid">
 <h2>{{ item.name }}</h2>
</div>

</template>

<script lang="ts" setup>
import { useJobDetailStore } from '@/stores/job/jobdetail'
import { useRoute } from 'vue-router'
const route = useRoute()
const giid = Number(route.params.giid)
const jobDetailStore = useJobDetailStore()
jobDetailStore.jobDetailResultAction(route.params)


</script>
<style scoped lang="less">

</style>
