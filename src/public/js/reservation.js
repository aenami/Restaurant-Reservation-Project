
// Logica de verificaciones del formulario
const form = document.querySelector(".reservationForm");



// Logica para las limitaciones respecto a la posible hora a elegir de reserva
document.addEventListener('DOMContentLoaded', function() {
    // Configurar fecha mínima (hoy)
    const fechaInput = document.getElementById('fecha');
    const horaInput = document.getElementById('hora');
    
    // Obtener fecha actual en formato YYYY-MM-DD
    const hoy = new Date().toISOString().split('T')[0];
    fechaInput.min = hoy;
    
    // Validar hora entre 5pm y 11pm
    horaInput.addEventListener('change', function() {
        const hora = this.value;
        const tiempo = hora.split(':')[0];
        
        if (tiempo < 17 || tiempo >= 23) {
            alert('Por favor seleccione una hora entre 5:00 PM y 11:00 PM');
            this.value = '17:00'; // reset a 5pm si está fuera de rango
        }
    });
});