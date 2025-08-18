const mongoose = require('mongoose')
const config = require('./index')

const connectDB = async () => {
  let connStr = '' // 在外部声明变量，确保在 catch 中可访问
  try {
    const { host, port, name } = config.db

    // 创建连接字符串
    if (process.env.DB_USER && process.env.DB_PASS) {
      connStr = `mongodb://${process.env.DB_USER}:${encodeURIComponent(process.env.DB_PASS)}@${host}:${port}/${name}?authSource=admin`
    } else {
      connStr = `mongodb://${host}:${port}/${name}`
    }

    const connOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }

    await mongoose.connect(connStr, connOptions)
    console.log('✅ MongoDB 数据库连接成功')
    console.log(`📊 Database: ${name}@${host}:${port}`)
  } catch (err) {
    console.error('❌ 数据库连接失败:', err.message)

    // 安全地打印连接字符串（隐藏密码）
    if (connStr) {
      const safeConnStr = connStr.replace(/:\/\/[^:]+:[^@]+@/, '://****:****@')
      console.error('连接字符串:', safeConnStr)
    } else {
      console.error('连接字符串: 未生成')
    }

    // 添加环境详细信息
    console.error('环境变量:', {
      NODE_ENV: process.env.NODE_ENV,
      DB_HOST: process.env.DB_HOST,
      
    })

    process.exit(1)
  }
}

module.exports = connectDB
