/**
 * Uma empresa está coletando dados dos seus funcionários
para gerar relatórios. Crie um programa em JavaScript que
recebe um array contendo informações de funcionários, onde
cada informação é um objeto com os campos nome, idade e
cargo. O programa deve retornar um novo array contendo
apenas os nomes dos funcionários.
○ Implemente a função obterNomesFuncionarios(funcionarios) que
recebe um array de informações de funcionários como parâmetro
e utiliza o operador de desestruturação (destructuring) para criar
um novo array contendo apenas os nomes dos funcionários.
*/
const funcionarios = [
    {
        nome: "Maurício Neto",
        idade: 33,
        cargo: "professor"
    },
    {
        nome: "Maria Silva",
        idade: 25,
        cargo: "analista de sistemas"
    },
    {
        nome: "Carlos Souza",
        idade: 40,
        cargo: "gerente"
    },
    {
        nome: "Ana Paula",
        idade: 30,
        cargo: "analista de sistemas"
    },
    {
        nome: "João Oliveira",
        idade: 35,
        cargo: "analista de sistemas"
    },
    {
        nome: "José Santos",
        idade: 45,
        cargo: "gerente"
    }
];

function obterNomesFuncionarios(funcionarios) {
    return funcionarios.map(({nome}) => nome);
}

function obterNomeFuncionariosRaphael(funcionarios) {
    let newArray;
    newArray = [...funcionarios.map(obj => obj.nome)];
    return newArray
}

console.log(obterNomesFuncionarios(funcionarios));
console.log(obterNomeFuncionariosRaphael(funcionarios));