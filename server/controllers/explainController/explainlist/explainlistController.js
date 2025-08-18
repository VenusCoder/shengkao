const ExplainlistDataModel = require('../../../models/explain/explainlist/explain') // 引用正确的模型
const explainListData = require('../../../db/explain/explainlist/explainlist')

const getExplainData = async (ctx) => {
  try {
    const count = await ExplainlistDataModel.countDocuments()

    // 初始化数据（仅在集合为空时插入）
    if (count === 0) {
      const result = await ExplainlistDataModel.insertMany(explainListData, {
        ordered: false, // 忽略错误继续插入其他数据
      })

      // console.log(`成功插入 ${result.insertedCount} 条数据`)
    }

    // const demoID = adminlistDataModel.getIndexes()
    // console.log(demoID, '88888888')

    let total = await ExplainlistDataModel.countDocuments() //表总记录数
    // console.log(total, '888888')

    const currentpage = parseInt(ctx.request.body.currentpage) //当前页码
    const pagesize = parseInt(ctx.request.body.pagesize) //每页多少条

    // console.log(currentpage, pagesize, '333333333')

    // 从 POST 请求的 body 中获取参数（需配置 koa-bodyparser）
    // const { currentpage, pagesize, title = '' } = ctx.request.body // 设置默认值

    // 参数校验
    // if (isNaN(currentpage) || isNaN(pagesize)) {
    //   ctx.status = 400
    //   ctx.body = { error: '参数 currentpage 或 pagesize 无效' }
    //   return
    // }

    // 构建动态查询条件（支持模糊搜索）
    // 转义正则字符串

    // if (ctx.request.body.title) newData.title = title

    const skip = (currentpage - 1) * pagesize

    const totalPages = Math.ceil(total / pagesize) // 计算总页数

    // 查询数据（同时应用搜索条件）
    let title = ctx.request.body.title
    // console.log(title, '前端传来的标题')

    let findAdminListData = []
    let searchAdminListData = []

    if (typeof title == 'undefined') {
      // console.log('进入到没有标题的作用于')
      // console.log(skip, pagesize, '前端传来的页码')
      findExplainListData = await ExplainlistDataModel.find().skip(skip).limit(pagesize).exec()
      // console.log(findExplainListData, '666666')
    } else if (typeof title !== 'undefined') {
      // console.log(isNaN(currentpage), '判断页码是不是NaN')
      // console.log(title, '判断标题在不在')

      searchAdminListData = await findExplainListData.fuzzySearch(title)
      // console.log(searchAdminListData, '77777')
    }

    ctx.status = 200
    ctx.body = {
      success: true,
      data: {
        findExplainListData, // 返回搜索后的分页数据
        searchAdminListData, // 搜索数据
        total,
        totalPages,

        title,
      },
      // limit: '',
      // offset: '',
    }
  } catch (err) {
    ctx.status = 500
    ctx.body = { error: 'Failed to save data', details: err.message }
  }
}

module.exports = {
  getExplainData,
}
