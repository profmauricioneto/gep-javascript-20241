<script>
export default {
  name: 'App',
  data() {
    return {
      message: 'My Programming Languages',
      language: 'javascript',
      click: 0
    };
  },
  methods: {
    clickInMessage() {
      this.click++;
    }
  },
};
</script>

<template>
    <div v-on:click="clickInMessage()">
        <h1>{{ message }}</h1>
        <p>{{ language }}</p>
        <p>You click here in {{ click }} times.</p>
    </div>
</template>

<style>
  div {
    border: dashed black 1px;
    display: inline-block;
    margin: 5px;
    padding: 5px;
    background-color: lightblue;
  }
</style>