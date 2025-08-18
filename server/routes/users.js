const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })

router.get('/login', function (ctx, next) {
  console.log(ctx.query, '3333333')

  const { id } = ctx.query
  ctx.body = {
    state: 200,
    msg: 'success',
    data: {
      name: '赵云',
      age: 30,
      school: 'demo',
      hobbit: 'eat',
      getmonul: 'deddd',
      id,
    },
  }
  next()
  // ctx.body = '这是登录界面'
})

module.exports = router
