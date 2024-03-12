// npm install prompt-sync
prompt = require('prompt-sync')();

let nameUser = prompt('Enter with your name: ');

console.log(nameUser.toUpperCase());