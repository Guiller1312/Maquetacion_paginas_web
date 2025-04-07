// PRIMER MODULO DE JS PARA COMPROBAR LA EDAD
// SEGÚN EL ORDEN QUE LE DEMOS NO VALIDA LOS MAYORES DE 65 AÑOS

function comprobarEdad() {
	tuEdad = document.querySelector("#edad").value;
	if (tuEdad > 18) {
	  // SI SE CUMPLE CONDICIÓN (LA COMPARACION ES 'true')
	  // EJECUTA EL BLOQUE ENTRE ESTAS LLAVES

	  document.querySelector("#visorDatos").innerHTML = "ERES MAYOR...";
	  document.querySelector("#visorDatos").style.color = "blue";
	  document.querySelector("#visorDatos").style.boxShadow =
		 "0 0 5px 5px blue";
	  // SI NO SE CUMPLE LA CONDICIÓN (LA COMPARACION ES 'false')
	  // EJECUTA ESTE OTRO BLOQUE POR DEFECTO
	  // ES OPCIONAL
	}
	else if (tuEdad >=65){
	 document.querySelector("#visorDatos").innerHTML = "ERES MUY MAYOR...";
	  document.querySelector("#visorDatos").style.color = "red";
	  document.querySelector("#visorDatos").style.boxShadow ="0 0 5px 5px red";
	}
	else {
	  // PODEMOS GUARDAR LA REFERENCIA A UN ELEMENTO EN UNA VARIABLE/CONSTANTE
	  miVisor = document.querySelector("#visorDatos");
	  // LUEGO USAMOS LA VARIABLE COMO SI FUESE LA MISMA INSTRUCCION
	  miVisor.innerHTML = "Eres menor";

	  // TAMBIEN SE PUEDE ALMACENAR LA REFERENCIA A UN ELEMENTO Y ALGUN METODO DE EL
	  miEstiloVisor = document.querySelector("#visorDatos").style;
	  // USANDOLA DEL MISMO MODO COMO SI FUESE LA MISMA INSTRUCCION TAMBIEN
	  miEstiloVisor.color = "red";
	  miEstiloVisor.boxShadow = "0 0 5px 5px blue";
	}
 }