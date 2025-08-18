<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="280px">
        <LeftNavBar />
      </el-aside>
      <el-main>
        <div
          class="detail"
          v-for="item in testBankDetailStore.testbankdetailDatas"
          :key="item.questions.iid"
        >
          <!-- 题目内容 -->
          <h2>{{ item.questions.question }}</h2>

          <el-radio-group
            v-model="selectedAnswer[item.questions._id]"
            @change="handleAnswerChange(item.questions._id)"
          >
            <el-radio
              v-for="(option, key) in item.questions.options"
              :key="key"
              :value="option.value"
            >
              {{ option.value }}
              {{ option.label }}
            </el-radio>
          </el-radio-group>

          <!-- 操作按钮 -->

          <div class="action-buttons">
            <el-button type="primary" @click="submitAnswer">交卷</el-button>
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
import { useTestBankDetailStore } from '@/stores/testbank/testbankdetail'
import { useTestAdminAnswerStore } from '@/stores/testbank/testanswer'

// import type { CollapseModelValue } from 'element-plus'

import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const testBankDetailStore = useTestBankDetailStore()
const testAdminAnswerStore = useTestAdminAnswerStore()

const selectedAnswer = ref<Record<number, string>>({})

// 修改 detailparams 类型
const detailparams = reactive<{
  nid: number
  answer: Record<number, string>
  iid: number
  id: number
}>({
  nid: Number(route.params.nid),
  answer: {},
  iid: Number(route.params.iid),
  id: Number(route.params._id),
})

// console.log(route.params._id, '进入页面就有的_id')

testBankDetailStore.testAdminBankDetailResultAction(detailparams)

//seo处理
// ✅ 使用 computed 创建响应式的 head 配置
const head = computed(() => {
  const meta = testBankDetailStore.meta
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

//选项处理

function handleAnswerChange(_id: number) {
  console.log(_id, '平均数题目的_id')
  console.log(selectedAnswer.value, '要提交的答案')
  detailparams.answer = selectedAnswer.value
  detailparams.id = _id
}

//交卷
const submitAnswer = async () => {
  console.log(selectedAnswer.value, '选项的答案')
  // console.log(detailparams.iid, '要传给后端的参数iid,55555')

  try {
    // const res = await testAdminAnswerStore.testAdminAnswerResultAction(detailparams)
    // console.log(detailparams, '0000')
    // console.log(detailparams.id, '要传给后端的参数id,6666')

    // console.log(detailparams.iid, '要传给后端的参数iid,55555')
    // console.log(detailparams.id, '要传给后端的参数id,6666')

    router.push({
      path: `/testanswer/${detailparams.id}`,
    })
    await testAdminAnswerStore.testAdminAnswerResultAction(detailparams)
  } catch {
    console.log('交卷失败')
  }
}
</script>

<style scoped>
/* 主容器 */
.detail {
  max-width: 800px; /* 控制题目最大宽度 */
  margin: 0 auto;
  h2 {
    font-size: 16px;
  }
}

/* 选项组垂直排列 */
.detail :deep(.el-radio-group) {
  display: flex;
  flex-direction: row;
  gap: 12px; /* 增加选项间距 */
  margin: 20px 0;
}

/* 单个选项项样式 */
.detail :deep(.el-radio) {
  display: flex;
  align-items: flex-start; /* 顶部对齐 */
  min-height: 32px; /* 最小高度保持统一 */
  line-height: 1.5;
}

/* 调整单选框图标对齐 */
.detail :deep(.el-radio__input) {
  margin-top: 3px; /* 微调图标位置 */
  flex-shrink: 0; /* 防止图标压缩 */
}

/* 标签文本样式 */
.detail :deep(.el-radio__label) {
  white-space: normal;
  word-break: break-word;
  flex: 1; /* 占据剩余空间 */
  padding-left: 8px; /* 保持图标与文字间距 */
  text-align: justify; /* 两端对齐 */
}

/* 保持所有选项宽度一致 */
.detail :deep(.el-radio) {
  width: 100%;
  max-width: 720px; /* 根据容器宽度调整 */
}
</style>
