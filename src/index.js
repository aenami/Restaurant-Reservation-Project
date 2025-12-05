// Importando librerias y modulos
const express = require('express')
const path = require('path')

const app = express() 
const session = require('express-session')

// Importamos rutas
const registerRoutes = require('./routes/Register.router')
const loginRoutes = require('./routes/login.router')
const menuRoutes = require('./routes/menuRoutes')
const historyRoutes = require('./routes/history.router')
const reservationRoutes = require('./routes/reservation.router')

// ------Settings----------
app.set('case sensitive Routing', true)
app.set('appName', 'Express app')
app.set('port', 3000)
app.set('view-engine', 'ejs') // Definiendo el motor de plantillas que estaremos utilizando
app.set('views', path.join(__dirname, './views')) // Definiendo la ruta que utilizaremos en las vitas
        // Importamos el modulo de plantillas
require('ejs') 

// ------Middlewares--------
app.use(express.json()) // Entiende respuestas en formato json
app.use(express.urlencoded({extended: false})) // Entiende los datos que vengan del formulario
    // Creando el espacio en memoria que podremos compartir entre nuestras vistas
app.use(session({
    secret: 'secretkey',
    saveUninitialized: false,
    resave: false,
}))
        // Middleware para almacenar la session del usuario actual
app.use((req, res, next) =>{
    res.locals.usuarioActual = req.session.user || null;
    next();
})

// ------Rutas----------
app.use("/register", registerRoutes) // RUTA REGISTER
app.use("/login", loginRoutes) // RUTA LOGIN
app.use("/homePage", menuRoutes) // Rutas de la pagina principal
app.use("/history", historyRoutes)
app.use("/reservation", reservationRoutes)


// ------ Logica que queremos ejecutar luego de que la peticion
// haya pasado por los middlewares y rutas comunes -------------
app.use("/public", express.static(path.join(__dirname, 'public'))) // Especificamos la ruta que queremos que sea publica


// Ponemos a escuchar a nuestro servidor
app.listen(3000)
console.log(`Server listen on port ${3000}`)