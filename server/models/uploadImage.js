

const mongoose = require('mongoose');
// 创建图片存储的 Schema 和 Model
const ImgSchema = new mongoose.Schema({
    filename: String,//文件名称
    path: String,//文件目录
    url: String, // 用来存储图片的URL
    createdAt: { type: Date, default: Date.now },//创建时间
  });
  
  const photoImg = mongoose.model('photoImg', ImgSchema);

  module.exports = photoImg;