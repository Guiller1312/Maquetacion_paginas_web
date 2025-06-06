let dniUno = [13579124, 59032321, 70070271, 99124461, 1177659, 50976460, 1169174];
let dniArr = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

// Forma simple con valor númerico
	// const numLetra = dniUno % 23;
// const letra = dniArr[numLetra];
// console.log(letra);

// Con arrays de DNIS



/*

let dniUno = [13579124, 59032321, 70070271, 99124461, 1177659, 50976460, 1169174];
let dniArr = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

*/ 
let arrResultado = [];
let letra = "";
for (let element of dniUno) {
	arrResultado.push( dniArr[element%23]);
}
console.log(arrResultado);

let resultadoFinaArr = [];

// Forma 1 de hacerlo
// for (let x=0; x<arrResultado.length; x++) {
// 	resultadoFinaArr.push(dniUno[x]+ arrResultado[x]);
// }

// Forma 2 de hacerlo
// for (const element of dniUno) {
// 	resultadoFinaArr.push(dniUno[dniUno.indexOf(element)]+ arrResultado[dniUno.indexOf(element)]); ;
// }

// Forma 3 de hacerlo

dniUno.forEach((e, index)=> {
	resultadoFinaArr.push(dniUno[index]+ arrResultado[index]);
});

console.log(resultadoFinaArr);




