const mongoose = require('mongoose')
const { stringify } = require('querystring')
const categorySchema = new mongoose.Schema({
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
          questions: Number, // 该三级分类下的题目数量
        },
      ],
    },
  ],
})

const CategoryModel = mongoose.model('CategoryModel', categorySchema)
module.exports = CategoryModel
