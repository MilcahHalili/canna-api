const db = require('../models')

const index = (req, res) => {
  db.Strain.find({})
    .then(foundStrains => {
      res.json({ strains: foundStrains })
    })
    .catch(err => {
      console.log('Error in strains.index: ', err)
      res.json({ Error: 'Unable to get strain data' })
    })
}

const show = (req, res) => {
  db.Strain.findById(req.params.id)
    .then(foundStrain => {
      res.json({ strain: foundStrain })
    })
    .catch(err => {
      console.log('Error in strains.show: ', err)
      res.json({ Error: 'Unable to get strain data' })
    })
}

const create = (req, res) => {
  db.Strain.create(req.body)
    .then(savedStrain => {
      res.status(201).json({ strain: savedStrain })
    })
    .catch(err => {
      console.log('Error in strain.create: ', err)
      res.json({ Error: 'Unable to create data' })
    })
}

module.exports = {
  index,
  show,
  create
}