const express = require('express')
const registerController = require('../controllers/register.controller')

const router = express.Router()

// Creando las rutas
router.get('/', registerController.register)

router.post('/', registerController.submit)


module.exports = router;


