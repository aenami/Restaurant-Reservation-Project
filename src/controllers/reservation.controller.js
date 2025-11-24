// Importamos modulos necesarios
const { Producto } = require('../models/platilloModel')
const { Table } = require('../models/tableModel')

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

module.exports = {
    baseRender,
}
