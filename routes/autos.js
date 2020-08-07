const express= require("express");
const router = express.Router();

const autos = require('../controllers/autosController')

router.get('/', autos.index)
router.get('/:lista', autos.show)
module.exports = router