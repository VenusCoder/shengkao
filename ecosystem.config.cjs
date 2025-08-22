module.exports = {
  apps: [{
    name: "shengkao",
    script: "app.js"
  }],
  deploy: {
    production: {
      user: "root",
      host: "140.210.14.215",
      ref: "origin/main",
      repo: "https://github.com/VenusCoder/shengkao.git",
      path: "/var/pconline",
      "post-deploy": "npm install && pm2 start app.js --name shengkao -i max && pm2 save && sudo pm2 startup"
    }
  }
};
