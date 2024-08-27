<template>
    
    <h1>Conradito Chokito - E-commerce</h1>
    <p>Compre seus produtos online!</p>

    <hr/>
    <h2>Seu carrinho:</h2>
    <p>Produtos adicionados: <strong>{{ quantidade }}</strong></p>
    <button v-on:click="finalizaCompra()" >Finalizar compra</button>

    <hr/>
    <p>Selecione a categoria que deseja ver:</p>
    <ul>
        <li v-on:click="alteraCategoria('chocolates')" >Chocolates de Chokito</li>
        <li v-on:click="alteraCategoria('quitandas')" >Quitandas de Chokito</li>
        <li v-on:click="alteraCategoria('')">Ocultar produtos</li>
    </ul>

    <div v-if="categoria == 'chocolates'" >
        <h2>Chocolates de Chokito</h2>
        <ul>
            <li>Chokito Tradicional <button v-on:click="adicionar()" >Adicionar</button></li>
            <li>Chokito Branco <button v-on:click="adicionar()" >Adicionar</button></li>
            <li>Chokito Chocolate Amargo <button v-on:click="adicionar()" >Adicionar</button></li>
        </ul>
    </div>

    <div v-if="categoria == 'quitandas'">
        <h2>Doces de Chokito</h2>
        <ul>
            <li>Bombom de Chokito <button v-on:click="adicionar()" >Adicionar</button></li>
            <li>Bolo de Chokito <button v-on:click="adicionar()" >Adicionar</button></li>
        </ul>
    </div>

</template>

<script setup>

   
    import { ref, reactive } from 'vue';

    let categoria = ref("");
    let quantidade = ref(0);

    function alteraCategoria( valor ){
        categoria.value = valor;
    }

    function adicionar(){
        quantidade.value++;
    }

    function finalizaCompra(){
        alert("Compra finalizada com sucesso!")
        quantidade.value = 0;
        categoria.value = "";
    }

</script>



<style>
</style>
