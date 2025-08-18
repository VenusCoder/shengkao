const TestAdminDetailModel = require('../../../models/testbank/testadminbankdetail/testadminbankdetail')
const testadminDetailData = require('../../../db/testbank/testbankdetail/testbankdetail')

//获取详情页面
class TestAdminDetailController {
  async getTestAdminDetail(ctx) {
    try {
      const count = await TestAdminDetailModel.countDocuments()

      // 初始化数据（仅在集合为空时插入）
      if (count === 0) {
        const result = await TestAdminDetailModel.insertMany(testadminDetailData, {
          ordered: false, // 忽略错误继续插入其他数据
        })

        // console.log(`成功插入 ${result.insertedCount} 条数据`)
      }
      // 获取 iid

      const { iid } = ctx.request.body.detailparams
      // console.log(ctx.request.body.detailparams, '前段传来的平均数的数据的id')

      // 打开这个会报错
      // if (!nid) {
      //   ctx.status = 400
      //   ctx.body = { error: 'Missing required field: label' }
      //   return
      // }

      // const findTestAdminDetailData = await TestAdminDetailModel.find({ iid })
      // 使用聚合查询匹配嵌套数组中的题目
      const findTestAdminDetailData = await TestAdminDetailModel.aggregate([
        { $unwind: '$questions' }, // 展开questions数组
        { $match: { 'questions.iid': iid } }, // 匹配题目ID
        {
          $project: {
            questions: '$questions',
          },
        }, // 只返回题目数据
      ])

      if (findTestAdminDetailData.length === 0) {
        ctx.status = 404
        ctx.body = { error: '未找到该题目' }
        return
      }
      // console.log(findTestAdminDetailData, '查找到的平均数的数据')

      ctx.status = 200
      ctx.body = {
        success: true,
        data: {
          findTestAdminDetailData,

          iid,
        },
      }
    } catch (err) {
      console.error(err) // 打印完整错误信息
      ctx.status = 500
      ctx.body = { error: 'Failed to save data', details: err.message }
    }
  }
}

module.exports = new TestAdminDetailController()
