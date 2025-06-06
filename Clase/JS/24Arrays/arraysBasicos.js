let alumnos= ["Richard", "German", "Pablo", 25, 665564510, true, "Pablo", "Mario", "Mario"];
// console.log(alumnos);
let semana= ["Lunes", "Martes", "miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
// console.log(semana[5]);
// METEMOS AL FINAL EN EL ULTIMO LUGAR;
semana.push("juernes");
// console.log(semana);
// AÑADIMOS AL INICIO EN EL PRIMER LUGAR
semana.unshift("sabadingo");
// console.log(semana);
// QUITAMOS EL ULTIMO LUGAR DEL ARRAY
semana.pop();
// console.log(semana);
// QUITAMOS EL PRIMER LUGAR DEL ARRAY
semana.shift();
// console.log(semana);

// RECORREMOS UN ARRAY
// console.log(semana.length);
// DE MENOR A MAYOR (EL RECORRIDO DEL ARRAY)
for (let c= 0; c < semana.length; c++){
	// console.log(semana[c]);
}
// A LA INVERSA
for (let c= 7; c > 0; c--){
	// console.log(semana[c-1]);
}

// INICIALIZAR

let miarray=["Hola","Coders"];
miarray.pop();
miarray.shift();
miarray.push("Hey gente!");
miarray.unshift("Como estan los maquinas?");
miarray[1]="sabadingo";
// console.log(miarray);		
miarray=["pepe", "Carlos"];
// console.log(miarray);		

// PUEDO DECLARAR UN ARRAY VACIO
let array2 = [];
console.log(array2.length);
console.log(array2);		

// PUEDO DECLARARLE 
let array3 = [ ,"a" , ,22 ,true , ,"1" ,"Hola","" ];
console.log(array3.length);
console.log(array3);



