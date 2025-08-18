<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="280px">
        <LeftNavBar />
      </el-aside>
      <el-main>
        <div class="detail" v-for="item in admindetailStore.adminDetaildemo" :key="item.iid">
          <h2>{{ item.question }}</h2>

          <div>
            <el-radio-group v-model="radio">
              <el-radio :value="3">{{ item.options.optionA }} </el-radio>
            </el-radio-group>
          </div>
          <div>
            <el-radio-group v-model="radio">
              <el-radio :value="6">{{ item.options.optionB }}</el-radio>
            </el-radio-group>
          </div>
          <div>
            <el-radio-group v-model="radio">
              <el-radio :value="9">{{ item.options.optionC }}</el-radio>
            </el-radio-group>
          </div>
          <div>
            <el-radio-group v-model="radio">
              <el-radio :value="12">{{ item.options.optionD }}</el-radio>
            </el-radio-group>
          </div>

          <div>
            <div class="demo-collapse">
              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="点击查看答案" name="2">
                  <div>
                    <h3>{{ item.answer }}</h3>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import LeftNavBar from '@/component/leftnavbar/LeftNavBar.vue'

import { useAdminDetailStore } from '@/stores/admindetail'
import { useRoute } from 'vue-router'
const route = useRoute()
import { ref, computed } from 'vue'
import type { CollapseModelValue } from 'element-plus'
import { useHead } from '@unhead/vue'

const activeNames = ref(['1'])

const radio = ref('0')
const iid = Number(route.params.iid)

const admindetailStore = useAdminDetailStore()
admindetailStore.adminDetailResultAction(iid)
// 在组件挂载后执行异步操作
// 使用 computed 创建响应式的 head 配置
const head = computed(() => {
  const meta = admindetailStore.meta
  return {
    title: meta.title || '官网',
    meta: [
      { name: 'description', content: meta.description || '' },
      { name: 'keywords', content: meta.keywords || '' },
    ],
  }
})

// 在 setup 中直接调用 useHead，传入响应式 computed
useHead(head)
// 2 答案折叠
const handleChange = (val: CollapseModelValue) => {
  console.log(val)
}
</script>
<style lang="less" scoped>
.common-layout {
  .el-radio {
    display: block;
  }
}
</style>
