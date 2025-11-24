// Traemos el pool de conexiones de la db
const pool = require('./db')

const Table = {

        // Traer todas las mesas con disponibilidad
    async getAll(){
        try {
            // Consulta que haremos hacia la db
            const sql = `SELECT * FROM Mesa m WHERE m.disponibilidad_mesa = 1;`

            const [rows] = await pool.query(sql);
            return rows;
        } catch (error) {
            console.log(error)

        }
    },

        // Actualizar disponibilidad de mesa
    async availabilityTable(mesa){
        try {
            // Consulta sql
            let sql = `UPDATE Mesa 
            SET disponibilidad_mesa = 0
            WHERE id_mesa = ?;`

            let value = mesa

            const [rows] = await pool.query(sql, value)
            return
        } catch (error) {
            console.log(error)
        }
        
    },
}

module.exports = {
    Table,
}