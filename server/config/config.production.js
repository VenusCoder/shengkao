// module.exports = {
//   db: {
//     host: process.env.DB_HOST || '127.0.0.1', // 默认本地地址
//     port: process.env.DB_PORT || 27017,
//     name: process.env.DB_NAME || 'imageDB',
//   },
//   assets: {
//     imageBaseUrl: process.env.IMAGE_BASE_URL || 'http://127.0.0.1:2001',
//   },
//   // 新增服务器配置
//   server: {
//     host: process.env.SERVER_HOST || '0.0.0.0', // 默认监听所有地址
//     port: process.env.SERVER_PORT || 2000,
//   },
// }

module.exports = {
  db: {
    host: '140.210.14.215', // 直接使用默认值
    port: 27017,
    name: 'imageDB',
  },
  assets: {
    imageBaseUrl: 'http://140.210.14.215:2000',
  },
  server: {
    host: '0.0.0.0',
    port: 2000,
  },
}
