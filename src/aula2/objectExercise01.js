/**
 * Crie um objeto chamado pessoa com as seguintes propriedades: nome, idade e profissão. Em seguida, imprima no console uma mensagem no seguinte formato: "Olá, meu nome é {nome}, tenho {idade} anos e sou {profissao}."
*/

prompt = require('prompt-sync')();

let person = {};
person.name = prompt('Name: ');
person.age = parseInt(prompt('Age: '), 10);
person.work = prompt('Work: ');

let message = (person) => {
    console.log(`Olá, meu nome é ${person.name}, tenho ${person.age} anos e sou ${person.work}.`);
};

message(person);