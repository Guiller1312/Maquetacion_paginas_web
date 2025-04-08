function elegirDiaSemana() {
    var dia = document.querySelector("#dia").value;

    switch (dia) {
        case "Lunes":
            document.querySelector("#diaElegido").value = dia;
            document.querySelector("#visorDatosdia").innerHTML = "El horario de oficina: 9:00 AM - 5:00 PM";
            document.querySelector("#visorDatosdia").style.color = "blue";
            document.querySelector("#visorDatosdia").style.boxShadow = "0 0 5px 5px blue";
            break;
        case "Martes":
            document.querySelector("#diaElegido").value = dia;
            document.querySelector("#visorDatosdia").innerHTML = "El horario de oficina: 9:00 AM - 5:00 PM";
            document.querySelector("#visorDatosdia").style.color = "blue";
            document.querySelector("#visorDatosdia").style.boxShadow = "0 0 5px 5px blue";
            break;
        case "Miércoles":
            document.querySelector("#diaElegido").value = "Miercoles";
            document.querySelector("#visorDatosdia").innerHTML = "El horario de oficina: 9:00 AM - 5:00 PM";
            document.querySelector("#visorDatosdia").style.color = "blue";
            document.querySelector("#visorDatosdia").style.boxShadow = "0 0 5px 5px blue";
            break;
        case "Jueves":
            document.querySelector("#diaElegido").value = "Jueves";
            document.querySelector("#visorDatosdia").innerHTML = "El horario de oficina: 9:00 AM - 5:00 PM";
            document.querySelector("#visorDatosdia").style.color = "blue";
            document.querySelector("#visorDatosdia").style.boxShadow = "0 0 5px 5px blue";
            break;
        case "Viernes":
            document.querySelector("#diaElegido").value = "Viernes";
            document.querySelector("#visorDatosdia").innerHTML = "El horario de oficina: 9:00 AM - 5:00 PM";
            document.querySelector("#visorDatosdia").style.color = "blue";
            document.querySelector("#visorDatosdia").style.boxShadow = "0 0 5px 5px blue";
            break;
        case "Sábado":
            document.querySelector("#diaElegido").value = "Sábado";
            document.querySelector("#visorDatosdia").innerHTML = "Día no laborable";
            document.querySelector("#visorDatosdia").style.color = "red";
            document.querySelector("#visorDatosdia").style.boxShadow = "0 0 5px 5px red";
            break;
        case "Domingo":
            document.querySelector("#diaElegido").value = "Domingo";
            document.querySelector("#visorDatosdia").innerHTML = "Dia no laborable";
            document.querySelector("#visorDatosdia").style.color = "red";
            document.querySelector("#visorDatosdia").style.boxShadow = "0 0 5px 5px red";
            break;
    }
}
function compruebaDia() {

    var diaelegido = document.querySelector("#nombreDia").value;
    var dia = document.querySelector("#dia").value;
    if (diaelegido == dia) {
        document.querySelector("#visorDatosdia").innerHTML = "El día elegido es correcto";
        return diaelegido;
    } else {
        return true;
    }
}