const router = require('koa-router')()
const swipperController = require('../../../controllers/home/swipper/swipper')

router.get('/api/swipper', swipperController.getSwipperData)

module.exports = router
