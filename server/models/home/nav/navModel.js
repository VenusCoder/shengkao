const mongoose = require('mongoose')
// 创建图片存储的 Schema 和 Model
const NavSchema = new mongoose.Schema({
  iid: { type: String, unique: true },
  title: { type: String },
  path: { type: String },
  name: { type: String, sparse: true },
  content: { type: String },
})

const NavDataModel = mongoose.model('NavDataModel', NavSchema)

module.exports = NavDataModel
