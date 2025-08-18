const path = require('path')

const NavDataModel = require('../../../models/home/nav/navModel') // 引用正确的模型
const navListData = require('../../../db/navdb') // 引用正确的模型

const getNavData = async (ctx) => {
  const navDataModel = new NavDataModel({
    navListData,
  })

  try {
    const count = await NavDataModel.countDocuments()
    if (count === 0) {
      await NavDataModel.insertMany(navListData)
    }

    const findNavData = await NavDataModel.find()
    // console.log(findNavData, '00000')

    ctx.status = 200
    const { iid } = ctx.query
    console.log(iid, '付导航栏的id')
    ctx.body = {
      success: true,
      data: {
        findNavData,
        iid,
      },
    } // 返回图片的 URL
  } catch (err) {
    ctx.status = 500
    ctx.body = { error: 'Failed to save data', details: err.message }
  }
}

module.exports = {
  getNavData,
}
