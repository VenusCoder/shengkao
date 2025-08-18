const mongoose = require('mongoose')
const beautifyUnique = require('mongoose-beautiful-unique-validation')
const mongooseFuzzySearching = require('mongoose-fuzzy-searching')
// 创建存储的 Schema 和 Model
const ExpainlistSchema = new mongoose.Schema({
  iid: { type: Number, required: true },
  title: { type: String },
  paper: { type: String },
  image: { type: String },
  path: { type: String },
  name: { type: String },
  content: { type: String },
})

// 应用插件（关键步骤）
ExpainlistSchema.plugin(mongooseFuzzySearching, {
  fields: ['title'], // 指定模糊搜索字段（支持多字段）:ml-citation{ref="1,3" data="citationList"}
})

ExpainlistSchema.plugin(beautifyUnique)

const ExplainlistDataModel = mongoose.model('ExplainlistDataModel', ExpainlistSchema)

// 测试方法是否存在
// console.log(ExplainlistDataModel.fuzzySearch, '000000') // 预期输出 [Function]:ml
module.exports = ExplainlistDataModel
