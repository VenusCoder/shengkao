<template>
  <div>
    <el-tree
      style="max-width: 600px"
      :data="data"
      :props="defaultProps"
      node-key="label"
      @node-click="handleNodeClick"
    >
      <template #default="{ node, data }">
        <span>{{ node.label }}</span>
        <span class="action" style="float: right">
          <el-button type="primary" link @click="goToPractice(data)">去练习</el-button>
        </span>
      </template>
    </el-tree>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useTestBankListStore } from '@/stores/testbank/testbanklist'
import { useRouter } from 'vue-router'
import { ElButton } from 'element-plus'

import { useHead } from '@unhead/vue'

useHead({
  title: '广东行测真题,行测真题,申论真题,广东申论真题,行测题库', // 设置页面标题
  meta: [
     { name: 'keywords', content: '广东公考试题, 广东省考真题, 行测真题, 申论真题' },
    { name: 'description', content: '广东公务员考试备考平台，提供行测真题解析、申论技巧及模块化训练。重点突破言语理解、判断推理等高频模块，科学规划复习路径，提升做题准确率。' }, 
   
  ],
})



const router = useRouter()
const testBankListStore = useTestBankListStore()

interface Tree {
  label: string
  nid?: number
  iid?: number
  children?: Tree[]
}

testBankListStore.testBankListResultAction()

const handleNodeClick = (data: Tree) => {
  console.log(data.nid)
  console.log(data.iid, '分类的id')
}

// 修改点击事件处理函数，以便导航到练习页面（如果需要）
const goToPractice = async (data: Tree) => {
  console.log('Go to practice for:', data, data.iid)
  const iid = await data.iid
  // 这里可以添加导航到具体练习页面的逻辑，例如：
  router.push({
    path: `/testbankdetail/${iid}`,
  })
  // router.push({ name: 'PracticePage', params: { id: data.id } })
  // 注意：这里假设每个数据项有一个唯一的 id，实际使用时需要根据数据结构进行调整
}

// const data: Tree[] = testBankListStore.testbanklistDatas
const data = computed(() => testBankListStore.testbanklistDatas)

const defaultProps = {
  children: 'children',
  label: 'label',
}
</script>

<style scoped>
.action {
  margin-left: 10px;
}
</style>

<!-- 




<template>
  <div>
    <el-tree
      style="max-width: 600px"
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
    >
    </el-tree><span>去练习</span>
  </div>
</template>

<script lang="ts" setup>
import { useTestBankListStore } from '@/stores/testbank/testbanklist'
import { useRouter } from 'vue-router'

const router = useRouter()

const testBankListStore = useTestBankListStore()
interface Tree {
  label: string
  children?: Tree[]
}
testBankListStore.testBankListResultAction()

const handleNodeClick = (data: Tree) => {
  console.log(data)
}

const data: Tree[] = testBankListStore.testbanklistDatas

const defaultProps = {
  children: 'children',
  label: 'label',
}
</script> -->
