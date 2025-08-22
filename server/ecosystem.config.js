

module.exports = {
  apps: [
    {
      name: 'shengkao',
      script: './bin/www',

      // 启用文件监视
      watch: true, // 新增这行

      // 忽略不需要监视的目录
      ignore_watch: [
        'node_modules', // 忽略 node_modules
        'logs', // 忽略日志目录
        'public', // 忽略静态资源目录（如果有）
        '.git', // 忽略 Git 目录
      ],

      // 文件变化后重启前的延迟（毫秒）
      watch_delay: 3000, // 新增这行

      // 环境配置
      env: {
        // 空对象，防止污染
      },
      env_production: {
        NODE_ENV: 'production',
        SERVER_HOST: '0.0.0.0',
        SERVER_PORT: '2000',
        DB_HOST: 'www.shengkao.top',
        DB_PORT: '27017',
        DB_NAME: 'imageDB',
        IMAGE_BASE_URL: 'http://www.shengkao.top:2000',
      },
      env_development: {
        NODE_ENV: 'development',
        DB_HOST: '127.0.0.1',
        DB_PORT: '27017',
        DB_NAME: 'imageDB_dev',
        IMAGE_BASE_URL: 'http://127.0.0.1:2000',
        SERVER_HOST: '0.0.0.0',
        SERVER_PORT: '2000',
      },
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      error_file: 'logs/error.log',
      out_file: 'logs/out.log',
      merge_logs: true,
      autorestart: true,
      max_memory_restart: '1G',

      // 高级监视选项
      watch_options: {
        usePolling: true, // 在虚拟机上需要启用
        interval: 1000, // 轮询间隔（毫秒）
      },
    },
  ],
}
