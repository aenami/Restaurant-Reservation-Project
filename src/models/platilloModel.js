const pool = require('./db')

const Platillo = {
    //---Consultas a ejecutar de mi modelo
    async getAll(){
        try {
            // Consulta SQL
            const[rows] = await pool.query('SELECT * FROM platillos')
            return rows
        } catch (error) {
            console.log(`ERROR: ${error}`)
        }
    }
}

module.exports = {
    Platillo
}