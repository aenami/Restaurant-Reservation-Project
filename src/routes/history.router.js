const express = require('express')
const historyController = require('../controllers/history.controller')
const router = express.Router()

router.get('/', historyController.baseRender)

router.delete('/:idReserva', historyController.deleteReservation)

module.exports = router;