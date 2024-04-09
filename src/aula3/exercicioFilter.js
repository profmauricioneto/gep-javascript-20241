/**
 * Considere um conjunto de números inteiros. Crie um
programa em JavaScript que recebe um array de
números inteiros e retorna um novo array contendo
apenas os números pares. Implemente a função
selecionarNumerosPares(numeros) que recebe um array
de números inteiros como parâmetro e utiliza o método
filter para criar um novo array contendo apenas os
números pares.
*/

const numeros = [1,2,3,4,5,6,7,8,9];

let selecionarNumerosPares = (numeros) => {
    return numeros.filter(num => num % 2 === 0);
}

let numerosPares = selecionarNumerosPares(numeros);
console.log(numerosPares);