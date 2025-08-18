const router = require('koa-router')()
const navController = require('../controllers/home/nav/navControllers')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: '这是首页',
  })
})



router.get('/home', navController.getNavData)

module.exports = router
