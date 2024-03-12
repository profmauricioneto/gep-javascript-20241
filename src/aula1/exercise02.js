/**
 * Faça um programa que receba um valor ou um conjunto de valores e verifique se cada número é par ou ímpar. O programa deve exibir:
    3 is odd
    4 is even
    Pode ser feito com entrada de dados pelo prompt-sync ou com um vetor estático inicial.
*/

prompt = require('prompt-sync')();

// let fnumber = prompt('Digite um valor inteiro: ');

// if (parseInt(fnumber) % 2 == 0) {
//     console.log(`${fnumber} é par`);
// } else {
//     console.log(`${fnumber} é ímpar`);
// }


let values = [1,2,3,4,5,6,7,8];

for (let i = 0; i < values.length; i++) {
    if (parseInt(values[i]) % 2 == 0) {
        console.log(`${values[i]} é par`);
    } else {
        console.log(`${values[i]} é ímpar`);
    }
}

