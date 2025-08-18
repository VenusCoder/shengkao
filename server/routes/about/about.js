const router = require('koa-router')()
const aboutController = require('../../controllers/aboutController/aboutController')

router.get('/about', aboutController.getAboutDetail)

module.exports = router
