<template>
    
    <h1>Conradito Chokito</h1>
    <p>A melhor chocolateria de {{ cidade }} e região!</p>

    <hr/>

    <p>Você está logado como <strong>{{ acesso }}</strong></p>
    <button v-on:click="alteraAcesso()" >Alterar acesso</button>

    <hr/>

    <h2>Produto mais vendido:</h2>
    <p>Nome: <strong>{{ produto.nome }}</strong></p>
    <p>Preço: <strong>{{ produto.valor }}</strong></p>
    <p>Quantidade em estoque: <strong>{{ produto.estoque }}</strong></p>

    <hr/>

    <div v-if="acesso == 'admin'" >
        <h2>Sistema de Estoque</h2>
        <p>Este é o sistema de estoque para adicionar e remover produtos.</p>
        <p>Selecione o produto que deseja mudar o estoque:</p>
        <p> {{ produto.nome }} - <button v-on:click="incrementaEstoque(1)" >Aumentar</button> <button v-on:click="incrementaEstoque(-1)" >Diminuir</button> </p>
        <p v-if="produto.estoque < 5" style="color: orange">Atenção: O produto está com o estoque baixo!</p>
        <p v-if="produto.estoque <= 0" style="color: red">Alerta: PRODUTO FORA DE ESTOQUE!</p>
    </div>


</template>

<script setup>

    /*
        ---- PASSO A PASSO
        1 - Montar o HTML puro do cabeçalho
        2 - Ensinar como adicionar variáveis e mostrá-las
        3 - Atividade de montar o produto
            -- Iniciar com variáveis comuns
            -- Passar para objetos
        4 - Apresentar o v-on para aumentar ou diminuir
            -- Também deverá ser apresentado o "reactive" do vue
        5 - Atividade de alterar o acesso
            -- Mostrar o "ref" e explicar diferença do reactive
        6 - Apresentar o v-if para o estoque do produto
            -- 6.1 - Mostrar apenas como fazer o aviso de estoque baixo
            -- 6.2 - Atividade de alerta fora de estoque
            -- 6.3 - Melhorar o IF para que não diminua menos que zero e fazer o atenção sumir
        7 - Atividade de mostrar o sistema de estoque apenas se o usuário logado for admin

    */

    import { ref, reactive } from 'vue';

    const cidade = "São Carlos";

    // const produto_nome = "Chokito tradicional";
    // const produto_valor = 3;
    // const produto_estoque = 56;
    const produto = reactive ({
        nome: "Chokito tradicional",
        valor: 3.00,
        estoque: 7
    })

    let acesso = ref("admin");

    function incrementaEstoque( valor ){
        produto.estoque += valor;
    }

    function alteraAcesso(){
        if( acesso.value == "admin" ){
            acesso.value = "usuario";
        }else{
            acesso.value = "admin";
        }
    }

</script>



<style>
</style>
