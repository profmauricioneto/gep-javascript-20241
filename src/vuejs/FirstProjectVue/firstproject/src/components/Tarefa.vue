<template>
    <div :class="{ concluida: tarefa.concluida }">
        {{ tarefa.descricao }} - {{ tarefa.concluida ? 'Concluída' : 'Pendente' }}
    </div>
</template>

<script>
export default {
  props: {
    tarefa: {
      type: Object,
      required: true,
    },
  }
};
</script>

<style>
    .concluida {
    text-decoration: line-through;
    color: #888;
    }
</style>