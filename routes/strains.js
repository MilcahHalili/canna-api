const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.strains.index)
// router.get('/:id', ctrl.strains.show)
// router.post('/', ctrl.strains.create)
// router.put('/:id', ctrl.strains.update)
// router.delete('/:id', ctrl.strains.destroy)

module.exports = router