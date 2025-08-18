const TestExplainListModel = require('../../../../models/testbank/testexplain/testexplainlist/testexplainlist')
const testexplainlistData = require('../../../../db/testbank/testexplain/testexplainlist/testexplainlist')

class TestExplainListController {
  async getTestExplainList(ctx) {
    try {
      const count = await TestExplainListModel.countDocuments()

      // 初始化数据（仅在集合为空时插入）
      if (count === 0) {
        const result = await TestExplainListModel.insertMany(testexplainlistData, {
          ordered: false, // 忽略错误继续插入其他数据
        })

        // console.log(`成功插入 ${result.insertedCount} 条数据`)
      }

      // console.log(ctx.request.body, '7777')

      const findTestExplainListData = await TestExplainListModel.find()

      // console.log(findTestExplainListData, '00000')
      ctx.status = 200
      ctx.body = {
        success: true,
        data: {
          findTestExplainListData,
        },
      }
    } catch (err) {
      ctx.status = 500
      ctx.body = { error: 'Failed to save data', details: err.message }
    }
  }
}

module.exports = new TestExplainListController()
