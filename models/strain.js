const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Strain = new Schema({
  name: String,
  type: String,
  cultivator: String,
  effects: String
})

const Strain = mongoose.model('Strain', Strain)

module.exports = Strain