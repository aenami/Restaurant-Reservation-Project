const pool = require('./db')

const Platillo = {
    //---Consultas a ejecutar de mi modelo
    async getAll(){
        try {
            const query = `
                SELECT p.id_platillo, p.nombre_platillo, p.descripcion_platillo, 
                    p.precio_platillo, t.tipo_platillo,
                    i.ruta_imagen
                FROM platillos p
                INNER JOIN tipo_platillos t ON t.id_platillo_tipo = p.id_tipo_platillo
                LEFT JOIN imagenes_platillo i ON i.id_platillo_imagen = p.id_platillo
            `;

            const [rows] = await pool.query(query);
            return rows;
        } catch (error) {
            console.log(`ERROR: ${error}`)
        }
    }
}

module.exports = {
    Platillo
}