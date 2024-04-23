/**
 * Um sistema precisa processar uma lista de números inteiros e aplicar
operações matemáticas a eles. Crie uma função em JavaScript que recebe
um array de números e duas funções de callback: uma para calcular o dobro
dos números e outra para calcular o quadrado dos números. A função deve
retornar um novo array contendo os resultados das operações de acordo com
os callbacks fornecidos.
○ Implemente a função processarNumeros(lista, callbackDobro,
callbackQuadrado) que recebe um array de números, uma função de
callback callbackDobro e uma função de callback callbackQuadrado. A
função deve aplicar cada callback a cada número do array e retornar um
novo array com os resultados.
*/

function callbackDobro(value) {
    return value * 2;
}

function callbackQuadrado(value) {
    return value * value;
}

function processarNumeros(lista, callbackDobro, callbackQuadrado) {
    var arrayResultados = [];

    for (let i = 0; i < lista.length; i++) {
        let resultadoDobro = callbackDobro(lista[i]);
        let resultadoQuadrado = callbackQuadrado(lista[i]);

        arrayResultados.push({
            numero: lista[i],
            valorDobro: resultadoDobro,
            valorQuadrado: resultadoQuadrado
        })
    }

    return arrayResultados;
}

function main() {
    let lista = [1, 2, 3, 4, 5 ,6 ,7, 8, 9];
    let resultado = processarNumeros(lista, callbackDobro, callbackQuadrado);
    console.log(resultado);
}

main();