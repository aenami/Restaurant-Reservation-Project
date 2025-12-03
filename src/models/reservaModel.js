const pool = require('./db')

const Reserva = {
        //---Consultas a ejecutar de mi modelo
    async getAll(req){
        try {
            // Consulta SQL
            const sql = `SELECT * FROM Reserva r WHERE r.cedula_cliente_reserva = ?;`

            const value = req.session.user

            const[reservations] = await pool.query(sql, value.cedula)
            return reservations
        } catch (error) {
            console.log(`ERROR: ${error}`)
        }
    },

    async insertReservation(req, entrada, mesa, fecha, hora, cedula){
        try {
            const user = req.session.user

            const sql = `INSERT INTO Reserva(fecha_reserva, hora_reserva, id_entrada_reserva, id_mesa_reserva, cedula_cliente_reserva)
            VALUES
            (?,?,?,?,?); `

            const values = [fecha, hora, entrada, mesa, user.cedula]

            await pool.query(sql, values) // Ejecuta la sentencia sql en la db
        } catch (error) {
            console.log(error)
        }
    },

    async deleReservation(id){
        try {
            // REALIZAR EL DELETE A LA DB
            const sql = `DELETE FROM Reserva r WHERE r.id_reserva = ?`
            const value = id

            await pool.query(sql, value)

        } catch (error) {
            console.log(error)
        }
    },

}

module.exports = {
    Reserva,
}