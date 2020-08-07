const express = require('express') // requiero otra vez el express

const router = express.Router()
const sucursalesControllers = require('../controllers/sucursalesController.js')
    
    router.get('/', sucursalesControllers.index)
    router.get('/:id', sucursalesControllers.datos)

module.exports = router