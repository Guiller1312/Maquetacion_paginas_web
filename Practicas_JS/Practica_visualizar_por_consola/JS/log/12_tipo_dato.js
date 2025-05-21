
let cadena = "";
let booleano = true;

if (typeof num === "number"){
    console.log("number");

} else if (typeof booleano === Boolean){
    console.log("boolean");
}else if (typeof cadena === "string"){
    console.log("string");
}else{
    console.log("no es un tipo de dato primitivo");
}