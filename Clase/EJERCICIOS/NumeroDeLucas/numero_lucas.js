
/*
Valores Iniciales para Número de Lucas -> num1 = 2 y num2 = 1
Valores Iniciales para Número de Fibonacci -> num1 = 0 y num2 = 1


*/

let arrResultado = [];

// Esta función inicializa el programa y le indica el número de elementos que imprimirá por pantalla.
function inicioLucas(numeroDeElementos){
	for(let x=0; x<numeroDeElementos; x++){
		arrResultado.push(ejecutarLucas(x));
	}
}

// Función recursiva 
function ejecutarLucas(elementos){
	//Casos base de la función recursiva => Condiciones de salir de la función recursiva
	if(elementos === 0) return 0;
	if(elementos === 1) return 1;
	return ejecutarLucas(elementos - 1) + ejecutarLucas(elementos - 2);
	
}


inicioLucas(30);
console.log(arrResultado);

console.log("------------------------------------------------------------------------------------------");

// OTRA FORMA DE HACER EL NÚMERO DE LUCAS

let l1 = 2;
let l2 = 1;
console.log(l1);
console.log(l2);
function lucasCobarde(numeroDeEntradas){
	let aux = 0 ;
	for(let x=0; x<numeroDeEntradas; x++){
	   aux = l2;
		l2 += l1;
		l1 = aux;
		console.log (l2)
	}
}

lucasCobarde(10);



