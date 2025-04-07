// ES IMPORTANTE EL ORDEN DE LAS COMPARACIONES EN LOS 'if...else'
// EN ESTE CASO NUNCA LLEGA A CUMPLIRSE LA SEGUNDA
// AL CUMPLIRSE LA PRIMERA, NO ANALIZA EL RESTO

function compruebaEdad() {
	tuEdad = document.querySelector("#edad").value;
	if (tuEdad >= 18) {
	  // SI SE CUMPLE CONDICIÓN (LA COMPARACION ES 'true')
	  // EJECUTA EL BLOQUE ENTRE ESTAS LLAVES
	  // PODEMOS GUARDAR LA REFERENCIA A UN ELEMENTO EN UNA VARIABLE/CONSTANTE
	  miVisor = document.querySelector("#visorDatos");
	  // LUEGO USAMOS LA VARIABLE COMO SI FUESE LA MISMA INSTRUCCION
	  miVisor.innerHTML = tuEdad;

	  // TAMBIEN SE PUEDE ALMACENAR LA REFERENCIA A UN ELEMENTO Y ALGUN METODO DE EL
	  miEstiloVisor = document.querySelector("#visorDatos").style;
	  // USANDOLA DEL MISMO MODO COMO SI FUESE LA MISMA INSTRUCCION TAMBIEN
	  miEstiloVisor.color = "blue";
	  miEstiloVisor.boxShadow = "0 0 5px 5px blue";

	}
	else if (tuEdad >=65){
	 document.querySelector("#visorDatos").innerHTML = "ERES MUY MAYOR...";
	  document.querySelector("#visorDatos").style.color = "red";
	  document.querySelector("#visorDatos").style.boxShadow ="0 0 5px 5px red";
	}
	else {
	  // SI NO SE CUMPLE LA CONDICIÓN (LA COMPARACION ES 'false')
	  // EJECUTA ESTE OTRO BLOQUE POR DEFECTO
	  // ES OPCIONAL
	  document.querySelector("#visorDatos").innerHTML = "ERES MENOR...";
	  document.querySelector("#visorDatos").style.color = "red";
	  document.querySelector("#visorDatos").style.boxShadow =
		 "0 0 5px 5px red";
	}
 }