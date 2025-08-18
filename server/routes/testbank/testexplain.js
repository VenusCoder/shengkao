const router = require('koa-router')()
const TestExplainListController = require('../../controllers/testbank/testexplain/testexplainlist/testexplainlist')
const TestExplainDetailController = require('../../controllers/testbank/testexplain/testexplaindetail/testexplaindetail')

router.post('/testexplainlist', TestExplainListController.getTestExplainList)

router.post('/testexplaindetail', TestExplainDetailController.postTestExplainDetail)
// router.post('/testanswer', TestAnswerController.postTestAnswer)

module.exports = router
