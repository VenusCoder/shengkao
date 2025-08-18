const mongoose = require('mongoose')

// 基础题目 schema（复用）
const questionSchema = new mongoose.Schema({
  iid: { type: Number, required: true, unique: true },
  question: { type: String, required: true },
  options: [
    {
      value: String,
      label: String,
      isCorrect: Boolean,
    },
  ],
  answer: String,
  correctAnswer: String,
  title: String,
  paper: String,
  image: String,
  name: String,
  content: String,
  meta: {
    title: String,
    keywords: String,
    description: String,
  },
})

// 分类题库 schema
const categorySchema = new mongoose.Schema({
  nid: { type: Number, required: true, unique: true },

  nickname: {
    type: String,
    required: true,
    unique: true, // 确保分类唯一
    enum: ['zhengzhi', 'changshi', 'yanyu', 'shuliang', 'panduan', 'ziliao'], // 限定可选分类
  },
  questions: [questionSchema], // 题目列表
})

const TestAdminDetailModel = mongoose.model('TestAdminDetailModel', categorySchema)
module.exports = TestAdminDetailModel
