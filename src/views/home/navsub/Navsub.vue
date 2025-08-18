<template>
  <div class="navcontent">
    <div
      class="navcontent-sub"
      v-for="item in loginStore.navdemo"
      :key="item.iid"
      @click="bounceToPath(item.iid)"
    >
      <h2 class="title" :class="{ active: selectedId === item.iid }">{{ item.title }}</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useLoginStore } from '@/stores/stores'

const loginStore = useLoginStore()
const router = useRouter()
const route = useRoute()
const selectedId = ref<number>(-1) // 跟踪当前选中项的iid
loginStore.loginResult(loginStore.iid)

// 根据当前路由自动更新选中状态
watchEffect(() => {
  const currentPath = route.path
  const currentItem = loginStore.navdemo.find(item => item.path === currentPath)
  if (currentItem) selectedId.value = currentItem.iid
})

function bounceToPath(iid: number) {
  const targetItem = loginStore.navdemo.find(item => item.iid === iid)
  if (!targetItem) return
  selectedId.value = iid // 立即更新选中状态
  router.push(targetItem.path)
}
</script>

<style scoped lang="less">
.navcontent {
  display: flex;
  justify-content: space-around;
  .navcontent-sub {
    cursor: pointer;
    transition: transform 0.5s ease;
    
    &:hover {
      transform: translate(5px, 5px);
      h2:not(.active) { // 仅对非激活项应用悬停效果
        color: #409eff;
        border-bottom-color: #409eff;
      }
    }

    .title {
      font-size: 20px;
      border-bottom: 2px solid #dbdbdb;
      transition: color 0.3s, border-color 0.3s;

      &.active {
        color: red; // 激活状态颜色
        border-bottom-color: red;
      }
    }
  }
}
</style>