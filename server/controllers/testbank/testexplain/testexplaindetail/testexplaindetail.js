const TestExplainDetailModel = require('../../../../models/testbank/testexplain/testexplaindetail/testexplaindetail')
const testExplainDetailData = require('../../../../db/testbank/testexplain/testexplaindetail/testexplaindetail')

//获取详情页面
class TestExplainDetailController {
  async postTestExplainDetail(ctx) {
    try {
      const count = await TestExplainDetailModel.countDocuments()

      // 初始化数据（仅在集合为空时插入）
      if (count === 0) {
        const result = await TestExplainDetailModel.insertMany(testExplainDetailData, {
          ordered: false, // 忽略错误继续插入其他数据
        })

        // console.log(`成功插入 ${result.insertedCount} 条数据`)
      }
      // 获取 iid

      const { nid } = ctx.request.body.detailparams

      // 打开这个会报错
      // if (!nid) {
      //   ctx.status = 400
      //   ctx.body = { error: 'Missing required field: label' }
      //   return
      // }

      const findTestExplainDetailData = await TestExplainDetailModel.find({ nid })

      ctx.status = 200
      ctx.body = {
        success: true,
        data: {
          findTestExplainDetailData,
          nid,
        },
      }
    } catch (err) {
      console.error(err) // 打印完整错误信息
      ctx.status = 500
      ctx.body = { error: 'Failed to save data', details: err.message }
    }
  }
}

module.exports = new TestExplainDetailController()
