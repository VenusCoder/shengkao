const AboutUsDetailModel = require('../../models/about/about')
const getAboutData = require('../../db/about/about')
const config = require('../../config/index')

class AboutUsController {
  async getAboutDetail(ctx) {
    try {
      // 确保配置正确传递
      if (!config || !config.assets || !config.assets.imageBaseUrl) {
        throw new Error('配置对象不完整，缺少 assets.imageBaseUrl')
      }

      // 打印配置以验证
      // console.log('[配置验证] 图片基础URL:', config.assets.imageBaseUrl)

      // 1. 调用函数获取实际数据
      const aboutData = getAboutData(config)

      // 2. 检查数据格式
      if (!Array.isArray(aboutData)) {
        throw new Error('aboutData 必须是数组')
      }

      // 验证数据项
      aboutData.forEach((item, index) => {
        if (!item.title || !item.content || !item.image) {
          throw new Error(`第 ${index} 条数据缺少必要字段`)
        }
      })

      // 3. 插入数据
      const count = await AboutUsDetailModel.countDocuments()
      if (count === 0) {
        // console.log('[初始化] 开始插入关于我们数据')

        // 使用 try-catch 包装插入操作
        try {
          const result = await AboutUsDetailModel.insertMany(aboutData, {
            ordered: false,
          })
          // console.log(`✅ 成功插入 ${result.length} 条数据`)
        } catch (insertErr) {
          // console.error('❌ 插入数据失败:', insertErr.message)
          // console.error('错误详情:', insertErr)

          // 尝试部分插入
          if (insertErr.writeErrors && insertErr.writeErrors.length > 0) {
            const insertedCount = insertErr.result?.insertedCount || 0
            // console.warn(`⚠️ 部分数据插入成功: ${insertedCount} 条`)
          }
        }
      } else {
        // console.log('[跳过] 数据库已有数据，无需插入')
      }

      // 4. 查询并返回数据
      const findAboutUsDetailData = await AboutUsDetailModel.find()
      ctx.status = 200
      ctx.body = {
        success: true,
        data: findAboutUsDetailData,
      }
    } catch (err) {
      ctx.status = 500
      ctx.body = {
        error: 'Failed to save data',
        details: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
      }
    }
  }
}

module.exports = new AboutUsController()
