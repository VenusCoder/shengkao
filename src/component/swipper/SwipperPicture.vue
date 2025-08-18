<template>
  <div class="block text-center">
    <el-carousel height="450px" motion-blur>
      <el-carousel-item v-for="(item, index) in swipperStore.swipperdemo" :key="index">
        <img width="1920px" height="450px" :src="item" class="carousel-image" alt="banner" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script lang="ts" setup>
import { useSwipperStore } from '@/stores/home/swipper/swipper'
const swipperStore = useSwipperStore()
swipperStore.swipperResultAction()
</script>

<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
