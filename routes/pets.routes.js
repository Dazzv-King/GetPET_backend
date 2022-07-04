const Router = require('express')
const router = new Router()
const petsController = require('../controller/pets.controller')

router.post('/pets', petsController.createPets)
router.get('/pets/delete/:id', petsController.deletePets)
router.get('/pets', petsController.getPets)

module.exports = router