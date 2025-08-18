const mongoose = require('mongoose')
// 创建存储的 Schema 和 Model

const xingzhengSchema = new mongoose.Schema({
  xiid: { type: Number, unique: true, sparse: true },
  title: { type: String },

  name: { type: String },
  content: { type: String },
  condition: { type: String },
  meta: {
    title: String,
    keywords: String,
    description: String,
  },
})
const shiyeSchema = new mongoose.Schema({
  siid: { type: Number, unique: true, sparse: true },
  title: { type: String },

  name: { type: String },
  content: { type: String },
  condition: { type: String },
  meta: {
    title: String,
    keywords: String,
    description: String,
  },
})

const guoqiSchema = new mongoose.Schema({
  giid: { type: Number, unique: true, sparse: true },
  title: { type: String },

  name: { type: String },
  content: { type: String },
  condition: { type: String },
  meta: {
    title: String,
    keywords: String,
    description: String,
  },
})

const JobDetailSchema = new mongoose.Schema({
  xingzheng: [xingzhengSchema],
  shiye: [shiyeSchema],
  guoqi: [guoqiSchema],
})

const JobDetailModel = mongoose.model('JobDetailModel', JobDetailSchema)

module.exports = JobDetailModel
