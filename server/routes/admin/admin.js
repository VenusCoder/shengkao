const router = require('koa-router')()
const AdminController = require('../../controllers/adminlist/adminListController')
const adminDetailController = require('../../controllers/admindetailController/admindetailController')

router.post('/api/administration', AdminController.getAdminList)

router.post('/api/admindetail', adminDetailController.getAdminDetail)

module.exports = router
