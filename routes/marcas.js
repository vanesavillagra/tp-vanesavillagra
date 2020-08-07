const express = require('express') 

const router = express.Router()
const marcasControllers = require('../controllers/marcasController.js')
router.get('/', marcasControllers.index)
router.get('/:marca', marcasControllers.show)
module.exports = router