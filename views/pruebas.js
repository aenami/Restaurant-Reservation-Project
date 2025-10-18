const mesaIcono = document.getElementById("mesa-icono");
const apartado = document.getElementById("apartado");
const cerrar = document.getElementById("cerrar");

mesaIcono.addEventListener("click", () => {
  apartado.classList.remove("oculto"); // Muestra el modal
});

cerrar.addEventListener("click", () => {
  apartado.classList.add("oculto"); // Lo oculta nuevamente
});
