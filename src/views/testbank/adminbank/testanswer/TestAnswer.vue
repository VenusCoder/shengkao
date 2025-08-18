<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="280px">
        <LeftNavBar />
      </el-aside>
      <el-main>
        <div class="detail">
          <h2>{{ testAdminAnswerStore.testadminanswerDatas.question }}</h2>

          <el-radio-group v-model="selectedAnswer[currentQuestionId]" disabled>
            <el-radio
              v-for="(option, index) in questionOptions"
              :key="index"
              :value="option.value"
              :class="getOptionClasses(option)"
            >
              <!-- 添加调试信息 -->
              <span style="margin-left: 8px; color: #909399; font-size: 0.8em">
                [{{ option.isCorrect ? '✓' : '✗' }}]
              </span>
              {{ option.value }}. {{ option.label }}
            </el-radio>
          </el-radio-group>

          <!-- 解析部分保持原样 -->
          <div class="demo-collapse">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item
                title="点击查看解析"
                :name="testAdminAnswerStore.testadminanswerDatas.iid"
              >
                <h3>{{ testAdminAnswerStore.testadminanswerDatas.answer }}</h3>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import LeftNavBar from '@/component/leftnavbar/LeftNavBar.vue'
import { useTestAdminAnswerStore } from '@/stores/testbank/testanswer'
import type { CollapseModelValue } from 'element-plus'
import { useRoute } from 'vue-router'

const testAdminAnswerStore = useTestAdminAnswerStore()
const route = useRoute()
// console.log(route.params.id, '进入就获取题目的id')
// const id=route.params.id

// testAdminAnswerStore.testAdminAnswerResultAction(id)

// 当前题目ID
const currentQuestionId = computed(() => testAdminAnswerStore.testadminanswerDatas._id)

// 获取题目选项
const questionOptions = computed(() => testAdminAnswerStore.testadminanswerDatas.options || [])

// 用户选择的答案
const selectedAnswer = ref<Record<number, string>>({})

// 动态类名计算
const getOptionClasses = (option: { value: string; isCorrect: boolean }) => {
  const questionId = currentQuestionId.value
  const userAnswer = selectedAnswer.value[questionId]

  return {
    'correct-answer': option.isCorrect,
    'wrong-answer': userAnswer === option.value && !option.isCorrect,
    'unselected-answer': userAnswer !== option.value && !option.isCorrect,
  }
}

// 折叠面板状态
const activeNames = ref(['1'])
const handleChange = (val: CollapseModelValue) => {
  console.log(val, 444444)
}
</script>

<style scoped>
/* 垂直排列选项组 */
.detail :deep(.el-radio-group) {
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-start;
  align-items: flex-start;
}
/* 深度覆盖Element样式 */
.detail :deep(.el-radio) {
  margin: 8px 0;
  display: block;
}

/* 正确选项样式 */
.detail ::v-deep(.correct-answer) {
  .el-radio__label {
    color: #67c23a !important;
    font-weight: 600;
  }
  .el-radio__inner {
    border-color: #67c23a !important;
    background: rgba(103, 194, 58, 0.1) !important;
    &::after {
      background-color: #67c23a !important;
      width: 6px; /* 确保选中标记可见 */
      height: 6px;
    }
  }
}

/* 错误选中样式 */
.detail ::v-deep(.wrong-answer) {
  .el-radio__label {
    color: #f56c6c !important;
    text-decoration: line-through wavy red 2px; /* 更明显的删除线 */
  }
  .el-radio__inner {
    border-color: #f56c6c !important;
    background: rgba(245, 108, 108, 0.1) !important;
    &::after {
      background-color: #f56c6c !important;
    }
  }
}

/* 未选中普通选项 */
.detail ::v-deep(.unselected-answer) {
  .el-radio__label {
    color: #909399 !important;
    opacity: 0.7;
  }
  .el-radio__inner {
    border-color: #dcdfe6 !important;
    &::after {
      background-color: transparent !important; /* 确保未选中时无标记 */
    }
  }
}
.detail {
  h2 {
    font-size: 16px;
  }
}
</style>
