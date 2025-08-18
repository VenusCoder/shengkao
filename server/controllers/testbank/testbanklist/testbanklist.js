const CategoryModel = require('../../../models/testbank/testbanklist/testbanklist')
const testbanklistData = require('../../../db/testbank/testbanklist/testbanklist')

class TestbankListController {
  async getTestBankList(ctx) {
    try {
      const count = await CategoryModel.countDocuments()

      // 初始化数据（仅在集合为空时插入）
      if (count === 0) {
        const result = await CategoryModel.insertMany(testbanklistData, {
          ordered: false, // 忽略错误继续插入其他数据
        })

        // console.log(`成功插入 ${result.insertedCount} 条数据`)
      }

      // console.log(ctx.request.body, '7777')

      const findTestBankListData = await CategoryModel.find()

      // console.log(findTestBankListData, '00000')
      ctx.status = 200
      ctx.body = {
        success: true,
        data: {
          findTestBankListData,
        },
      }
    } catch (err) {
      ctx.status = 500
      ctx.body = { error: 'Failed to save data', details: err.message }
    }
  }
}

module.exports = new TestbankListController()
