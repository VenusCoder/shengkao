const path = require('path')

const photoImg = require('../models/uploadImage') // 引用正确的模型

// 配置上传目录，确保 uploads 目录存在
// const upload = multer({
//   dest: path.join(__dirname, "/../uploads/"), // 上传的文件存储路径
//   limits: { fileSize: 5 * 1024 * 1024 }, // 限制文件大小为 5MB
// });

// 上传图片接口的逻辑
const uploadImage = async (ctx) => {
  const file = ctx.request.files

  const basename = path.basename(file.image.filepath)
  const imageUrl = `${ctx.origin}/upload/${basename}`

  if (!file) {
    ctx.status = 400
    ctx.body = { error: 'No file uploaded' } // 如果没有文件上传
    return
  }

  // 图片的 URL 地址
  // console.log(imageUrl);
  // console.log("打印请求图片");
  // 保存文件信息到数据库
  const newPhoto = new photoImg({
    url: imageUrl,
  })

  try {
    await newPhoto.save()
    ctx.status = 201
    ctx.body = {
      success: true,
      data: {
        url: imageUrl,
      },
    } // 返回图片的 URL
  } catch (err) {
    ctx.status = 500
    ctx.body = { error: 'Failed to save image', details: err.message }
  }
}

// 获取所有图片信息
const getPhotos = async (ctx) => {
  try {
    const photos = await photoImg.find() // 查询所有图片
    ctx.body = { success: true, data: photos }
  } catch (err) {
    ctx.status = 500
    ctx.body = { error: 'Failed to fetch photos' }
  }
}

// 获取指定 ID 的图片信息
const getPhotoById = async (ctx) => {
  const { id } = ctx.params
  try {
    const photo = await photoImg.findById(id) // 根据 ID 查找图片
    if (!photo) {
      ctx.status = 404
      ctx.body = { success: false, message: 'Photo not found' }
    } else {
      ctx.status = 200
      ctx.body = { success: true, data: photo }
    }
  } catch (err) {
    ctx.status = 500
    ctx.body = { success: false, message: 'Network error' }
  }
}

module.exports = {
  uploadImage,
  getPhotos,
  getPhotoById,
  // upload, // 导出上传中间件
}
