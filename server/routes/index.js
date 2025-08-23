const router = require('koa-router')()
const navController = require('../controllers/home/nav/navControllers')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: '这是首页',
  })
})
//首页数据
router.get('/api/home', navController.getNavData)

module.exports = router
