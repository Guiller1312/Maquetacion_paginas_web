let alumnos= ["Richard", "German", "Pablo", 25, 665564510, true, "Pablo", "Mario", "Mario"];

// RECORRER ARRAYS

	// FOR tradicional
for (let x=0; x<alumnos.length; x++){
	console.log(alumnos[x]);	
}

console.log("----------------------------------------------------------");

	// FOR OF

for (let elemento of alumnos) {
	console.log(elemento);
	
}
console.log("-----------------------------------------------------");
let mutable = [22, , "rojo", "azul", false, , "Lucas"];

// MÉTODOS MUTABLES

	// AGREGAR O QUITAR ELEMENTOS

		// Agregar en la primera posición del array
	mutable.unshift("negro");
	console.log(mutable);
		// Agregar en la última posición del array
	mutable.push("hot perrotes");
	console.log(mutable);
		// eliminar el último elemento del array 
	mutable.pop();
	console.log(mutable);
	// Eliminar el primer elemento del array
	mutable.shift();
	console.log(mutable);

	// Ordenar un array con Sort() sin parámetros
	console.log("------------------------------------------------");
	
	let nombres = ["Ana", "Erica", "Pablo", "Jeremy", "Luis", "Reyes", "Richard", "Lucas", "Carlos" , "German", "Guille", "Maria", "Berna"];
	let nombresCopia = [...nombres];


	nombres.sort();
	console.log(nombres);
	
	// Invertir el orden del array con Reverse()
	
	nombres.reverse();
	console.log(nombres);
	
	// Splice() -> Para eliminar elementos del array original y los eliminados se pueden almacenar en otro array.
			// COPIA ESTRICTA CON OPERADOR SPREAD '...'
			// --------------------------------
	console.log("-----------------");
	
	console.log("NOMBRESCOPIA");
	console.log(nombresCopia);
	console.log("---------------------");

	// Eliminamos a German en la posición 9 del array nombresCopia
	let eliminadosGerman = nombresCopia.splice(9, 1);
	console.log(eliminadosGerman);
	console.log(nombresCopia);
	// 
	let eliminadosBerna = nombresCopia.splice(11,1);
	console.log(eliminadosBerna);
	console.log(nombresCopia);
	// Si queremos juntar los dos arrays en uno usando el SPREAD OPERATOR

	let resultado = [...eliminadosBerna, ...eliminadosGerman];
	console.log(resultado);

	/* !!!IMPORTANT
		Operador SPREAD para dos usos: 
		1 º CREAR COPIA DE UN ARRAY SIN MUTAR EL ORIGINAL.

			let arr1 = ["hola", "adios"];
			let arr1Copia = [...arr1];

		2 º JUNTAR LOS ELEMENTOS DE DOS ARRAYS EN UN ARRAY .

			let nombreArr1 = ["Jose", "Maria"];
			let nombreArr2 = ["Ana", "Iván"];
			let nombreConjunto = [...nombreArr1, ...nombreArr2];

	*/
	
	
	
	
	
	



