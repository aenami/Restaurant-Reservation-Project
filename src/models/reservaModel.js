const pool = require('./db')

const Reserva = {
    //---Consultas a ejecutar de mi modelo
    async getAll(){
        try {
            // Consulta SQL
            const[rows] = await pool.query('SELECT * FROM reservas')
            return rows
        } catch (error) {
            console.log(`ERROR: ${error}`)
        }
    }
}

module.exports = {
    Reserva
}