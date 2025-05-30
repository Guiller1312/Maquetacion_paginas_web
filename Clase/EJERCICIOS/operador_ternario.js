
let descripcion = "feo";
let guapo ;

guapo = (descripcion === "guapo") ? "si" : "no";

console.log(`Es guapo? --> ${guapo}`);


// ---------------------------------------------

let numeroPedir = 3;
let numeroAdivinar = 5;
let resultado;

resultado = (numeroAdivinar === numeroPedir) ? "Has adivinado" : "Has fallado";
console.log(`Resultado con operador ternario  ${resultado}`);


if(numeroAdivinar === numeroPedir){
	resultado = "has adivinado";
}else{
	resultado = "Has fallado";
}
console.log(`Resultado con if tradicional  ${resultado}`);




