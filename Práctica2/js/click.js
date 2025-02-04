let contador = 0;

function press() {

    const cuadro_pequeño = document.getElementById("grid_principal");

    if (contador % 2 == 0) {    
        cuadro_pequeño.style.padding = "10%";
        cuadro_pequeño.style.backgroundColor = "grey";
        contador++;
    } else if (contador % 2 != 0) {
        cuadro_pequeño.style.padding = "0%";
        contador++;
    }

}