const AdminlistDataModel = require('../../models/administration/list/adminlistModel')
const configService = require('../../services/configService')

class AdminListController {
  async getAdminList(ctx) {
    try {
      // 使用配置服务获取管理员列表数据（已处理图片地址）
      const adminListData = configService.getadminListData()
      // console.log(adminListData, '更改后的管理员列表数据');

      const count = await AdminlistDataModel.countDocuments()

      // 初始化数据（仅在集合为空时插入）
      if (count === 0) {
        const result = await AdminlistDataModel.insertMany(adminListData, {
          ordered: false, // 忽略错误继续插入其他数据
        })
        // console.log(`成功插入 ${result.length} 条数据`);
      }

      let total = await AdminlistDataModel.countDocuments()
      // console.log(total, '总记录数');

      const currentpage = parseInt(ctx.request.body.currentpage) || 1 // 添加默认值
      const pagesize = parseInt(ctx.request.body.pagesize) || 10 // 添加默认值
      // console.log(currentpage, pagesize, '分页参数');

      const skip = (currentpage - 1) * pagesize
      const totalPages = Math.ceil(total / pagesize) // 计算总页数

      // 获取搜索参数
      let title = ctx.request.body.title
      // console.log(title, '前端传来的标题');

      let findAdminListData = []
      let searchAdminListData = []

      // 处理搜索逻辑
      if (typeof title === 'undefined' || title === '') {
        // console.log('查询所有数据');
        findAdminListData = await AdminlistDataModel.find().skip(skip).limit(pagesize).exec()
      } else {
        // console.log('执行标题搜索');
        // 使用正则表达式进行模糊搜索
        searchAdminListData = await AdminlistDataModel.find({
          title: { $regex: title, $options: 'i' },
        })
      }

      ctx.status = 200
      ctx.body = {
        success: true,
        data: {
          list: title ? searchAdminListData : findAdminListData, // 根据是否有搜索条件返回不同数据
          pagination: {
            current: currentpage,
            pageSize: pagesize,
            total,
            totalPages,
          },
          searchTitle: title || '',
        },
      }
    } catch (err) {
      console.error('获取管理员列表失败:', err)
      ctx.status = 500
      ctx.body = {
        success: false,
        error: '获取管理员列表失败',
        details: err.message,
      }
    }
  }
}

module.exports = new AdminListController()
