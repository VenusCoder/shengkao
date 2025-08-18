const JobListModel = require('../../models/job/jobList/joblist')
const jobListData = require('../../db/job/joblist/joblist')

class JobListController {
  async getJobList(ctx) {
    try {
      const count = await JobListModel.countDocuments()

      // 初始化数据（仅在集合为空时插入）
      if (count === 0) {
        const result = await JobListModel.insertMany(jobListData, {
          ordered: false, // 忽略错误继续插入其他数据
        })

        // console.log(`成功插入 ${result.insertedCount} 条数据`)
      }

      const findJobListData = await JobListModel.find()

      // console.log(findJobListData, '查到的职位列表数据')
      ctx.status = 200
      ctx.body = {
        success: true,
        data: {
          findJobListData,
        },
      }
    } catch (err) {
      ctx.status = 500
      ctx.body = { error: 'Failed to save data', details: err.message }
    }
  }
}

module.exports = new JobListController()
