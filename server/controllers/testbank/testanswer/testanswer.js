const TestAdminDetailModel = require('../../../models/testbank/testadminbankdetail/testadminbankdetail')
const mongoose = require('mongoose')

class TestAnswerController {
  async postTestAnswer(ctx) {
    try {
      // console.log(ctx.request.body, '前端传来的数据')

      // 获取参数 - 修正参数获取方式
      const { detailparams } = ctx.request.body
      const { answer } = detailparams

      // 1. 获取所有题目的ObjectId列表
      const questionIds = Object.keys(answer).map((id) => new mongoose.Types.ObjectId(id))
      // console.log(questionIds, '需要查询的题目ObjectId列表')

      // 2. 查询完整的题目数据
      const results = await TestAdminDetailModel.aggregate([
        { $unwind: '$questions' },
        {
          $match: {
            'questions._id': { $in: questionIds },
          },
        },
        {
          $replaceRoot: { newRoot: '$questions' }, // 将questions提升为根文档
        },
      ])

      // console.log(results, '通过聚合管道查到的全部题目数据')

      if (results.length === 0) {
        ctx.status = 404
        ctx.body = { error: '未找到相关题目' }
        return
      }

      // 3. 构建题目ID到完整题目数据的映射
      const questionDataMap = {}
      results.forEach((item) => {
        questionDataMap[item._id.toString()] = item
      })

      // 4. 构建响应数据 - 改为数组格式
      const responseData = []
      for (const [questionId, userAnswer] of Object.entries(answer)) {
        const questionData = questionDataMap[questionId]

        if (!questionData) {
          responseData.push({
            error: '题目未找到',
            userAnswer,
            questionId, // 保留题目ID以便跟踪
          })
          continue
        }

        responseData.push({
          questionId, // 保留题目ID
          questionData, // 完整的题目数据
          userAnswer, // 用户答案
          correctAnswer: questionData.correctAnswer, // 正确答案
          isCorrect: userAnswer === questionData.correctAnswer, // 是否正确
        })
      }

      ctx.status = 200
      ctx.body = {
        success: true,
        data: responseData, // 返回数组格式
      }
    } catch (err) {
      console.error(err)
      ctx.status = 500
      ctx.body = {
        error: '处理答案失败',
        details: err.message,
      }
    }
  }
}

module.exports = new TestAnswerController()
