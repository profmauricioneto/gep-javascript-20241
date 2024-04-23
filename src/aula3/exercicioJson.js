/**
 * Um aplicativo de gerenciamento de tarefas armazena informações
sobre as tarefas dos usuários em formato JSON. Crie um programa
em JavaScript que recebe um array contendo objetos JSON
representando tarefas. Cada objeto possui os campos titulo,
descricao e concluida. O programa deve retornar um novo array
contendo os títulos das tarefas concluídas.
    ○  Implemente a função obterTitulosTarefasConcluidas(tarefas) que
recebe um array de objetos JSON de tarefas como parâmetro e
utiliza manipulação de JSON para criar um novo array contendo
os títulos das tarefas que estão marcadas como concluídas.
*/

const tarefas = require('../data/json/tasks.json');

function main() {
    let titulos = obterTitulosTarefasConcluidas(tarefas);
    console.log(titulos);
}

function obterTitulosTarefasConcluidas(tarefas) {
    let array_data = [];
    for (let i = 0; i < tarefas.length; i++) {
        array_data.push(tarefas[i])
    }

    let titulos_concluidos = array_data.filter(estadoTrue).map(({titulo}) => titulo);

    // let tarefas_concluidas = array_data.filter((tarefa) => {
    //     return tarefa.estado === true;
    // });

    // let titulos_conluidos = tarefas_concluidas.map(({titulo}) => titulo);
    return titulos_concluidos;
}

function estadoTrue(tarefa) {
    return tarefa.estado === true;
}

main()