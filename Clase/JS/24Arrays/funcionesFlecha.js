// 3 Funciones básicas en js

// Declaración de funciones
	function saludo(){
		console.log("Hola, soy una declaración de función");	
	}
// Expresión de funciones => La variable delega el rol de la función
	let despedida = function () {
		console.log("Adios!! Delego la función en la variable");
	}
// Funciones Flecha
	let soyFlecha = () => {
		console.log("Soy una flecha!!");	
	}
	saludo();
	despedida();
	soyFlecha();
