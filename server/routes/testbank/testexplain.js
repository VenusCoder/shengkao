const router = require('koa-router')()
const TestExplainListController = require('../../controllers/testbank/testexplain/testexplainlist/testexplainlist')
const TestExplainDetailController = require('../../controllers/testbank/testexplain/testexplaindetail/testexplaindetail')

router.post('/api/testexplainlist', TestExplainListController.getTestExplainList)

router.post('/api/testexplaindetail', TestExplainDetailController.postTestExplainDetail)
// router.post('/testanswer', TestAnswerController.postTestAnswer)

module.exports = router
