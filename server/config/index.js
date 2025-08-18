// 修改后的 index.js 开头部分

// 清除模块缓存确保每次加载最新配置
delete require.cache[require.resolve('./config.development')]
delete require.cache[require.resolve('./config.production')]

const env = process.env.NODE_ENV || 'development'

// === 第一步：先加载环境变量 ===
if (env === 'production') {
  require('dotenv').config({ path: '.env.production', override: true })
} else if (env === 'development') {
  require('dotenv').config({ path: '.env.development', override: true })
} else {
  require('dotenv').config({ override: true })
}

// 加载对应环境的配置文件
let config
try {
  config = require(`./config.${env}.js`)
} catch (error) {
  console.error(`[配置错误] 找不到 ${env} 环境的配置文件，使用开发环境配置`)
  config = require('./config.development.js')
}

// 确保必要配置存在
if (!config.server) {
  config.server = {
    host: '0.0.0.0',
    port: 2000,
  }
}

if (!config.db) {
  config.db = {
    host: '127.0.0.1',
    port: 27017,
    name: 'imageDB',
  }
}

if (!config.assets) {
  config.assets = {
    imageBaseUrl: 'http://127.0.0.1:2000',
  }
}

console.log(`[环境信息] 当前环境: ${env}`)

// 覆盖环境变量中的配置项
const overrideConfig = (keyPath, envVar) => {
  const keys = keyPath.split('.')
  let current = config

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]
    if (!current[key]) {
      current[key] = {}
    }
    current = current[key]
  }

  if (process.env[envVar]) {
    current[keys[keys.length - 1]] = process.env[envVar]
  }
}

// 环境一致性检查
if (process.env.NODE_ENV !== env) {
  console.warn(`⚠️ 环境不一致警告:
   process.env.NODE_ENV = ${process.env.NODE_ENV || 'undefined'}
   当前加载环境 = ${env}`)
}

// 数据库配置覆盖
overrideConfig('db.host', 'DB_HOST')
overrideConfig('db.port', 'DB_PORT')
overrideConfig('db.name', 'DB_NAME')

// 图片服务配置覆盖
overrideConfig('assets.imageBaseUrl', 'IMAGE_BASE_URL')

// 服务器地址配置覆盖
overrideConfig('server.host', 'SERVER_HOST')
overrideConfig('server.port', 'SERVER_PORT')

console.log(
  '[配置信息] 数据库连接:',
  `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`,
)
console.log('[配置信息] 图片基础URL:', config.assets.imageBaseUrl)
console.log('[配置信息] 服务器地址:', `${config.server.host}:${config.server.port}`)

// 添加环境变量调试信息
console.log('[环境变量] DB_HOST:', process.env.DB_HOST)
console.log('[环境变量] IMAGE_BASE_URL:', process.env.IMAGE_BASE_URL)

module.exports = config
