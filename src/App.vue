<template>
    
    <h1>Explorar rotas</h1>
    <p>Conteúdo de aulas:</p>    
    <RouterLink to="/aula01">Testeaaa</RouterLink>

    <RouterView/>

</template>

<script setup>
  
    import { RouterLink, RouterView } from 'vue-router';

</script>

<style>
</style>
