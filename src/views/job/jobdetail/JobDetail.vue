<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="280px">
        <LeftNavBar />
      </el-aside>
      <el-main>
        <!-- <div class="detail" v-for="item in admindetailStore.adminDetaildemo" :key="item.iid">
          <h2>{{ item.question }}</h2>
        </div> -->

      <router-view/>
      </el-main>
    </el-container>
  </div>
 
</template>
<script setup lang="ts">
import LeftNavBar from '@/component/leftnavbar/LeftNavBar.vue'

// import { useJobDetailStore } from '@/stores/job/jobdetail'
import {RouterView } from 'vue-router'
// const route = useRoute()

// import type { CollapseModelValue } from 'element-plus'







// const jobDetailStore = useJobDetailStore()
// // console.log(iid, typeof iid, '55555')
// jobDetailStore.jobDetailResultAction()
</script>
<style lang="less" scoped>
.common-layout {
  .el-radio {
    display: block;
  }
}
</style>
