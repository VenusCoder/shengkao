const mongoose = require('mongoose')

// 基础题目 schema（复用）
const TestexplaindetailsubSchema = new mongoose.Schema({
  iid: { type: Number, required: true, unique: true },
  question: { type: String, required: true },

  answer: String,
  correctAnswer: String,
  title: String,
  paper: String,
  name: String,
  content: String,
  meta: {
    title: String,
    keywords: String,
    description: String,
  },
})

// 分类题库 schema
const TestexplaindetailSchema = new mongoose.Schema({
  nid: { type: Number, required: true, unique: true },

  nickname: {
    type: String,
    required: true,
    unique: true, // 确保分类唯一
    enum: ['shenlunyi', 'shenluner', 'shenlunsan'], // 限定可选分类
  },
  questions: [TestexplaindetailsubSchema], // 题目列表
})

const TestExplainDetailModel = mongoose.model('TestExplainDetailModel', TestexplaindetailSchema)
module.exports = TestExplainDetailModel
