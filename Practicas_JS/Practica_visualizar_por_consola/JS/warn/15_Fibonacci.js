function fibonnacci() {
    let num1 = 0;
    let num2 = 1;
    let resultado = 0;
    while (num1 < 1000) {
        console.log(num1);
        resultado = num1 + num2;
        num1 = num2;
        num2 = resultado;
    }
}
function fibonnacci2() {
    num1 = 0;
    num2 = 1;
    resultado = 0;

    let n = 20; // Cambia este valor para calcular más números de Fibonacci


    for (let i = 0; i < n; i++) {
        if (i < 1) {
            resultado = i;
        } else {
            console.log(resultado);
            resultado = num1 + num2;
            num1 = num2;
            num2 = resultado;
        }

    }

}

fibonnacci();
//fibonnacci2();
// Muestra el resultado en la consola