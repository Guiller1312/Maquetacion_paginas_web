// IFS ANIDADOS, UNO DENTRO DE OTRO
function compruebaIRPF(){
	miVisor = document.querySelector("#visorDatosIRPF");
	IRPF = document.querySelector("#IRPF").value;
	// TAMBIEN SE PUEDE ALMACENAR LA REFERENCIA A UN ELEMENTO Y ALGUN METODO DE EL
	miEstiloVisor = document.querySelector("#visorDatosIRPF").style;
	if (IRPF < 13.362,22){
		// LUEGO USAMOS LA VARIABLE COMO SI FUESE LA MISMA INSTRUCCION
		miVisor.innerHTML = "No pagas IRPF";
		// USANDOLA DEL MISMO MODO COMO SI FUESE LA MISMA INSTRUCCION TAMBIEN
		miEstiloVisor.color = "blue";
		miEstiloVisor.boxShadow = "0 0 5px 5px blue";
	}else{
		// ERES MENOR DE 18...
		if (IRPF > 13.362,22 && IRPF <  57.320,40){
			miVisor.innerHTML = "Pagas el IRPF";
			if (IRPF < 19.004,63){
				miVisor.innerHTML = "Pagas un 10.7% de IRPF";
				if (IRPF <  35.425,68 ){
					miVisor.innerHTML = "Pagas un 12.8% de IRPF";
				}
			}
		}else{
			// ERES MUY MAYOR...
			miVisor.innerHTML = "Pagas un 17.4% de IRPF";
		}
	}
}
