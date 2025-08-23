import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // 组件路径别名,语法：别名：resolve(__dirname,'组件原路径')
      com: resolve(__dirname, 'src/component'),
      //静态资源路径别名
      './image': 'src/assets',
    },
  },
  //配置根路径，解决部署到服务器之后绝对路径会报404问题，所以需改为相对路径
  base: './',
  server: {
    proxy: {
      // 将所有 `/api` 请求代理到后端服务
      '/api': {
        target: 'http://140.210.14.215:2000', // 目标服务器地址
        changeOrigin: true, // 修改请求头中的 origin
        rewrite: (path) => path.replace(/^\/api/, ''), // 移除路径前缀
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 2000, // 将限制提高到 1000kB
  },
})
