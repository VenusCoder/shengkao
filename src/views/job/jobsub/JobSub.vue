<template>
  <el-tabs type="border-card" class="demo-tabs">
    <div>
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon><calendar /></el-icon>
          <span>行政编</span>
        </span>
      </template>
      <div
        class="job"
        v-for="item in jobStore.xingzhengDatas"
        :key="item.xiid"
        @click="bounceToxingzhengDetail(item.xiid)"
      >
        <dl>
          <dt>
            <p>{{ item.name }}</p>
            <p>{{ item.people }}</p>
          </dt>
          <dd>
            <p>{{ item.title }}</p>
            <p>{{ item.address }}</p>
          </dd>

          <dd>
            <p>{{ item.salary }}</p>
            <p>{{ item.state }}</p>
          </dd>
        </dl>
        
      </div>
      <!-- 补充4个i元素 -->
     
      <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
    </el-tab-pane>
    
    </div>

    <el-tab-pane label="事业编">
      <div
        class="job"
        v-for="item in jobStore.shiyeDatas"
        :key="item.siid"
        @click="bounceToshiyeDetail(item.siid)"
      >
        <dl>
          <dt>
            <p>{{ item.name }}</p>
            <p>{{ item.people }}</p>
          </dt>
          <dd>
            <p>{{ item.title }}</p>
            <p>{{ item.address }}</p>
          </dd>

          <dd>
            <p>{{ item.salary }}</p>
            <p>{{ item.state }}</p>
          </dd>
        </dl>
      </div>
      <!-- 补充4个i元素 -->
      <i></i><i></i><i></i><i></i><i></i><i></i>
    </el-tab-pane>
    <el-tab-pane label="国企">
      <div
        class="job"
        v-for="item in jobStore.guoqiDatas"
        :key="item.giid"
        @click="bounceToguoqiDetail(item.giid)"
      >
        <dl>
          <dt>
            <p>{{ item.name }}</p>
            <p>{{ item.people }}</p>
          </dt>
          <dd>
            <p>{{ item.title }}</p>
            <p>{{ item.address }}</p>
          </dd>

          <dd>
            <h3>{{ item.salary }}</h3>
            <h4>{{ item.state }}</h4>
          </dd>
        </dl>
      </div>
      <!-- 补充4个i元素 -->
      <i></i><i></i><i></i><i></i><i></i><i></i>
    </el-tab-pane>
    <!-- <el-tab-pane label="Task">国企</el-tab-pane> -->
  </el-tabs>
</template>

<script lang="ts" setup>
import { Calendar } from '@element-plus/icons-vue'
import { useJobStore } from '@/stores/job/jobList'
import { useRouter } from 'vue-router'

const router = useRouter()
const jobStore = useJobStore()
jobStore.jobResultAction()

// 可以在这里进行数据获取或其他操作
function bounceToxingzhengDetail(xiid: number) {

  //命名路由
  router.push({
    path: `/jobdetail/xingzheng/${xiid}`,
    
  })
}
function bounceToshiyeDetail(siid: number) {
  //编程方式导航
  router.push({
    path: `/jobdetail/shiye/${siid}`,
  })
}
function bounceToguoqiDetail(giid: number) {
  router.push({
    path: `/jobdetail/guoqi/${giid}`,
  })
}


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
     transition: all 0.3s ease; 
    &:hover{
    background:#409eff;
    color:#fff;
    transform: translate(10px, 10px);
  }

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
      h3 {
        font-size:16px;
        align-items: center;
        color:#ff6400;
        &:hover{
          color:#fff;
        }
      }
       h4 {
       font-size:16px;
        align-items: center;
        color:#ff6400;
         &:hover{
          color:#fff;
        }
      }

    }
  }
}
</style>
