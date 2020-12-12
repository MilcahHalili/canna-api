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
      res.json({ Error: 'Unable to create strain data' })
    })
}

const update = (req, res) => {
  db.Strain.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedStrain) => {
      if (err) console.log('Error in strain.update: ', err)
      
      res.json({ strain: updatedStrain })
    }
  )
}

const destroy = (req, res) => {
  db.Strain.findByIdAndDelete(req.params.id, (err, deletedStrain) => {
    if (err) console.log("Error in strains.destroy: ", err)

    res.json({ strain: deletedStrain })
  })
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}