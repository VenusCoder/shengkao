const JobDetailModel = require('../../../models/job/jobdetail/jobdetail')
const jobdetailData = require('../../../db/job/jobdetail/jobdetail')

class JobDetailController {
  async getJobDetail(ctx) {
    try {
      const count = await JobDetailModel.countDocuments()

      // 初始化数据（仅在集合为空时插入）
      if (count === 0) {
        const result = await JobDetailModel.insertMany(jobdetailData, {
          ordered: false, // 忽略错误继续插入其他数据
        })

        console.log(`成功插入 ${result.insertedCount} 条数据`)
      }

      
      console.log(ctx.request.body,'前端传来的数据id')
      let xiid=ctx.request.body.jobdetail.xiid
      console.log(xiid,'前端传来的数据xiid')
      let siid=ctx.request.body.jobdetail.siid
      console.log(siid,'前端传来的事业编siid')
            let giid=ctx.request.body.jobdetail.giid
                  console.log(giid,'前端传来的过期编giid')


let findJobDetailData=[]
      if(xiid){
          findJobDetailData = await JobDetailModel.find({
    "xingzheng.xiid": xiid
  }, {
    "xingzheng.$": 1 // 使用投影只返回匹配的子文档
  })
   console.log(findJobDetailData, '查找的行政数据')

      }
      if(siid){
               findJobDetailData = await JobDetailModel.find({
    "shiye.siid": siid
  }, {
    "shiye.$": 1 // 使用投影只返回匹配的子文档
  })

      }
      if(giid){
                findJobDetailData = await JobDetailModel.find({
    "guoqi.giid": giid
  }, {
    "guoqi.$": 1 // 使用投影只返回匹配的子文档
  })

      }

      // const iid = ctx.request.body.iid
      // console.log(iid, '666666')
      // console.log(ctx.request.body, '7777')

      
      ctx.status = 200
      ctx.body = {
        success: true,
        data: {
          findJobDetailData,
          // iid,
        },
      }
    } catch (err) {
      console.error(err) // 打印完整错误信息
      ctx.status = 500
      ctx.body = { error: 'Failed to save data', details: err.message }
    }
  }
}

module.exports = new JobDetailController()
