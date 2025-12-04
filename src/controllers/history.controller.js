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

        // Obteniendo la mensaje del backend si es q lo hay
        // req.query.msg y req.query.type vienen ya decodificados por Express
        const message = req.query.msg || null;
        const type = req.query.type || null;

        res.render('historyReservations.ejs',{
            futureReservations,
            pastReservations,
            flash: { message, type }
        })
    } catch (error) {
        console.log(error)
        res.status(500).send("Error interno");
    }
}

const deleteReservation = async (req, res) =>{
    // 1. Tomando el id de la reserva a eliminar
    const idReserv = req.params.idReserva
    
    try {
        // 2. Llamando la funcion del modelo que se encargara de eliminar la reserva
        await Reserva.deleReservation(idReserv)

        // 3. Creamos la respuesta que mostrara el frontend
        const msg = encodeURIComponent('Reserva eliminada correctamente');
        const type = encodeURIComponent('success');

        // 4. Renderizar nuevamente la pagina (Ya no deberia de aparecer la reserva)
        return res.json({ ok: true, redirect: `/history?msg=${msg}&type=${type}`});

    } catch (error) {
        console.log(error)

        // Devolvemos los mensajes de error
        const msg = encodeURIComponent('Error al eliminar la reserva');
        const type = encodeURIComponent('error');

        return res.status(500).json({
            ok: false,
            redirect: `/history?msg=${msg}&type=${type}`
        });
    }
}


module.exports ={
    baseRender,
    deleteReservation,
}