function mostrarMensaje(tipo, message){
	// Referenciando elementos del mensaje a mostrar
	let divAlert = document.querySelector(".alert");
	let spanAlert = document.querySelector("#spanAlert");

	if(tipo === 'success'){
		divAlert.classList.replace("alert", "alertSuccess");
		spanAlert.innerText = message;

		// Cambiando de ventana
		setTimeout(() => {
			window.location.href = "/login";
		}, 3000);
	}
	divAlert.classList.replace("alert", "alertError");
	spanAlert.innerText = message;
}

window.mostrarMensaje = mostrarMensaje;

// Evento que espera a que el DOM cargue
document.addEventListener("DOMContentLoaded", ()=>{
	// Referenciando elementos
	let inputPassword = document.querySelector("#inputPassword");
	let verifyPassword = document.querySelector("#inputVerifyPassword");

	// Referenciando elementos del mensaje a mostrar
	let divAlert = document.querySelector(".alert");
	let spanAlert = document.querySelector("#spanAlert");

	// Variable para recordar error
	let errorMessage = false;

	// Referenciando nuestro formulario
	let form = document.querySelector(".form");
	
	//Recorriendo todos los inputs de nuestro DOM
	document.querySelectorAll("input[required]").forEach((input) => {
		
		// Se crean los listeners antes de que se ejecute el evento submit
		// No usamos arrow function por el this
		input.addEventListener("invalid", function () {  // Evento que se dispara cuando el campo este vacio
			// Cambiando el color del input
			input.style.border = "1px solid rgba(135, 58, 58, 1)";

			const msg = this.dataset.msg;
			this.setCustomValidity(msg);
		});

		// Evitando que aparezca un error cada que el usuario escribe
		input.addEventListener("input", function () {
			input.style.border = "1px solid #555"
			this.setCustomValidity("");
		});
	});

	// Creando el evento escuchador para nuestro formulario
	form.addEventListener("submit", function (e) {
		e.preventDefault(); 
		// Verificamos que los formularios y los inputs sean validos
		if(!form.checkValidity()){
			return;
		}

		// Verificando las contraseñas
		if(inputPassword.value !== verifyPassword.value){
			divAlert.classList.replace("alert", "alertError");
			spanAlert.innerText = "Las contraseñas proporcionadas no coinciden";
			errorMessage = true;
			return;
		}
		// Envia el formulario al pasar las verificaciones
		console.log('Enviando formulario');
		form.submit();
	});
})
