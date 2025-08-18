const mongoose = require('mongoose')
const AboutSchema = new mongoose.Schema({
  iid: { type: Number, parse: true, unique: true, require: true },
  title: String,
  content: String,
  image: String,
  connectInformation: String,
})

const AboutModel = mongoose.model('AboutModel', AboutSchema)
module.exports = AboutModel
