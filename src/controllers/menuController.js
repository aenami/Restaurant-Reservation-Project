// Importamos el modelo de platillos
const { Producto } = require('../models/platilloModel')

const baseRender = async (req, res) =>{
    try {
        // USAR UNA VARIABLE GLOBAL CON FLASH Y ESO QUE TE ENSEÑO FAZT PARA QUE LAS VISTAS PUEDAN ACCEDER DIRECTAMENTE A ESAS VARIABLES Y UTILIZAR  SUS PROPIEDADES
        

        // Traemos todos los platilllos de la db
        const allProducts = await Producto.getAll()
        // Filtramos por categoria_principal_producto
        const breakfast = allProducts.filter((p) => p.categoria_principal_producto === 'Breakfast')
        const lunch = allProducts.filter(p => p.categoria_principal_producto === 'Lunch')
        const dinner = allProducts.filter(p => p.categoria_principal_producto === 'Dinner')

        // Le pasamos los productos a la vista y la renderizamos
        res.render('menu.ejs', {
            message: null,
            type: null,
            breakfast,
            lunch,
            dinner
        })

    } catch (error) {
        console.log(error)
        res.render('menu.ejs', {
            message: "Hubo un error cargando el menú.",
            type: "error",
            breakfast: [],
            lunch: [],
            dinner: []
        })
    }
}

module.exports = {
    baseRender
}