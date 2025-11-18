// Importamos el modelo de platillos
const { Platillo } = require('../models/platilloModel')

const baseRender = async (req, res) =>{
    try {
        const allDishes = await Platillo.getAll()

        // Filtrar por tipo_platillo
        const breakfast = allDishes.filter(p => p.tipo_platillo === "Desayuno")
        const lunch = allDishes.filter(p => p.tipo_platillo === "Almuerzo")
        const dinner = allDishes.filter(p => p.tipo_platillo === "Cena")

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