// Traemos el pool de conexiones de la db
const pool = require('./db')

const Table = {

    async getAll(){
        try {
            // Consulta que haremos hacia la db
            const sql = `SELECT * FROM Mesa m WHERE m.disponibilidad_mesa = 1`

            const [rows] = await pool.query(sql);
            return rows;
        } catch (error) {
            console.log(error)

        }
    }

}

module.exports = {
    Table,
}