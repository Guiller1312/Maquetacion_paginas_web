// ESTA FUNCIÓN ILUMINA EL CAMPO EN AMARILLO -- ES GENÉRICA --
function iluminaCampo(inputID) {
    // RECIBO EL ID Y LE DIGO QUE APLIQUE LA SOMBRA AMARILLA A ESE CAMPO
    document.querySelector(`${inputID}`).style.boxShadow = "0 0 5px 5px blue";

}
function apagarCampo(inputID) {
    document.querySelector(`${inputID}`).style.boxShadow = "none";
}


function validarDNI() {
    let DNI = document.querySelector('#NIF').value;
    iluminaCampo('#NIF');
    let letra = ' ';
    let resultado = 0;
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    if (DNI.length != 8) {
        alert('El DNI debe tener 8 números');
    } else {
        resultado = DNI % 23;
        letra = letras[resultado];
        document.querySelector('#NIF').innerHTML = ` ${DNI} ${letra}`
    }
}

function mostrarNombreUsuario() {
    let nombre = document.querySelector('#Nombre').value;
    let apellido = document.querySelector('#Apellido1').value;
    let apellido2 = document.querySelector('#Apellido2').value;


    document.querySelector('#datosalumno').innerHTML = `${nombre} ${apellido} ${apellido2}`;
}
function mostrarDatos() {
    let dni = document.querySelector('#NIF').value;
    let telefono = document.querySelector('#Telefono').value;
    let correo = document.querySelector('#correo').value;

    document.querySelector('#datosexamen').innerHTML = `
        DNI: ${dni}
        Teléfono: ${telefono}
        correo: ${correo}
    `;
}