<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="280px">
        <LeftNavBar />
      </el-aside>
      <el-main>
        <div
          class="detail"
          v-for="item in testExplainDetailStore.testexplaindetailDatas"
          :key="item.iid"
        >
          <!-- 题目内容 -->
          <h2>{{ item.question }}</h2>

          <!-- 单个 radio-group 绑定当前题目选中值
           value (选项值) 和 label (展示文本)：


           -->
          <!-- <el-radio-group v-model="selectedAnswer[item.iid]" @change="handleAnswerChange(item.iid)">
            <el-radio v-for="(option, key) in item.options" :key="key" :value="option.value">
              {{ option.value }}
              {{ option.label }}
            </el-radio>
          </el-radio-group> -->

          <div class="demo-collapse">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="点击查看答案" :name="item.iid">
                <h3>{{ item.answer }}</h3>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive,computed } from 'vue'
import { useHead } from '@unhead/vue'
import LeftNavBar from '@/component/leftnavbar/LeftNavBar.vue'
import { useTestExplainDetailStore } from '@/stores/testbank/testexplain/testexplaindetail'
import { useTestAdminAnswerStore } from '@/stores/testbank/testanswer'

import type { CollapseModelValue } from 'element-plus'

import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const testExplainDetailStore = useTestExplainDetailStore()
const testAdminAnswerStore = useTestAdminAnswerStore()

//seo处理
// ✅ 使用 computed 创建响应式的 head 配置
const head = computed(() => {
  const meta = testExplainDetailStore.meta
  return {
    title: meta.title || '广东省考技巧网',
    meta: [
      { name: 'description', content: meta.description || '' },
      { name: 'keywords', content: meta.keywords || '' },
    ],
  }
})

// ✅ 在 setup 中直接调用 useHead，传入响应式 computed
useHead(head)

// const selectedAnswer = ref<Record<number, string>>({})
// const nid = Number(route.params.nid)
// const detailparams = reactive({
//   nid: Number(route.params.nid),
//   answer: selectedAnswer.value,
//   iid: 0,
// })
// console.log(detailparams, '这是要传给后端的参数')

// 修改 detailparams 类型
const detailparams = reactive<{
  nid: number
  answer: Record<number, string>
  iid: number
}>({
  nid: Number(route.params.nid),
  answer: {},
  iid: 0,
})

testExplainDetailStore.testExplainDetailResultAction(detailparams)

//选项处理

// function handleAnswerChange(iid: number) {
//   console.log(iid, '题目的id')
//   console.log(selectedAnswer.value, '要提交的答案')
//   detailparams.answer = selectedAnswer.value
//   detailparams.iid = iid
// }

// 每个题目的选中答案状态 {题目ID: 选项值}
// const selectedAnswers = ref<Record<string, string>>({})

// 折叠面板状态
const activeNames = ref(['1'])
const handleChange = (val: CollapseModelValue) => {
  console.log(val, 444444)
}

// 提交答案逻辑
// const answer= selectedAnswer.value
// interface IsubmitInfo {

//   answer:string

// }
// const submitInfo:IsubmitInfo={

//   answer

// }

// const submitAnswer = async () => {
//   console.log(selectedAnswer.value, '选项的答案')
//   // console.log(detailparams.iid, '要传给后端的参数iid,55555')

//   try {

//     // const res = await testAdminAnswerStore.testAdminAnswerResultAction(detailparams)
//     console.log(detailparams, '0000')
//      await testAdminAnswerStore.testAdminAnswerResultAction(detailparams)
//        console.log(detailparams.iid, '要传给后端的参数iid,55555')

//     router.push({
//       path:`/testanswer/${detailparams.iid}`
//     })

//   } catch {
//     console.log('交卷失败')
//   }
// }
</script>

<style scoped>
/* 垂直排列选项组 */
.detail :deep(.el-radio-group) {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* 标签文本换行 */
.detail :deep(.el-radio__label) {
  white-space: normal !important;
  word-break: break-word;
}

/* 调整单选框对齐 */
.detail :deep(.el-radio) {
  align-items: flex-start; /* 文本顶部对齐 */
}
</style>
