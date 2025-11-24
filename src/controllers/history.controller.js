// Importamos modulo necesario


// -----------Funciones que recibiran las requests----------

// Funcion basica de renderizado
const baseRender = (req, res) =>{
    res.render('historyReservations.ejs', {
        message: null,
        type: null,
    })
}

module.exports ={
    baseRender,
}