function fibonnacci(){
    let num1 = 0;
    let num2 = 1;
    let resultado= 0;
while (resultado < 1000) {
        console.log(resultado);
        resultado = num1 + num2;
        num1 = num2;
        num2 = resultado;
    }
}

//     let i = 0;
//     let n = 20; // Cambia este valor para calcular más números de Fibonacci


//     for (i = 0; i < n; i++) {
//         if (i <= 1000) {
//             resultado = i;
//         } else {
//             resultado = num1 + num2;
//             num1 = num2;
//             num2 = resultado;
//         }
//         console.log(resultado);
//     }
// }

fibonnacci();
// Muestra el resultado en la consola