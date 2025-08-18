import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue/client' // ← 使用 client 子路径导出
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead  ();


app.use(createPinia())
app.use(router)
app.use(head);

app.use(ElementPlus, { locale: zhCn })
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.mount('#app')

// console.log('[环境模式]', import.meta.env.MODE)
// console.log('[API地址]', import.meta.env.VITE_BASE)
// console.log('[图片基址]', import.meta.env.VITE_IMG_BASE)
