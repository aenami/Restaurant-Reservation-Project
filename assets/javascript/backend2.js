// Validación básica con JavaScript
document.getElementById('registroForm').addEventListener('submit', function(e) {
e.preventDefault();
const nombre = document.getElementById('nombre').value.trim();
const email = document.getElementById('email').value.trim();
const telefono = document.getElementById('telefono').value.trim();
const password = document.getElementById('password').value.trim();

if (!nombre || !email || !telefono || !password) {
    alert("Por favor completa todos los campos.");
    return;
}

    // Ejemplo: mensaje de éxito
alert("✅ Registro exitoso. Bienvenido a nuestro restaurante elegante.");
this.reset();
});