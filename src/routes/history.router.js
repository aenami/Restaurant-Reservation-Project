const express = require('express')
const historyController = require('../controllers/history.controller')
const router = express.Router()

router.get('/', historyController.baseRender)

module.exports = router;