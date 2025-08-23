const router = require('koa-router')()
const explainController = require('../../controllers/explainController/explainlist/explainlistController')
const ExpalainDetailController = require('../../controllers/explainController/explaindetail/explaindetail')

router.post('/api/explainlist', explainController.getExplainData)

router.post('/api/explaindetail', ExpalainDetailController.getExplaintDetail)

module.exports = router
