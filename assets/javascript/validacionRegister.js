// Referenciando elementos del DOM
let inputButton = document.querySelector("#buttonSubmit");
let inputName = document.querySelector("#inputName");
let inputEmail = document.querySelector("#inputEmail");
let inputPhone = document.querySelector("#inputPhone");
let inputId = document.querySelector("#inputId");
let inputPassword = document.querySelector("#inputPassword");

// Funcion de error en el formulario
function formError(mensaje, id, input) {
	const errorSpan = document.createElement("span"); // Creando el span
	errorSpan.textContent = mensaje; // Añadiendo el texto
	errorSpan.classList.add("spanError"); // Añadiendole la clase

	let formInputDiv = document.querySelector(id); // Referenciando el elemento padre del span
	formInputDiv.appendChild(errorSpan);

	// Estilizando el input para marcar el error
	input.style.border = "1px solid rgb(224, 54, 54)";
}

// Funcion para revertir los errores en el formulario
function formErrorDelete(id, input) {
	// Tomar la html collection de todos los elementos que tengan la clase spanError
	// Luego filtrar la html collection teniendo en cuenta el padre al que esta asignado el elemento
	console.log("Eliminando elemento")
	let formInputDiv = document.querySelector(id); // Referenciando el elemento padre del span
	let spanErrorCollection = document.querySelectorAll(".spanError");
	for(let i = 0; i<spanErrorCollection.length; i++){
		// Filtrando los elementos de la coleccion
		console.log(spanErrorCollection[i].parentNode);
		if(spanErrorCollection[i].parentNode == formInputDiv){
			// Elimino el elemento
			spanErrorCollection[i].remove();
			// Estilizando el input para desmarcar el error
			input.style.border = "1px solid #555"

		}
	}
}

// Diccionario que llevara el registro de los errores
registerError = {
	name: false,
	email: false,
	phone: false,
	id: false,
	password: false,
};


// Creando el evento escuchador
inputButton.addEventListener("click", function () {
	// 1. Validacion para el input del nombre
	if (inputName.value.trim() == "") {
		if (registerError.name == false) {
			let message = "Por favor ingresa un nombre";
			let idElementFather = "#formNameDiv";
			formError(message, idElementFather, inputName);
			registerError.name = true; // Actualizando valor de seguimiento
			return;
		}
	}else{
		let idElementFather = "#formNameDiv";
		formErrorDelete(idElementFather, inputName);
		registerError.name = false; // Actualizando valor de seguimiento
	}




	// 2. Validacion email
	if (inputEmail.value.trim() == "") {
		if (registerError.email == false) {
			let message = "Por favor ingresa un email";
			let idElementFather = "#formEmailDiv";
			let input = "#inputEmail";
			formError(message, idElementFather, inputEmail);
			registerError.email = true; // Actualizando valor de seguimiento
			return;
		}
	}

	// 3. Validacion telefono
	if (inputPhone.value.trim() == "") {
		if (registerError.phone == false) {
			let message = "Por favor ingresa un telefono";
			let idElementFather = "#formPhoneDiv";
			let input = "#inputPhone";
			formError(message, idElementFather, inputPhone);
			registerError.phone = true; // Actualizando valor de seguimiento
			return;
		}
	}

	// 4. Validacion Cedula
	if (inputId.value.trim() == "") {
		if (registerError.id == false) {
			let message = "Por favor ingresa una cedula";
			let idElementFather = "#formIdDiv";
			formError(message, idElementFather, inputId);
			registerError.id = true; // Actualizando valor de seguimiento
			return;
		}
	}

	// 5. Validacion Contraseña
	if (inputPassword.value.trim() == "") {
		if (registerError.password == false) {
			let message = "Por favor ingresa una contraseña";
			let idElementFather = "#formPasswordDiv";
			formError(message, idElementFather, inputId);
			registerError.password = true; // Actualizando valor de seguimiento
			return;
		}
	}

});
