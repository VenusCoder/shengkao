const router = require('koa-router')()
const explainController = require('../../controllers/explainController/explainlist/explainlistController')
const ExpalainDetailController = require('../../controllers/explainController/explaindetail/explaindetail')

router.post('/explainlist', explainController.getExplainData)

router.post('/explaindetail', ExpalainDetailController.getExplaintDetail)

module.exports = router
