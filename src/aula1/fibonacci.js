prompt = require('prompt-sync')();

let qtd_termos = parseInt(prompt('Quantidade de elementos: '));

let a = 0
let b = 1;
let aux = 0;

if (qtd_termos == 0) {
    console.log('Não é possível gerar uma série com essa quantidade de elementos');
} else {
    for(let i = 0; i <= qtd_termos; i++) {
        console.log(aux);
        aux = a + b;
        a = b;
        b = aux;
    }
}

