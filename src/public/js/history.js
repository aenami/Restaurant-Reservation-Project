// Asegurandonos de que el DOM ya se haya cargado
document.addEventListener("DOMContentLoaded", ()=>{
    // Obtenemos las referencias de los elementos del DOM
    const modal = document.querySelector('#modal');
    const fondo = document.querySelector('#history-section');
    const btnCancel = document.querySelector('#btn-no');
    const btnContinue = document.querySelector('#btn-yes');

    // Recorremos todos los botones para cancelar reserva
    document.querySelectorAll('.btn').forEach(btn =>{

        // Creamos el evento escuchador de click para cada boton
        btn.addEventListener('click', ()=>{
            // 1. Hacer aparecer el modal
            modal.classList.add('active');
            
            // 2. Meterle blur al fondo
            fondo.classList.add('active');

            // 3. Agregar al boton de si la variable con la informacion del Id de la reserva
            const id = btn.dataset.reservaId;
            btnContinue.dataset.reservaId = id;
        })

    })

    // Verificando si clickea el boton de cancelar la eliminacion de la reserva
    btnCancel.addEventListener('click', ()=>{
        // 1. Hacer DESAPARECER el modal
            modal.classList.remove('active');
            
        // 2. QUITARLE el blur al fondo
         fondo.classList.remove('active');
    })


    // Evento para continuar con la eliminacion de la reserva
    btnContinue.addEventListener('click', async (e)=>{
        // 1. Tomar la informacion del Id de la reserva 
        const idReserva = btnContinue.dataset.reservaId;

        try {
            // Realizando una peticion DELETE al endpoint
            const res = await fetch(`history/${idReserva}`,
                {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" }
                }
            );

            const data = await res.json();

            // Verificando que la respuesta devuelta por el servidor contenga redirect
            if (data.redirect) {
                // Volvemos a renderizar esta vista
                window.location.href = data.redirect;
            }else {
                // Manejo alternativo si backend no envía redirect
                console.error("No redirect recibido");
            }

        } catch (error) {
            console.log(error)
        }
    })

    // Evento de cierre para el modal de info
    const btnCloseModal = document.querySelector('#closeInfoModal')
    const modalInfo = document.querySelector('#modalInfo');

    btnCloseModal.addEventListener('click', ()=>{
        modalInfo.classList.remove('active')
        fondo.classList.remove('active')
        
    })

})

// Parte encargada de mostrar el modal que contendra la respuesta de la db
function showInfoModal(message, type){
    const modal = document.querySelector('#modalInfo');
    const fondo = document.querySelector('#history-section');

    // Agregarle la clase active
    modal.classList.add('active')

    // Agregar el blur
    fondo.classList.add('active')
}

