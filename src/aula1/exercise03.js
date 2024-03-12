/**
 * ● Faça um programa que calcule o IMC e o peso ideal de uma pessoa com base em seu gênero (masculino/feminino).
    ○ IMC = Peso / altura2
    ○ Peso Ideal
        ■ Masculino: 72.7 * altura - 58
        ■ Feminino: 62.1 * altura - 44.7
*/

prompt = require('prompt-sync')();

let peso = parseFloat(prompt('Digite seu peso: '));
let altura = parseFloat(prompt('Digite seu altura: '));
let genero = prompt('Digite seu genero: [masculino/feminino] ');

let IMC = peso / (altura * altura);
console.log(`Seu IMC é ${IMC.toFixed(2)}`);

let pesoIdeal = 0;
if (genero.toLowerCase() === "masculino") {
    pesoIdeal = 72.7 * altura - 58;
} else if (genero.toLowerCase() === "feminino") {
    pesoIdeal = 62.1 * altura - 44.7;
} else {
    console.log('Genero Invalido');
}
console.log(`Seu peso ideal é ${pesoIdeal}`);