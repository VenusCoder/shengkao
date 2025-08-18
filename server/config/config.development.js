// config.development.js
module.exports = {
  db: {
    host: '127.0.0.1', // 直接使用默认值
    port: 27017,
    name: 'imageDB_dev',
  },
  assets: {
    imageBaseUrl: 'http://127.0.0.1:2000',
  },
  server: {
    host: '0.0.0.0',
    port: 2000,
  },
}
