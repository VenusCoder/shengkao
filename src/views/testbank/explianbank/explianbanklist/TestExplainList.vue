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
import { useTestExplainkListStore } from '@/stores/testbank/testexplain/testexplain'
import { useRouter } from 'vue-router'
import { ElButton } from 'element-plus'

const router = useRouter()
const testExplainListStore = useTestExplainkListStore()

interface Tree {
  label: string
  nid?: number
  children?: Tree[]
}

testExplainListStore.testExplianListResultAction()

const handleNodeClick = (data: Tree) => {
  console.log(data.nid)
}

// 修改点击事件处理函数，以便导航到练习页面（如果需要）
const goToPractice = async (data: Tree) => {
  console.log('Go to practice for:', data, data.nid)
  const nid = await data.nid
  // 这里可以添加导航到具体练习页面的逻辑，例如：
  router.push({
    path: `/testexplaindetail/${nid}`,
  })
  // router.push({ name: 'PracticePage', params: { id: data.id } })
  // 注意：这里假设每个数据项有一个唯一的 id，实际使用时需要根据数据结构进行调整
}

// const data: Tree[] = testBankListStore.testbanklistDatas
const data = computed(() => testExplainListStore.testExplainlistDatas)

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
