/**
 * Faça um programa que tenha uma função de boas vindas. 
 * A função recebe o nome do usuário e apresenta uma mensagem de boas vindas com o nome do usuário.
*/

prompt = require('prompt-sync')();

let name = prompt('Name: ');

function greeting(name) {
    let message = `Hello Mr(s). ${name.toUpperCase()}`;
    console.log(message);
}

greeting(name);
