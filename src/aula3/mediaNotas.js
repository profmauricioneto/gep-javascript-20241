/**
 * Você é um professor e deseja calcular a média das notas de seus alunos em uma disciplina. Crie um programa em JavaScript que recebe um array de notas (números) e calcula a média das notas. A média é calculada somando todas as notas e dividindo pelo total de notas. Implemente a função calcularMediaNotas(notas) que recebe um array de notas como parâmetro e retorna a média das notas.
*/

const notas = [5, 6, 7, 8, 9, 10, 6, 1, 6, 7, 6];

let calcularMediaNotas = (notas) => {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    let media = soma / notas.length;
    return media;
};

console.log(calcularMediaNotas(notas));