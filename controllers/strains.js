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

module.exports = {
  index
}