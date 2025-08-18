const mongoose = require('mongoose')
const { stringify } = require('querystring')
const TestExplainListSchema = new mongoose.Schema({
  iid: Number,
  nid: Number,
  nickname: String,
  label: String, // 一级分类名称
  children: [
    {
      label: String, // 二级分类名称
      iid: Number,
      children: [
        {
          label: String, // 三级分类名称
          iid: Number,
        },
      ],
    },
  ],
})

const TestExplainListModel = mongoose.model('TestExplainListModel', TestExplainListSchema)
module.exports = TestExplainListModel
