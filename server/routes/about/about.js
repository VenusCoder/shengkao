const router = require('koa-router')()
const aboutController = require('../../controllers/aboutController/aboutController')

router.get('/api/about', aboutController.getAboutDetail)

module.exports = router
