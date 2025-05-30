// 1. VALIDA EL FORMATO DE ENTRADA DEL CAMPO USUARIO
function validaCampoUser() {
	// CREO UNA VARIABLE PARA METER EL ID DEL INPUT QUE SELECCIONO
	let campo = '#txtUser';
	// LLAMO A LA FUNCION QUE ILUMINA EL CAMPO Y LE MANDO EL NOMBRE DEL ID SELECCIONADO
	iluminaCampo(campo);
	// COMPRUEBO LA LONGITUD DEL INPUT QUE HE SELECCIONADO Y LE PASO SU ID
	compruebaLongitud(campo, 5);
}

// 2. VALIDA EL FORMATO DE ENTRADA DEL CAMPO PASSWORD
function validaCampoPass() {
	// CREO UNA VARIABLE PARA METER EL ID DEL INPUT QUE SELECCIONO
	let campo = '#txtPass';
	// LLAMO A LA FUNCION QUE ILUMINA EL CAMPO Y LE MANDO EL NOMBRE DEL ID SELECCIONADO
	iluminaCampo(campo);
	// COMPRUEBO LA LONGITUD DEL INPUT QUE HE SELECCIONADO Y LE PASO SU ID
	compruebaLongitud(campo, 4);
}

// 3. COMPRUEBA MEDIANTE EL BOTÓN QUE EL USUARIO Y LA CLAVE SEAN LAS CORRECTAS
function compruebaCredenciales() {
	let usuario = document.querySelector('#txtUser').value;
	let password = document.querySelector('#txtPass').value;
	const user = "ADMIN";
	const pass = "1234"
	if (user == usuario) {
		if (pass == password) {
			document.querySelector("#primero").style.visibility = "hidden";
			document.querySelector("#segundo").style.visibility = "visible";
		}
		else {
			inputID = "#txtPass";
			mensajeError = "Password incorrecto";
			errorCampo(inputID, mensajeError)
		}
	}
	else {
		inputID = "#txtUser";
		mensajeError = "Usuario incorrecto";
		errorCampo(inputID, mensajeError)
	}

}

// ESTA FUNCION COMPRUEBA QUE EL USUARIO O EL PASSWORD TENGAN LOS CARACTERES EXIGIDOS
function compruebaLongitud(inputID, longitudDeseada) {
	// ANTES DE CONTAR LA LONGITUD, LIMPIAMOS EL VISOR DE ERRORES
	document.querySelector('#espacioError').innerHTML = "";

	// GUARDO EL CONTENIDO DEL CAMPO EN OTRA VARIABLE
	let contenido = document.querySelector(`${inputID}`).value;
	// GUARDO LA LOGITUD DEL CONTENIDO DEL CAMPO EN UNA VARIABLE 
	let longitudCampo = document.querySelector(`${inputID}`).value.length;
	// GUARDO UNA VARIABLE CON EL VALOR DE LAS LETRAS QUE ME FALTAN POR ESCRIBIR
	let caracteresRestantes = longitudDeseada - longitudCampo;

	// APLICAMOS EL TERNARIO:
	// GUARDAMOS EN EL INTERIOR DEL CAMPO (EN SU 'value') EL RESULTADO DE COMPARAR:
	// 1. (TRUE) SI SE CUMPLE QUE TIENE 5 O MAS LETRAS EL CONTENIDO (SACANDO UN 'substr') Y CONVIRTIENDOLO A MAYÚSCULAS
	// 2. (FALSE) SI NO SE CUMPLE Y SE VA A LA FUNCION 'errorCampo' ME DEVUELVE EL MISMO CONTENIDO QUE HE ESCRITO
	document.querySelector(`${inputID}`).value = (longitudCampo >= longitudDeseada) ? activaCampos(inputID, contenido) : errorCampo(inputID, `Te faltan ${caracteresRestantes} caracteres más...`);
}

// ESTA FUNCION COMPRUEBA LAS LONGITUDES DE LOS CAMPOS Y ACTIVA O DESACTIVA LOS CAMPOS
function activaCampos(nombreCampo, cadena) {
	// RECIBO EL CONTENIDO DEL INPUT, EXTRAIGO AL SUBCADENA Y LO PASO A MAYÚSCULAS
	if (nombreCampo == '#txtUser') {
		cadena = cadena.substr(0, 5).toUpperCase();
		//  DESACTIVA EL CAMPO USUARIO
		document.querySelector('#txtUser').disabled = true;
		//  ACTIVO EL CAMPO PASSWORD
		document.querySelector('#txtPass').disabled = false;
	}
	else if (nombreCampo == '#txtPass') {
		cadena = cadena.substr(0, 4);
		//  DESACTIVO EL CAMPO PASSWORD
		document.querySelector('#txtPass').disabled = true;
		//  ACTIVO EL BOTÓN DE VALIDACIÓN DE ENTRADA
		document.querySelector('#btnSign').disabled = false;
	}
	//  DEVUELVE EL VALOR DE 'cadena' PARA QUE LO ESCRIBA DE NUEVO EN EL INPUT
	return cadena;
}

// ESTA FUNCIÓN ILUMINA EL CAMPO EN AMARILLO -- ES GENÉRICA --
function iluminaCampo(inputID) {
	// RECIBO EL ID Y LE DIGO QUE APLIQUE LA SOMBRA AMARILLA A ESE CAMPO
	document.querySelector(`${inputID}`).style.boxShadow = "0 0 5px 5px yellow";
}

// ESTA FUNCION METE EN EL HTML DE LA LABEL EL MENSAJE DE ERROR QUE SEA...
function errorCampo(inputID, mensajeError) {
	// VAMOS AL CAMPO QUE LE HEMOS PASADO Y LO PONE EN ROJO
	document.querySelector(`${inputID}`).style.boxShadow = "0 0 5px 5px red";
	// VAMOS AL VISOR DE ERRORES Y METEMOS EL 'string' QUE RECIBIMOS
	document.querySelector('#espacioError').innerHTML = mensajeError;
	// 
	return document.querySelector(inputID).value;
}