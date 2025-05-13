function fibonnacci(){
    let num1;
    let num2;
    let resultado;

    let i = 0;
    let n = 100; // Cambia este valor para calcular más números de Fibonacci

    num1 = 0;
    num2 = 1;
    resultado = 0;

    for (i = 0; i < n; i++) {
        if (i <= 1) {
            resultado = i;
        } else {
            resultado = num1 + num2;
            num1 = num2;
            num2 = resultado;
        }
        console.log(resultado);
    }
}