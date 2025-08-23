const router = require('koa-router')()
const jobListController = require('../../controllers/job/job')
const jobDetailController = require('../../controllers/job/jobdetail/jobdetailController')

router.post('/api/job', jobListController.getJobList)

router.post('/api/jobdetail', jobDetailController.getJobDetail)

module.exports = router
