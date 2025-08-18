const router = require('koa-router')()
const jobListController = require('../../controllers/job/job')
const jobDetailController = require('../../controllers/job/jobdetail/jobdetailController')

router.post('/job', jobListController.getJobList)

router.post('/jobdetail', jobDetailController.getJobDetail)

module.exports = router
