// Importamos el modelo de platillos
const { Producto } = require('../models/platilloModel')

const baseRender = async (req, res) =>{
    try {
        // Traemos todos los platilllos de la db
        const allProducts = await Producto.getAll()
        // Filtramos por categoria_principal_producto
        const breakfast = allProducts.filter((p) => p.categoria_principal_producto === 'Breakfast')
        const lunch = allProducts.filter(p => p.categoria_principal_producto === 'Lunch')
        const dinner = allProducts.filter(p => p.categoria_principal_producto === 'Dinner')

        // Le pasamos los productos a la vista y la renderizamos
        res.render('mainPage.ejs', {
            message: null,
            type: null,
            breakfast,
            lunch,
            dinner
        })

    } catch (error) {
        console.log(error)
        res.render('mainPage.ejs', {
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