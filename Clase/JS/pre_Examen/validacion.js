// VSALIDACIONES DEL FORMULARIO


function iluminaTxtNombre(){
	document.querySelector("#txtNombre").style.boxShadow = "0 0 5px 5px yellow";
}
function apagaTxtNombre(){
	document.querySelector("#txtNombre").style.boxShadow = "none";
}
function iluminaTxtApellido1(){
	document.querySelector("#txtApellido1").style.boxShadow = "0 0 5px 5px yellow";
}
function apagaTxtApellido1(){
	document.querySelector("#txtApellido1").style.boxShadow = "none";
}
function iluminaTxtApellido2(){
	document.querySelector("#txtApellido2").style.boxShadow = "0 0 5px 5px yellow";
}
function apagaTxtApellido2(){
	document.querySelector("#txtApellido2").style.boxShadow = "none";
	activaNotasAlumno();
}
//ESTA FUNCION LA EHECUTAMOS PARA ACTIVAR EL FIELDSET DE NOTAS ALUMNO
function activaNotasAlumno(){
	// USAMOS EK METODO ATTIBUTES.ADD PARA AÑDIR UN ATRIBUTO ENABLED AL FIELDSET DE NOTAS ALUMNO
	document.querySelector("#notasAlumno").disabled = false;
	
}
// VALIDACIONES DEL FORMULARIO

function iluminaTodos() {
	// RECUPERAMOS EN UN ARRAY TODOS LOS INPUT QUE COINCIDAN CON EL SELECTOR
	let cuadrosTexto = document.querySelectorAll("#datosAlumno input[type = text]");
	// PODEMOS RECORRER EL ARRAY DE VARIAS MANERAS PARA IR APLICANDO ESTILOS A CADA UNO

	for (let elemento of cuadrosTexto) {
		// APLICAMOS EL ESTILO DESEADO A CADA E
		elemento.style.boxShadow = "0 0 5px 5px yellow";
	}
}
function apagarTodos() {
	// RECUPERAMOS EN UN ARRAY TODOS LOS INPUT QUE COINCIDAN CON EL SELECTOR
	let cuadrosTexto = document.querySelectorAll("#datosAlumno input[type = text]");
	// PODEMOS RECORRER EL ARRAY DE VARIAS MANERAS PARA IR APLICANDO ESTILOS A CADA UNO

	for (let elemento of cuadrosTexto) {
		// APLICAMOS EL ESTILO DESEADO A CADA E
		elemento.style.boxShadow = "none";
	}
}

function iluminaTxtNombre() {
	document.querySelector("#txtNombre").style.boxShadow = "0 0 5px 5px yellow";
	document.querySelector("#txtNombre").required = false;
}
function apagaTxtNombre() {
	document.querySelector("#txtNombre").style.boxShadow = "none";
}
function iluminaTxtApellido1() {
	document.querySelector("#txtApellido1").style.boxShadow = "0 0 5px 5px yellow";
}
function apagaTxtApellido1() {
	document.querySelector("#txtApellido1").style.boxShadow = "none";
}
function iluminaTxtApellido2() {
	document.querySelector("#txtApellido2").style.boxShadow = "0 0 5px 5px yellow";
}
function apagaTxtApellido2() {
	document.querySelector("#txtApellido2").style.boxShadow = "none";
	activaNotasAlumno();
}

// ESTA FUNCIÓN LA EJECUTAMOS PARA ACTIVAR EL FIELDSET DE NOTAS
function activaNotasAlumno() {
	// USAREMOS EL MÉTODO ATTRIBUTES.ADD PARA AÑADIR UN ATRIBUTO A ESE 'id'
	// document.querySelector("#notasAlumno").removeAttribute("disabled");
	document.querySelector("#notasAlumno").disabled = false;
}