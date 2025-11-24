const express = require('express')
const reservationController = require('../controllers/reservation.controller')

const router = express.Router()

// Creando las rutas
router.get('/', reservationController.baseRender)


module.exports = router;