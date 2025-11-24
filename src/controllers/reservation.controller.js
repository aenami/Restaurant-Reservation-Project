// Importamos modulos necesarios

const baseRender = (req, res) =>{
    // Devolviendo la vista 
    res.render('reservation.ejs', { 
        message: null,
        type: null
    })
}


module.exports = {
    baseRender,
}
