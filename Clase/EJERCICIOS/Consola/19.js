function armstrong(){
	let nro = document.getElementById("nro").value
	nro = parseInt(nro);
	let original = nro;
	let copia = nro;
	let Nrodigitos = 0
	let digito = 0;
	let resultado = 0;
	if (nro && nro > 0)
		{
			// primer while para hallar el numero de digitos 
			while(nro > 0){
				// un contador q indica el numero de digitos 
				Nrodigitos++
				// dividimos porque queremos quitar digitos
				nro = parseInt(nro / 10 );
			} 
			// segundo while para el resultado 
			while (copia > 0 ){
				// para encontrar el residuo
					digito = copia % 10
					// almacenamos el resultado finla 
					resultado += digito ** Nrodigitos 

					// actualiza el valotr de copia 
					copia = parseInt(copia / 10);
			}
			console.log(resultado)
			if (resultado === original){
				console.warn(`el numero : ${resultado} es armstrong`)
			}else {
				console.warn(`el numero : ${resultado} no es armstrong`)
			}
			
		}
		else {
			alert("Ingrese un numero mayor de 0")
			
		}
		}
		