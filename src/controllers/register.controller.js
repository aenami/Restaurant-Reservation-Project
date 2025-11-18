// Importamos el modelo del cliente
const Client = require('../models/clienteModel')

const register = (req, res) =>{
    // Devolviendo la vista para el registro
    res.render('register.ejs', { 
        message: null,
        type: null
    })
}

// Controlador que manejara el envio del formulario de registro
const submit = async (req, res) =>{
    try {
        // 1. Recibimos la informacion del formulario
        const { name, email, phone, cedula, password } = req.body;

        // 2. Guardamos en la DB usando el modelo
        await Client.create({
            name,
            email,
            phone,
            cedula,
            password
        })

        // 3. Respuesta al cliente
        res.render('../views/register.ejs', {
            message: "Usuario registrado correctamente",
            type: "success"
        })
    } catch (error) {
        console.error(error);

        res.render('../views/register.ejs', {
            message: error.message,
            type: "error"
        })

    }
}

module.exports = {
    register,
    submit
}