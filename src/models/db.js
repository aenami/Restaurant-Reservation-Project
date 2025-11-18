// Importando el modulo de mysql2
const mysql = require("mysql2/promise");

// Definiedo las variables de conexion
const config = {
	host: "localhost",
	user: "root2",
	password: "Root2!",
	database: "reservation_restaurantdb",
	port: "3306",
};

// Creeamos el objeto pool en memoria
const pool = mysql.createPool(config);

module.exports = pool; // Exportamos el objeto
