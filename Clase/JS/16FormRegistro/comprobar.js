function guardarCampos() {
	// CREAMOS LAS VARIABLES
	// DECLARACION
	let usuario;
	let password;
	// ASIGNACION
	// GUARDAMOS EN LAS VARIABLES EL CONTENIDO DE LOS CAMPOS
	usuario = document.querySelector('#user').value;
	password = document.getElementById('pass').value;

	if (usuario == "Ivan") {
		// GUARDAMOS EN LOS CAMPOS DEL SEGUNDO FORMULARIO EL CONTENIDO DE LAS VARIABLES 
		// MOSTRAMOS EL FORMULARIO
		document.querySelector('#formImprimeDatos').style.display = "flex";
		// MOSTRAMOS LOS DATOS EN EL SEGUNDO FORMULARIO 
		document.querySelector('#datoUsuario').value = usuario;
		document.getElementById('datoPassword').value = password;
		// OCULTAMOS EL PRIMER FORMULARIO
		document.querySelector('#formRegistro').style.display = "none";
		// alert("EUREKA!");
	}
	else if (usuario == "Juanma"){
		alert("Que no estras, CANSINO!!!");
	}
	else{
		alert("Nombre de usuario erroneo!!!");
	}

	// DE ESTE MODO PUEDO CONTROLAR EL VALOR DE LOS CAMPOS
	// console.log(usuario);
	// console.log(password);
	// alert(usuario);
	// alert(password);



}

function compruebaCredenciales() {

}