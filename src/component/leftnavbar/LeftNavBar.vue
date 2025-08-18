<template>
  <div class="left-nav">
    <el-row class="tac">
      <el-col :span="12">
        <h5 class="mb-2">行测技巧</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1-1">
            <template #title>数量关系</template>
            <el-menu-item index="1-1-1" @click="handlebounceToxingcheng">平均数问题</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="1-2">
            <template #title>逻辑判断</template>
            <el-menu-item index="1-1-" @click="handlebounceTotuxing">图形推理</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handlebounceToxingcheng = () => {
  router.push({
    path: '/testbankdetail/37',
  })
}
const handlebounceTotuxing = () => {
  router.push({
    path: '/testbankdetail/47',
  })
}
</script>

<style lang="less" scoped>
.left-nav {
  h5 {
    font-size: 20px;
    font-weight: bold;
    color: #dc3333;
  }
  // padding-left: 80px;
}
</style>
