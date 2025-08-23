// 在 app.js 顶部添加
require('dotenv').config()
console.log(`[应用启动] 当前环境: ${process.env.NODE_ENV || 'development'}`)

// 确保配置加载在数据库连接之前
const config = require('./config')

const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
// const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const { koaBody } = require('koa-body')
const path = require('path')
const koastatic = require('koa-static')
const cors = require('koa2-cors') // 引入 CORS 中间件
const connectDB = require('./config/database')

const index = require('./routes/index')
const users = require('./routes/users')
const upload = require('./routes/upload')
const administration = require('./routes/admin/admin')
const admindetail = require('./routes/admin/admin')
const jobList = require('./routes/job/job')
const jobdetail = require('./routes/job/job')
const testbank = require('./routes/testbank/testbank')
const testadmindetail = require('./routes/testbank/testbank')
const about = require('./routes/about/about')
const explainlist = require('./routes/explain/explain')
const explaindetail = require('./routes/explain/explain')
const swipper = require('./routes/home/swipper/swipper')
const testanswer = require('./routes/testbank/testbank')
const testexplainlist = require('./routes/testbank/testexplain')
const testexplaindetail = require('./routes/testbank/testexplain')

// error handler
onerror(app)

// 配置 CORS 中间件 - 添加这部分
app.use(
  cors({
    origin: function (ctx) {
      // 允许来自 http://www.shengkao.top 的请求
      if (ctx.header.origin && ctx.header.origin.includes('http://140.210.14.215')) {
        return ctx.header.origin
      }
      // 开发环境允许所有来源
      return process.env.NODE_ENV === 'production' ? false : '*'
    },
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // 允许的 HTTP 方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'], // 允许的请求头
    exposeHeaders: ['Content-Length', 'X-Custom-Header'], // 暴露给浏览器的响应头
    maxAge: 86400, // 预检请求缓存时间（秒）
    credentials: true, // 允许发送凭据（cookies）
  }),
)

connectDB()

//! 注意的是通常静态服务都是在最前面
app.use(koastatic(path.join(__dirname, '/public')))

// middlewares
// app.use(
//   bodyparser({
//     enableTypes: ['json', 'form', 'text'],
//   }),
// )

// 添加 OPTIONS 请求处理中间件
app.use(async (ctx, next) => {
  if (ctx.method === 'OPTIONS') {
    ctx.status = 204
    ctx.set('Access-Control-Max-Age', '86400')
  } else {
    await next()
  }
})

app.use(json())
app.use(logger())

app.use(
  views(__dirname + '/views', {
    extension: 'pug',
  }),
)

app.use(koastatic(path.join(__dirname, 'public'))) //这个public以下的路径就是生成的url。

//图片
app.use(
  koaBody({
    multipart: true,
    formidable: {
      maxFileSize: 200 * 1024 * 1024,
      uploadDir: path.join(__dirname, '/public/upload'),
      // 上传目录，意思是说上传到当前项目的/public/upload目录下/ 是否保留拓展名
      keepExtensions: true,
    },
  }),
)

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

//路由

// routes  administration
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(upload.routes(), upload.allowedMethods())
app.use(administration.routes(), administration.allowedMethods())
app.use(admindetail.routes(), admindetail.allowedMethods())
app.use(jobList.routes(), jobList.allowedMethods())
app.use(jobdetail.routes(), jobdetail.allowedMethods())
app.use(testbank.routes(), testbank.allowedMethods())
app.use(testadmindetail.routes(), testadmindetail.allowedMethods())
app.use(about.routes(), about.allowedMethods())
app.use(explainlist.routes(), explainlist.allowedMethods())
app.use(explaindetail.routes(), explaindetail.allowedMethods())
app.use(swipper.routes(), swipper.allowedMethods())
app.use(testanswer.routes(), testanswer.allowedMethods())
app.use(testexplainlist.routes(), testexplainlist.allowedMethods())
app.use(testexplaindetail.routes(), testexplaindetail.allowedMethods())
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

// const server = app.listen(config.server.port, config.server.host, () => {
//   console.log(`[服务器启动] 运行在 http://${config.server.host}:${config.server.port}`)
// })

// module.exports = server

module.exports = app
