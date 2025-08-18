/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE: string
  readonly VITE_IMG_BASE: string
  // 添加其他自定义环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
