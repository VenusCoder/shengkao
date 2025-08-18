const SwipperModel = require('../../../models/home/swipper/swipper') // 引用正确的模型
const swipperData = require('../../../db/home/swipper/swipper') // 引用正确的模型

const getSwipperData = async (ctx) => {
  try {
    const count = await SwipperModel.countDocuments()
    if (count === 0) {
      await SwipperModel.insertMany(swipperData)
    }

    const findSwipperData = await SwipperModel.find()
    // console.log(findNavData, '00000')

    ctx.status = 200

    ctx.body = {
      success: true,
      data: {
        findSwipperData,
      },
    } // 返回图片的 URL
  } catch (err) {
    ctx.status = 500
    ctx.body = { error: 'Failed to save data', details: err.message }
  }
}

module.exports = {
  getSwipperData,
}
