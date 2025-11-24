const pool = require('./db')

const Reserva = {
        //---Consultas a ejecutar de mi modelo
    async getAll(){
        try {
            // Consulta SQL
            const[rows] = await pool.query('SELECT * FROM reservas;')
            return rows
        } catch (error) {
            console.log(`ERROR: ${error}`)
        }
    },

    async insertReservation(req, entrada, mesa, fecha, hora, cedula){
        try {
            const user = req.flash('user') // Traemos la informacion del usuario

            const sql = `INSERT INTO Reserva(fecha_reserva, hora_reserva, id_entrada_reserva, id_mesa_reserva, cedula_cliente_reserva)
            VALUES
            (?,?,?,?,?); `

            const values = [fecha, hora, entrada, mesa, user[0].cedula]

            pool.query(sql, values) // Ejecuta la sentencia sql en la db
        } catch (error) {
            console.log(error)
        }
    },
}

module.exports = {
    Reserva,
}