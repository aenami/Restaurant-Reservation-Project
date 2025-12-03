// Importamos modulo necesario
const { Reserva } = require('../models/reservaModel')
const { Producto } = require('../models/platilloModel')


// -----------------Funciones para apoyarse---------------
function filtrarReservas(reservationss, opcion){
	// Variables para filtrar
	const todayComplete = new Date(); // Objeto que almacena fecha y hora de hoy
    const todayIncomplete = new Date(todayComplete.getFullYear(), todayComplete.getMonth(), todayComplete.getDate()) // Objeto que solo almacenara fecha

	// Filtrando reservas 
	const reservations = reservationss.filter((reserv) => {
        const reservIncomplete = new Date(reserv.fecha_reserva.getFullYear(), reserv.fecha_reserva.getMonth(), reserv.fecha_reserva.getDate())
        const reservComplete = new Date(`${reservIncomplete}T${reserv.hora_reserva}`)

        switch (opcion) {
            // Caso para las reservas futuras
            case 1:
                // Verificando si la fecha de la reserva es de hoy
                if (reservIncomplete === todayIncomplete) {
                    return (
                        reservComplete.getHours() > todayComplete.getHours()
                    );
                }

            return reservIncomplete > todayIncomplete;
            // Caso para las reservas pasadas
            case 2:
                // Verificando si la fecha de la reserva es de hoy
                if (reservIncomplete === todayIncomplete) {
                    return (
                        reservComplete.getHours() < todayComplete.getHours()
                    );
                }

            return reservIncomplete < todayIncomplete;
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