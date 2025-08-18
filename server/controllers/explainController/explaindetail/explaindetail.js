const ExplainDetailModel = require('../../../models/explain/explaindetail/explaindetail')
const explainDetailData = require('../../../db/explain/explaindetail/explaindetail')

class ExpalainDetailController {
  async getExplaintDetail(ctx) {
    try {
      const count = await ExplainDetailModel.countDocuments()
      if (count === 0) {
        const result = await ExplainDetailModel.insertMany(explainDetailData, {
          ordered: false, // 忽略错误继续插入其他数据
        })

        // console.log(`成功插入 ${result.insertedCount} 条数据`)
      }

      const findExplainDetailData = await ExplainDetailModel.find()
      // console.log(findExplainDetailData, '00000')
      ctx.status = 200
      ctx.body = {
        success: true,
        data: {
          findExplainDetailData,
        },
      }
    } catch (err) {
      ctx.status = 500
      ctx.body = { error: 'Failed to save data', details: err.message }
    }
  }
}

module.exports = new ExpalainDetailController()
