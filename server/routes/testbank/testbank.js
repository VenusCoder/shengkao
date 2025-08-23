const router = require('koa-router')()
const TestbankListController = require('../../controllers/testbank/testbanklist/testbanklist')
const TestAdminDetailController = require('../../controllers/testbank/testadminbankdetail/testadminbankdetail')

const TestAnswerController = require('../../controllers/testbank/testanswer/testanswer')

router.post('/api/testbank', TestbankListController.getTestBankList)

router.post('/api/testadmindetail', TestAdminDetailController.getTestAdminDetail)
router.post('/api/testanswer', TestAnswerController.postTestAnswer)

module.exports = router
