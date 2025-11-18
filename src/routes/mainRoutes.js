const express = require('express')
const mainPageController = require('../controllers/mainPageController')
const router = express.Router()

router.get('/', mainPageController.baseRender)

// Exportamos todas las rutas que hayamos usado con el router de este archivo
module.exports = router; 