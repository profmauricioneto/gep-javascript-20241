/**
 * Faça um programa que receba uma quantidade ilimitada de valores numéricos e calcule o produtório.
*/

function product(...args) {
    let prod = 1;
    for (i = 0; i < args.length; i++) {
        prod *= args[i];
    }
    return prod;
}

console.log("Valor do produtório: " + product(1,2,3,4,5));