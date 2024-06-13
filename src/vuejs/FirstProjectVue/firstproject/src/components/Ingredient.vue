<script>
export default {
    props: [
        'ingredientName'
    ],
}
</script>

<template>
    <div>
        <p>{{ ingredientName }}</p>
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