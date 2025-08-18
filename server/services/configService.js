// services/configService.js
const config = require('../config/index');

class ConfigService {
  constructor() {
    this.config = config;
  }

  get imageBaseUrl() {
    return this.config.assets.imageBaseUrl;
  }

  //行测列表
  getadminListData() {
    const adminListData = require('../db/administration')(this.config);
    return adminListData;
  }

  // 其他获取配置的方法可以在这里添加
  getDatabaseConfig() {
    return this.config.db;
  }
}

module.exports = new ConfigService();