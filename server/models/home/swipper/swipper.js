const mongoose = require('mongoose')
// 创建图片存储的 Schema 和 Model
const SwipperSchema = new mongoose.Schema({
 
  image: [String]
})

const SwipperModel = mongoose.model('SwipperModel', SwipperSchema)

module.exports = SwipperModel
