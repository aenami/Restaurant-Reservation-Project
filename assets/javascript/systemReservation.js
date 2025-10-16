function showSection(id){
    const target = document.getElementById(id);
    if (!id || !target) {
        console.warn('showSection: sección no encontrada:', id);
        return;
    }

    const current = document.querySelector('.section.active');
    if (current === target) return; // ya está activa

    if (current) {
        // disparar animación de salida
        current.classList.add('leaving');

        const finish = () => {
            current.classList.remove('active', 'leaving');
            target.classList.add('active');
        };

        const onAnimEnd = (e) => {
            if (e.target !== current) return;
            current.removeEventListener('animationend', onAnimEnd);
            finish();
        };

        current.addEventListener('animationend', onAnimEnd);

        // fallback por si no llega animationend
        setTimeout(() => {
            if (current.classList.contains('leaving')) {
                current.removeEventListener('animationend', onAnimEnd);
                finish();
            }
        }, 500);
    } else {
        target.classList.add('active');
    }
}