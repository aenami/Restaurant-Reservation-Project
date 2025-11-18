// Importamos el modelo del cliente
const Client = require('../models/clienteModel')

const baseRender = (req, res) =>{
    res.render('login.ejs', {
        message: null,
        type: null
    })
}

// Logica para verificar el logeo o no del usuario
const login = async (req, res) =>{
    try {
        const { cedula, password } = req.body

        const result = await Client.login({
            cedula,
            password
        })

        // Verificamos respuesta de la db
        if(result){
            // Redirigimos al usuario
            res.render('mainPage.ejs')
        }else{
            console.log('Contraseña mal')
            // Renderizamos el mensaje de error
            res.render('../views/login.ejs', {
                message:'Contraseña equivocada',
                type: 'error'
            })
        }
    } catch (error) {
        console.log(`ERROR: ${error}`)
        // Renderizamos los errores provenientes del modelo
        res.render('login.ejs', {
            message: error.message,
            type: 'error'
        })
    }
}

module.exports = {
    baseRender,
    login
}