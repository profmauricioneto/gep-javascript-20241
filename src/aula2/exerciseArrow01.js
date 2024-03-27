/**
 * Dada a seguinte lista de números: a. const numbers = [1, 2, 3, 4, 5];
Escreva uma função arrow que retorne um novo array contendo os números multiplicados por 2.
Dica: utilizar o método .push();
*/

const numbers = [1, 2, 3, 4, 5];

let multiplyfForTwo = (numbers) => {
    let newArray = [];
    for (let i = 0; i < numbers.length; i++) {
        newArray.push(numbers[i]*2);
    }
    return newArray;
};

console.log(multiplyfForTwo(numbers));