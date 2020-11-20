const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StrainSchema = new Schema({
  name: String,
  type: String,
  cultivator: String,
  effects: []
})

const Strain = mongoose.model('Strain', StrainSchema)

module.exports = Strain