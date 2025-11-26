// Importamos modulo necesario
const { Reserva } = require('../models/reservaModel')
const { Producto } = require('../models/platilloModel')


// -----------------Funciones para apoyarse---------------
function obtenerMilisegundos(date){
    return date.getHours()*3600000 +
        date.getMinutes()*60000 +
        date.getSeconds()*1000;
}

function filtrarReservas(reservationss, opcion){
	// Variables para filtrar
	const today = new Date(); // Objeto que almacena fecha de hoy

	// Filtrando reservas 
	const reservations = reservationss.filter((reserv) => {
		// Convirtiendo el objeto fecha fecha a un formato valido
		const fecha = reserv.fecha_reserva; // objeto Date
		const soloFecha = fecha.toISOString().split("T")[0];

		// Creando el objeto fecha valido para la reserva actual
		const reservFecha = new Date(`${soloFecha}T${reserv.hora_reserva}`);

        switch (opcion) {
            // Caso para las reservas futuras
            case 1:
                // Verificando si la fecha de la reserva es de hoy
                if (reservFecha.getDate === today.getDate) {
                    return (
                        obtenerMilisegundos(reservFecha) > obtenerMilisegundos(today)
                    );
                }

            return reservFecha > today;
            // Caso para las reservas pasadas
            case 2:
                // Verificando si la fecha de la reserva es de hoy
                if(reservFecha.getDate === today.getDate){
                    return obtenerMilisegundos(reservFecha) < obtenerMilisegundos(today)
                }

            return reservFecha < today
        }	
	});

    // Devolviendo las reservas filtradas
    return reservations;
}


// ----------------Funciones que recibiran las requests--------------
// Funcion basica de renderizado
const baseRender = async (req, res) =>{
    try {
        const reservations = await Reserva.getAll(req) // Traigo todas las reservas

        // Obteniendo reservas filtradas
        futureReservations = filtrarReservas(reservations, 1)
        pastReservations = filtrarReservas(reservations, 2)

        // Agregar propiedad de nombre_entrada a cada objeto reserva
        for (let reservation of futureReservations) {
            // Utilizamos el modelo de platillos para traer el nombre de la entrada
            let saucerName = await Producto.getSaucerName(reservation.id_entrada_reserva);
            // Añadiendo la propiedad de nombre de entrada al objeto
            reservation.nombre_entrada = saucerName[0].nombre_producto;
        }

        // Usamos un FOR OF, el cual si permite trabajar de manera asincrona
        for (let reservation of pastReservations) {
            let saucerName = await Producto.getSaucerName(reservation.id_entrada_reserva);
            reservation.nombre_entrada = saucerName[0].nombre_producto;
        }

        res.render('historyReservations.ejs',{
            futureReservations,
            pastReservations
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports ={
    baseRender,
}