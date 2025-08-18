<template>
  <div
    class="right-list"
    v-for="item in explainListStore.admindemo"
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

  <div class="demo-pagination-block">
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[5, 10, 15]"
      :small="small"
      layout=" sizes, prev, pager, next, jumper,total"
      :total="explainListStore.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useExplainListStore } from '@/stores/explain/explainlist'
import { useRouter, useRoute } from 'vue-router'

// const navData = reactive([] as any[])
const explainListStore = useExplainListStore()

const currentPage = ref(1)
const pageSize = ref(5)

const small = ref(false)

feachPage()

function handleSizeChange() {
  feachPage()
}
function handleCurrentChange() {
  feachPage()
}

function feachPage(formData: any = {}) {
  //1.获取offset/size/ page,limit,
  const pagesize = pageSize.value //绑定每页数量，有5,10,15选项
  const currentpage = currentPage.value

  const limit = (currentpage - 1) * pagesize //跳过多少条，第一页跳过0条，第二页跳过5条
  console.log(currentpage, '11111')
  const pageInfo = { currentpage, pagesize }
  const searchInfo = { ...pageInfo, ...formData }
  // 2.发起网络请求
  explainListStore.explainResultAction(searchInfo)
}

//跳转到详情页

const router = useRouter()
const route = useRoute()
const iid = route.params.iid

function bounceToDetail(iid: number) {
  router.push({
    path: `/explaindetail/${iid}`,
  })
}
//暴露出去网络请求
defineExpose({ feachPage })
</script>

<style lang="less" scoped>
.right-list {
    
    margin-bottom: 10px;
  display: flex;
  border-bottom: 1px solid#eee;
  .img {
    
    margin-bottom: 10px;

    img {
    display: block;
    width: 200px;
    height: 120px;
    border: 1px solid #eee;
     transition: transform 1s ease; /* 平滑过渡效果 */
    &:hover{
       transform: scale(1.1); /* 放大到1.2倍大小 */
    }
  }
  }
  .paper {
    margin-left: 15px;
    &:hover{
      color:#dc3333
    }
  }
}
</style>
