function compruebaDato(){
	dato = document.querySelector("#nombre").value;
	switch (dato){
		// VAMOS COMPROBANDO SI SE CUMPLE QUE SEA IGUAL LA VARIABLE CON EL VALOR
		// SERIA IGUAL QUE PREGUNTARLE LA CONDICION 'dato == 7'
		case '7':
			document.querySelector("#visorDatos").innerHTML = "EL NÚMERO DE LA SUERTE";
			break;
		case '15':
			document.querySelector("#visorDatos").innerHTML = "LA NIÑA BONITA!";
			break;
		case '22 ':
			document.querySelector("#visorDatos").innerHTML = "LOS DOS PATITOS";
			break;
		// USAMOS 'default' PARA DARLE UNA SALIDA SI NO SE CUMPLE NADA ANTERIOR
		// FUNCIONA DE UNA MANERA ANÁLOGA AL 'else' DE UN 'if'
		default:
			document.querySelector("#visorDatos").innerHTML = "NO TENGO APODO PARA ESE NUMERO";
			break;
		}
}