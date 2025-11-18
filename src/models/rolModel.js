// Importamos la funcion de conexion hacia la db
const pool = require('./db')

// Creamos el modelo del rol
const Rol = {
    //----- Serie de consultas que queremos realizar usando nuestro modeo-----------
    async getAll() {  
        try {
            // Almacenamos las query que se nos devuelvan en una lista
            const[rows] = await pool.query("SELECT * FROM roles") // Consulta que hacemos
            return rows; // Devolvemos la respuesta de la bd
        } catch (error) {
            // Manejamos los errores
            console.log(`ERROR: ${error}`)
        }
        
    }
}

// Exportamos el modelo
module.exports = {
    Rol
}

//---------------CREARAS TODOS LOS MODELOS DE TU APP--------------
// LUEGO MIRA EL FLUJO QUE TE DIO CHATGPT