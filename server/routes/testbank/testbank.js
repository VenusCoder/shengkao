const router = require('koa-router')()
const TestbankListController = require('../../controllers/testbank/testbanklist/testbanklist')
const TestAdminDetailController = require('../../controllers/testbank/testadminbankdetail/testadminbankdetail')

const TestAnswerController = require('../../controllers/testbank/testanswer/testanswer')


router.post('/testbank', TestbankListController.getTestBankList)

router.post('/testadmindetail', TestAdminDetailController.getTestAdminDetail)
router.post('/testanswer', TestAnswerController.postTestAnswer)


module.exports = router
