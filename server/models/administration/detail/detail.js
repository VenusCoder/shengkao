const mongoose = require('mongoose')
// 创建存储的 Schema 和 Model

const AdminDetailSchema = new mongoose.Schema({
  iid: { type: Number, required: true, unique: true, sparse: true },
  title: { type: String, required: true },
  question: { type: String, required: true, unique: true },
  options: {
    optionA: String,
    optionB: String,
    optionC: String,
    optionD: String,
  },

  answer: { type: String, required: true, unique: true },

  paper: String,
  image: { type: String, unique: true },
  path: String,
  name: String,
  content: String,
  meta: {
    title: String,
    keywords: String,
    description: String,
  },
})

const AdminDetailModel = mongoose.model('AdminDetailModel', AdminDetailSchema)

module.exports = AdminDetailModel
