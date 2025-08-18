<template>
  <el-tabs type="border-card" class="demo-tabs">
    <div>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><calendar /></el-icon>
            <span>行测题</span>
          </span>
        </template>
        <div class="job">
          <AdminBankListSub />
        </div>
        <!-- 补充4个i元素 -->

        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
      </el-tab-pane>
    </div>

    <el-tab-pane label="申论题">
      <div class="job">
        <TestExplainList />
      </div>
      <!-- 补充4个i元素 -->
      <i></i><i></i><i></i><i></i><i></i><i></i>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { Calendar } from '@element-plus/icons-vue'
import { useJobStore } from '@/stores/job/jobList'
import AdminBankListSub from '../../../../views/testbank/adminbank/adminbanklist/adminbanklistsub/AdminBankListSub.vue'

import TestExplainList from '../../../../views/testbank/explianbank/explianbanklist/TestExplainList.vue'

import { useRouter } from 'vue-router'
const router = useRouter()
const jobStore = useJobStore()

// function bounceToxingzhengDetail(xiid: number) {

//   //命名路由
//   router.push({
//     name: 'xingzheng',
//     params:{
//       xiid
//     }
//   })
// }

//下面数据是不是能用到需要再看

// function bounceToshiyeDetail(siid: number) {
//   //编程方式导航
//   router.push({
//     path: `/jobdetail/shiye/${siid}`,
//   })
// }
// function bounceToguoqiDetail(giid: number) {
//   router.push({
//     path: `/jobdetail/guoqi/${giid}`,
//   })
// }

// jobStore.jobResultAction()
// 可以在这里进行数据获取或其他操作
</script>
<style scoped lang="less">
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #0a61f7;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}

.el-tab-pane {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.job {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  dl {
    width: 300px;
    height: 190px;
    align-items: center;
    border: 1px solid #d2d2d2;

    dt {
      display: flex;
      justify-content: space-around;
      p {
        align-items: center;
      }
    }
    dd {
      display: flex;
      justify-content: space-around;
      p {
        align-items: center;
      }
    }
  }
}
</style>
