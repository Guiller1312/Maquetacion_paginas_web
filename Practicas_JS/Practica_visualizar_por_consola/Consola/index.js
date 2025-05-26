//1.- De tipo log personalizado a tu profesor
console.log('sol 1.- hola profe Ivan');

//2.- De tipo warn con el contenido de una variable tipo string con un saludo.
let saludo;/*declaramos la variable */
saludo = "sol 2.- hola profe";/*definimos la variable */
//  saludo='hola profe';/*definimos la variable */
//  saludo=`hola profe`;/*definimos la variable */
console.warn(saludo);
//  3.-De tipo info que contenga la concatenación de dos variables de tipo string.
let nombre = 'Ivan';
let saluda = `hola`;
console.info(`sol 3.- profe ${nombre} les dice ${saluda} `);

// 4.- De tipo log con el contenido de una variable de tipo number

let num1 = 45;
console.log(`sol 4.- Número es: ${num1}`);

// De tipo info con el resultado de realizar las cinco operaciones aritméticas básicas (+, -, *, / y %) sobre dos variables numéricas.

let numero1;
let numero2;
let operacion;
let resultado;
numero1 = 43;
numero2 = 68;
operacion = "!";

switch (operacion) {
	case "+":
		resultado = numero1 + numero2;
		break;
	case "-":
		resultado = numero1 - numero2;
		break;
	case "*":
		resultado = numero1 * numero2;
		break;
	case "/":
		resultado = numero1 / numero2;
		break;
	default:
		resultado = "Este operador no es valido";
		break;
}
console.log(resultado);

// Ejercicio 5 OTRA FORMA DE HACERLO REYES
let n1 = 30;
let n2 = 40;
let suma = n1 + n2;
let resta = n1 - n2;
let producto = n1 * n2;
let division = n1 / n2;
let modulo = n1 % n2;
console.info(`La suma de ${n1} y ${n2} es ${suma}`);
console.info(`La resta de ${n1} y ${n2} es ${resta}`);
console.info(`La producto de ${n1} y ${n2} es ${producto}`);
console.info(`La division de ${n1} y ${n2} es ${division}`);
console.info(`El modulo de ${n1} y ${n2} es ${modulo}`);

// Ejercicio 5 OTRA FORMA DE HACERLO PABLO

n1 = 5;
n2 = 2;
console.info(`
	${n1} + ${n2} = ${n1 + n2}
	${n1} - ${n2} = ${n1 - n2}
	${n1} * ${n2} = ${n1 * n2}
	${n1} / ${n2} = ${n1 / n2}
	${n1} % ${n2} = ${n1 % n2}
	`);

// Ejercicio 5 OTRA FORMA DE HACERLO MARIO(V1)

n1 = 11;
n2 = 23;

console.log("-------------------EJERCICIO DE MARIO----------------------");

for (let x = 0; x < 5; x++) {
	if (x === 0) {
		console.log(`El resultado de la suma es ${n1 + n2}`);
	}
	// Atajo para copiar y pegar lineas de código -> SHIFT + ALT + flecha abajo
	if (x === 1) {
		console.log(`El resultado de la multiplicación es ${n1 * n2}`);
	}
	if (x === 2) {
		console.log(`El resultado de la división es ${n1 / n2}`);
	}
	if (x === 3) {
		console.log(`El resultado del resto es ${n1 % n2}`);
	}
	if (x === 4) {
		console.log(`El resultado de la resta es ${n1 - n2}`);
	}
}


// 6.- De tipo error con el contenido de una variable de tipo string

let frase = "Hola compañeros!";

console.error(frase);

// 7) De tipo warn con el contenido de una variable boolean.

let m = true;
let k = 12;

console.warn(`El contenido de la variable m es: ${m} por lo cual es ${typeof m}, el contenido de la variable k es: ${k} por lo cual es ${typeof k}`);
// EJERCICIO 8
let v3 = 25;
let v4 = 2;
let resul = v3 % v4;
console.warn(`El resultado del modulo del numero ${v3} y ${v4} es ${resul} `);
// EJERCICIO 9
frase = "Esta Frase tiene estilo CSS";
console.info("%c" + frase, "color:blue;text-decoration:underline");

// 10 De tipo error con valores numéricos (%d) y de cadena (%s) dentro del mensaje.

let valorNum2 = 3
let valorNum = 5;
let error = "Error";
console.error("Ha habido un error %d de %d tipo %s", valorNum, valorNum2, error);

//11 De tipo info con el resultado de comparar dos números e indicar cual es el menor.

let primerNum = 5;
let segundoNum = 8;

primerNum === segundoNum ? console.log('Son iguales!')
	: primerNum > segundoNum ?
		console.log(`Número ${primerNum} mayor que ${segundoNum}`)
		: console.log(`Número ${segundoNum} mayor que ${primerNum}`);

// 12 De tipo log con el tipo de dato que contiene una variable.

let n = 2;
console.log("El tipo de dato es", typeof n);

// 13 De tipo warn informando si un número es par o impar.

let a = 4;
let b = 5;


if (a % 2 === 0) {
	console.warn(`${a} es par`);
} else {
	console.warn(`${a} es impar`);
}

//TERNARIO

(n % 2 === 0) ? console.warn(`${a} es par`) : console.warn(`${a} es impar`);

resultado = (n % 2 === 0) ? (`${a} es par`) : (`${a} es impar`);
console.warn(resultado);



// 14 De tipo info calculando el factorial de un número. (Factorial es el resultado de multiplicar ese número por todos los números enteros positivos menores que él hasta llegar a 1. Ej→ Factorial de 5 = 5*4*3*2*1 = 120).

let factorial = 6;

// for (let l=factorial-1; l>0; l--){
// 	factorial *= l;
// 	console.log(factorial);
// 	console.log(l);
// }

let miNumero = 6;
let numFactorial = miNumero;
do {
	numFactorial *= (--miNumero);
} while (miNumero > 1)

console.log(numFactorial);

// 15 De tipo warn con la secuencia de Fibonacci hasta el 1000. (La secuencia de Fibonacci es una serie infinita de números donde cada número es la suma de los dos anteriores, comenzando con 0 y 1. Ej → 0, 1, 1, 2, 3, 5, 8, …).

let primeraPosicion = 0;
let segundaPosicion = 1;
let ultimaPosicion = 0;

while (primeraPosicion < 1000) {
	console.log(primeraPosicion);
	ultimaPosicion = primeraPosicion + segundaPosicion;
	primeraPosicion = segundaPosicion;
	segundaPosicion = ultimaPosicion;
}

// 16 De tipo log donde calcules los 100 primeros números primos.


console.log(`Sol 16.- Los primeros 100 números primos son:`);
let primos = 1;
// recorre los 100 primos
for (let i = 2; primos <= 100; i++) {
	let esPrimo = true;
	//  validar si es primo
	for (let j = 2; j < i; j++) {
		if (i % j === 0) {
			esPrimo = !esPrimo;
			j = i; // Salir del bucle si no es primo
		}
	}
	//   imprimir el primo
	if (esPrimo) {
		console.log(`El primo ${primos} --> ${i}`);
		primos++;
	}
}

let primosA = [];
let numeroP = 2;

while (primosA.length < 100) {

	let esPrimo = true;

	for (let i = 2; i <= Math.sqrt(numeroP); i++) {

		if (numeroP % i === 0) {

			esPrimo = false;
		}
	}

	if (esPrimo) {

		primosA.push(numeroP);
	}

	numeroP++;

}

console.log(primosA);



										//  De tipo error para calcular un número dado a su equivalente en binario sin utilizar funciones propias de los lenguajes, es decir, dividiendo por 2 hasta hallarlo.19
function binario (z){
	let resultado= "";
	 while(z > 0)
		{
			// llama ala parametro divide 2 y se queda con el resto 
		let resto = z % 2
		// concatenado la variable resultado mas el resto   
		resultado = resto + resultado 
		// parseint saca la parte entera del numero 
		z = parseInt(z / 2)
		}
		console.log ("---------------------")
		console.log (resultado)
}
binario(30)

				// De tipo warn donde calcules si un número es número armstrong, también conocido como número narcisista o número de repetición, es un número que es igual a la suma de sus dígitos elevados a la potencia del número de dígitos. Por ejemplo, 153 es un número de Armstrong porque 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153.