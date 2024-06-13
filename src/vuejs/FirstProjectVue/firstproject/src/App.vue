<template>
  <div>
    <h1>Lista de Tarefas</h1>
    <Tarefa v-for="tarefa in listaDeTarefas" :key="tarefa.id" :tarefa="tarefa" />
  </div>
</template>

<script>
import Tarefa from './components/Tarefa.vue';

export default {
  components: {
    Tarefa,
  },
  data() {
    return {
      listaDeTarefas: [
        { id: 1, descricao: 'Fazer compras', concluida: false },
        { id: 2, descricao: 'Estudar Vue.js', concluida: true },
        { id: 3, descricao: 'Ler livro', concluida: false },
        { id: 4, descricao: 'Fazer exercícios', concluida: false},
      ],
    };
  },
};
</script>


