const express = require('express')
const menuController = require('../controllers/menuController')
const router = express.Router()

router.get('/', menuController.baseRender)

// Exportamos todas las rutas que hayamos usado con el router de este archivo
module.exports = router; 