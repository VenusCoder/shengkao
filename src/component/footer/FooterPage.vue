<template>
  <div class="footer">
    <el-footer>
      <NavSub />
      <div class="footer-sub">
        <h5>网站信息：广东省考技巧网</h5>
        <h5>版权所有：Copyright © 2025 shengkao. All rights reserved.</h5>
        <h5 @click="handleBounceTobeian">备案号：粤ICP备2025427287号</h5>
        <h5><a href="https://beian.mps.gov.cn/#/query/webSearch?code=44030002007184" rel="noreferrer" target="_blank">粤公网安备44030002007184号</a ></h5>
      </div>
    </el-footer>
  </div>
</template>
<script setup lang="ts">
import NavSub from '@/views/home/navsub/Navsub.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
function handleBounceTobeian() {
  window.open('https://beian.miit.gov.cn/', '_blank')
}
</script>
<style lang="less" scoped>
.footer-sub {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  h5 {
    font-weight: normal;
   a{
     text-decoration: none;
     color: #000;
   }
  }
}
</style>
