const mongoose = require('mongoose')
const ExplainDetailSchema = new mongoose.Schema({
  iid: { type: Number, parse: true, unique: true, require: true },
  title: String,
  content: String,
  image: String,
  connectInformation: String,
  meta: {
    title: String,
    keywords: String,
    description: String,
  },
})

const ExplainDetailModel = mongoose.model('ExplainDetailModel', ExplainDetailSchema)
module.exports = ExplainDetailModel
