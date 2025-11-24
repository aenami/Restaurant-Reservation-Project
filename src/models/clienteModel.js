const pool = require('./db')

const Cliente = {
    // Recuperar todos los clientes de la db
    async getAll(){
        try {
            // Consulta SQL
            const[rows] = await pool.query('SELECT * FROM cliente')
            return rows
        } catch (error) {
            console.log(`ERROR: ${error}`)
        }
    },

    // Insertar clientes en la db
    async create({ name, email, cedula, password}){
        try {
            // Consulta sql
            const sql = `INSERT INTO Cliente(cedula_cliente, nombre_cliente, email_cliente, contraseña_cliente, rol_cliente)
            VALUES (?, ?, ?, ?, ?);`
            
            // Valores a insertar
            const values = [cedula, name, email, password, 'Cliente']

            // Verificar si el usuario ya se encuentra registrado o no
            const sql_verify = `SELECT cedula_cliente FROM Cliente c WHERE c.cedula_cliente = ?`
            const value_verify = cedula

            const [verify_result] = await pool.query(sql_verify, value_verify)
            
            if(verify_result.length < 0){
                throw new Error("El cliente ya existe");
            }
            
            // 1. Se instancia un objeto de conexion internamente
            // 2. Se ejecuta la consulta a db
            const [result] = await pool.query(sql, values)
        } catch (error) {
            console.log(`ERROR: ${error.message}`);
            throw new Error('La cedula que ingresaste ya ha sido usada. Intenta de nuevo con una diferente');
        }
    },

    // Funcion para el logeo
    async login({ cedula, password }){
        try{
            // 1) Verificar si la cedula ingresada ya ha sido registrada o no
            const sql = `SELECT cedula_cliente FROM Cliente c
            WHERE c.cedula_cliente = ?`
            const value = cedula

            const [result] = await pool.query(sql, value)

            if(result.length < 1){
                throw new Error('No existe un cliente con la cedula especificada')
            }

            // 2) Verificar si la contraseña ingresada es valida para la cedula ingresada
            const sql_2 = `SELECT contraseña_cliente FROM Cliente c
            WHERE c.cedula_cliente = ?`

            const value_2 = cedula

            const [result_2] = await pool.query(sql_2, value_2)
            
            if(result_2[0].contraseña_cliente === password){
                return true
            }
            return false
        }catch(error){
            console.log(`ERROR: ${error.message}`);
            throw new Error(error.message);
        }
    }
}

module.exports = Cliente;
