function showSection(id){
    const target = document.getElementById(id);
    if (!id || !target) {
        console.warn('showSection: sección no encontrada:', id);
        return;
    }

    const current = document.querySelector('.section.active');
    if (current === target) return;

    if (current) {
        current.classList.add('leaving');
        current.addEventListener('animationend', function handler(e) {
            if (e.target !== current) return;
            current.classList.remove('active', 'leaving');
            target.classList.add('active');
            current.removeEventListener('animationend', handler);
        }, { once: true }); // usar once: true para auto-limpieza

        // fallback
        setTimeout(() => {
            if (current.classList.contains('leaving')) {
                current.classList.remove('active', 'leaving');
                target.classList.add('active');
            }
        }, 350);
    } else {
        target.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Activar sección de reservas por defecto
    showSection('menu-section');
    
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