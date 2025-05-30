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

