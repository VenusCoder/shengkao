<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="280px">
        <LeftNavBar />
      </el-aside>
      <el-main>
        <search-all ref="searchRef" @onChildSubmit="handleChildSearch" />
        <!-- <search-all @onChildSubmit="handleChildSearch" /> -->
        <!-- <AdministrationSub ref="adminListRef" /> -->
        <div
          class="right-list"
          v-for="item in searchStore.searchdemo"
          :key="item.iid"
          @click="bounceToDetail(item.iid)"
        >
          <div class="img">
            <img :src="item.image" alt="" />
          </div>
          <div class="paper">
            <h3>{{ item.title }}</h3>
            <p>{{ item.paper }}</p>
          </div>
        </div>

        <!-- <div class="demo-pagination-block">
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[5, 10, 15]"
      :small="small"
      layout=" sizes, prev, pager, next, jumper,total"
      :total="loginStore.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div> -->
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import LeftNavBar from '@/component/leftnavbar/LeftNavBar.vue'
import { useSearchStore } from '@/stores/search'
// import AdministrationSub from '@/views/administration/Administration.vue'
import SearchAll from '@/views/administration/search/SearchAll.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router=useRouter()
const searchStore = useSearchStore()

// const iid = searchStore.iid

function bounceToDetail(iid: number) {
  router.push({
    path: `/admindetail/${iid}`,
  })
}

function handleChildSearch(formData: any) {
  console.log(formData, '5555')
  // adminListRef.value.feachPage(formData)
}

const searchRef = ref<InstanceType<typeof SearchAll>>()
console.log(searchRef, '555555')
</script>

<style lang="less" scoped>
.right-list {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid#eee;
  .img img {
    display: block;
    width: 200px;
    border: 1px solid #eee;
  }
  .paper {
    margin-left: 15px;
  }
}
</style>
