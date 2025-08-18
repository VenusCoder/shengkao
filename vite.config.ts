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
  // server: {
  //   proxy: {
  //     '/home': {
  //       target: 'http://8.138.87.146:3000',
  //       changeOrigin: true,
  //     },
  //   },
  // },
})
