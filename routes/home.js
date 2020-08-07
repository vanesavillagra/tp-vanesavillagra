const express = require('express') 

const router = express.Router() 
const homeControllers = require('../controllers/homeController.js');

router.get('/', homeControllers.index);
router.get('/about', homeControllers.about)

module.exports = router