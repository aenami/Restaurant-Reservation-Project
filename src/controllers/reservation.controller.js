// Importamos modulos necesarios
const { Producto } = require('../models/platilloModel')
const { Table } = require('../models/tableModel')
const { Reserva } = require('../models/reservaModel')

const baseRender = async (req, res) =>{
    try {
        const allProducts = await Producto.getAll() // Traemos todos los platillos
        const allTables = await Table.getAll() // Traemos todas las mesas

        // Filtramos por entradas
        const entradas = allProducts.filter(dish =>dish.categoria_secundaria_producto === "Entrada")

        // Devolviendo la vista 
        res.render('reservation.ejs', { 
            message: null,
            type: null,
            products: entradas, // Arreglo de platillos que enviaremos
            tables: allTables,
        })

    } catch (error) {
        console.log(error)
    }
    
}

const makeReservation = async (req, res) =>{
    try {
        // Tomar los datos de la reserva que vienen del formulario
        const { Entrada, Mesa, fecha, hora} = req.body
        // Realizar el cambio de la disponibilidad de la mesa
        Table.availabilityTable(Mesa)

        // Guardar la reserva en la db
        Reserva.insertReservation( req, Entrada, Mesa, fecha, hora)

        // ----- Ejecuto logica para tener todas las variables necesarias para renderizar la vista--
        const allProducts = await Producto.getAll() // Traemos todos los platillos
        const allTables = await Table.getAll() // Traemos todas las mesas

        // Filtramos por entradas
        const entradas = allProducts.filter(dish =>dish.categoria_secundaria_producto === "Entrada")

        // Devolviendo la vista 
        res.render('reservation.ejs', { 
            message: 'Tu reserva ha sido creada exitosamente!',
            type: 'success',
            products: entradas, // Arreglo de platillos que enviaremos
            tables: allTables,
        })

    } catch (error) {
        console.log(error)
        res.render('../views/reservation.ejs', {
            message: 'Error al intentar crear tu reserva',
            type: 'error'
        })
    }

}


module.exports = {
    baseRender,
    makeReservation,
}
