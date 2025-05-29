// VALIDACIONES ENTRADA
function validaUser() {

	// DEFINO EL NOMBRE DEL USUARIO
	const userGrabado = "ADMIN";
	usuario = document.querySelector("#txtUser").value;
	if (userGrabado == usuario) {
		// ACTIVAR EL PASSWORD
		document.querySelector("#txtPass").disabled = false;
	}
	// DESACTIVAMOS EL BRILLO DEL CAMPO AL SACAR EL FOCO DE EL
	apagame();
}

function validaLetraUser() {
	let usuario = "";
	// FORMATEAMOS EL 'value' QUE OBTENEMOS PASÁNDOLO A MAYÚSCULAS TODO EL STRING
	usuario = document.querySelector("#txtUser").value.toUpperCase();
	// LEEMOS EL VALOR ALMACENADO EN LA CONSTANTE YA FORMATEADO Y LO METEMOS DE NUEVO
	// DE ESTE MODO ACTUALIZAMOS EL CONTENIDO DEL INPUT
	document.querySelector("#txtUser").value = usuario;
}

function validaPassword() {
	// DEFINO EL NOMBRE DEL USUARIO
	const passwordGrabado = "1234";
	password = document.querySelector("#txtPass").value;
	if (passwordGrabado == password) {
		// ACTIVAR EL BOTON
		document.querySelector("#txtPass").disabled = false;
	}
	// DESACTIVAMOS EL BRILLO DEL CAMPO AL SACAR EL FOCO DE EL


	apagame();
}

// SI SE CUMPLE ENTRO EN EL FORMULARIO




// SELECCION MULTIPLE 'querySelectorall'

// FUNCIONES QUE ACTUAN SOBRE EL PRIMER 'fieldset'
function iluminame() {
	// GENERAMOS UNA CONSTANTE 
	const datosEntrada = document.querySelectorAll("#primero input");

	for (let i = 0; i < datosEntrada.length; i++) {
		datosEntrada[i].style.boxShadow = "0 0 5px 5px lightBlue";
	}
}

function apagame() {

	const datosEntrada = document.querySelectorAll("#primero input");

	for (let i = 0; i < datosEntrada.length; i++) {
		datosEntrada[i].style.boxShadow = "none";
	}
}

// FUNCIONES QUE ACTUAN SOBRE EL SEGUNDO 'fieldset'
function iluminaTodos() {
	// RECUPERAMOS EN UN ARRAY TODOS LOS INPUT QUE COINCIDAN CON EL SELECTOR
	let cuadrosTexto = document.querySelectorAll("#segundo input");
	// PODEMOS RECORRER EL ARRAY DE VARIAS MANERAS PARA IR APLICANDO ESTILOS A CADA UNO

	// METODO TRADICIONAL O CLASICO DE RECORRER UN FOR...
	for (let i = 0; i < cuadrosTexto.length; i++) {
		let elemento = cuadrosTexto[i];
		// APLICAMOS EL ESTILO DESEADO A CADA ELEMENTO
		elemento.style.boxShadow = "0 0 5px 5px yellow"
	}

	// METODO 'for... of' O 'Para cada elemento de...' DE RECORRER UN FOR...
	// SELECCIONAMOS CADA 'elemento' DE LA 'nodeList' (ARRAY)
	for (let elemento of cuadrosTexto) {
		// APLICAMOS EL ESTILO DESEADO A CADA 'elemento'
		elemento.style.backgroundColor = '#CC0987';
	}

	// MÉTODO '.forEach' O 'para cada elemento' COMO MÉTODO
	cuadrosTexto.forEach(
		function (elemento) {
			elemento.style.color = "white";
		}
	)
}

function apagaTodos() {
	// RECUPERAMOS EN UN ARRAY TODOS LOS INPUT QUE COINCIDAN CON EL SELECTOR
	let cuadrosTexto = document.querySelectorAll("#segundo input");
	// PODEMOS RECORRER EL ARRAY DE VARIAS MANERAS PARA IR APLICANDO ESTILOS A CADA UNO

	// METODO TRADICIONAL O CLASICO DE RECORRER UN FOR...
	for (let i = 0; i < cuadrosTexto.length; i++) {
		let elemento = cuadrosTexto[i];
		// APLICAMOS EL ESTILO DESEADO A CADA ELEMENTO
		elemento.style.boxShadow = "none"
	}
	// METODO 'for... of' O 'Para cada elemento de...' DE RECORRER UN FOR...
	// SELECCIONAMOS CADA 'elemento' DE LA 'nodeList' (ARRAY)
	for (let elemento of cuadrosTexto) {
		// APLICAMOS EL ESTILO DESEADO A CADA 'elemento'
		elemento.style.backgroundColor = '#ffffff';
	}

	// MÉTODO '.forEach' O 'para cada elemento' COMO MÉTODO
	cuadrosTexto.forEach(
		function (elemento) {
			elemento.style.color = "#000000";
		}
	)
}