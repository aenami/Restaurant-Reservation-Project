const pool = require('./db')

const Producto = {
    //---Consultas a ejecutar de mi modelo
    async getAll(){
        // Funcion para que devuelva todos los platillos
        try {
            const sql = `SELECT p.id_producto, p.nombre_producto, p.descripcion_producto, p.precio_producto,
            p.categoria_principal_producto, p.categoria_secundaria_producto,
            i.ruta_imagen
            FROM Producto p
            INNER JOIN Imagen_producto i ON p.id_producto = id_producto_imagen;
            `
            const [rows] = await pool.query(sql);
            return rows;
        } catch (error) {
            console.log(`ERROR: ${error}`)
        }
    },

    async getSaucerName(id_entrada){
        try {
            const sql = `SELECT nombre_producto FROM Producto p WHERE p.id_producto = ?;`
            const value = id_entrada;

            const [rows] = await pool.query(sql, value);
            return rows;
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = {
    Producto
}