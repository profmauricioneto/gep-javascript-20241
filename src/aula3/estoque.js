/**
 * Crie um vetor chamado estoque que armazene informações sobre produtos disponíveis em uma loja. 
 * Cada produto deve ter as propriedades nome, preco e quantidade. Em seguida, crie uma função chamada verificarEstoque que recebe o nome de um produto como parâmetro e retorna uma mensagem informando se o produto está disponível em estoque e quantas unidades estão disponíveis.
 **/
prompt = require('prompt-sync')();


let estoque = [];

function carregarEstoque() {
    let option = parseInt(prompt('Quantidade de produtos: '), 10);

    for (let i = 0; i < option; i++) {
        let produto = {};
        produto.nome = prompt('Nome do Produto: ');
        produto.preco = parseFloat(prompt('Preço do Produto: R$'));
        produto.quantidade = parseInt(prompt('Quantidade do Produto: '), 10);
        estoque.push(produto);
        console.log(estoque);
    }
}

let verificarEstoque = (nome) => {
    let flag = false;
    for (let i = 0; i < estoque.length; i++) {
        if (estoque[i].nome === nome) {
            console.log(`Produto ${estoque[i].nome} disponível!`);
            console.log(`Quantidade: ${estoque[i].quantidade} unidades`);
            flag = true;
        } 
    }
    return flag;
};

function main() {
    carregarEstoque();
    produto = prompt('Digite o nome do produto: ');
    if (!verificarEstoque(produto)) {
        console.log(`${produto} indisponível no estoque.`);
    }
}

main();