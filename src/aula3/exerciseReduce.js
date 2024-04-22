let mynumbers = [1, 2, 3, 4, 5, 6, 7];

let maiorValor = mynumbers.reduce((acc, current) => {
    if (acc > current) {
        return acc;
    } else {
        return current;
    }
}, 0);

console.log(maiorValor);

// novo exercicio

let somarioPares = mynumbers.filter(numberPares => numberPares % 2 === 0).reduce((acc, current) => acc + current, 0);

console.log(somarioPares);