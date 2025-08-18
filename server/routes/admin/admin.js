const router = require('koa-router')()
const AdminController = require('../../controllers/adminlist/adminListController')
const adminDetailController = require('../../controllers/admindetailController/admindetailController')

router.post('/administration', AdminController.getAdminList)

router.post('/admindetail', adminDetailController.getAdminDetail)

module.exports = router
