const AdminDetailModel = require('../../models/administration/detail/detail')
const adminDetailData = require('../../db/admindetail/admindetail')

class AdminDetailController {
  async getAdminDetail(ctx) {
    try {
      const count = await AdminDetailModel.countDocuments()

      // 初始化数据（仅在集合为空时插入）
      if (count === 0) {
        const result = await AdminDetailModel.insertMany(adminDetailData, {
          ordered: false, // 忽略错误继续插入其他数据
        })

        // console.log(`成功插入 ${result.insertedCount} 条数据`)
      }
      // 获取 iid

      const iid = ctx.request.body.iid

      // console.log(iid, '行测技巧详情页传过来的iid')

      const findAdminDetailData = await AdminDetailModel.find({
        iid,
      })
      // console.log(findAdminDetailData, '查找的行测详情页数据')

      ctx.status = 200
      ctx.body = {
        success: true,
        data: {
          findAdminDetailData,
        },
      }
    } catch (err) {
      ctx.status = 500
      ctx.body = { error: 'Failed to save data', details: err.message }
    }
  }
}

module.exports = new AdminDetailController()
