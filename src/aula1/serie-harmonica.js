prompt = require('prompt-sync')();

termos = parseInt(prompt('Digite a quantidade da série: '));
let serieHarmonica = 0;

for(let i = 1; i < termos; i++) {
    serieHarmonica += 1 / i;
}

console.log(`Valor da Serie Harmonica: ${serieHarmonica}`);