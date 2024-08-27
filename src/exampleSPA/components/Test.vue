<template>
    <h3 @click="changeDom()" ref="testa">aoba</h3>
</template>

<script>
    export default{
        methods:{
            changeDom(){ // Acessar o DOM diretamente
                this.$refs.testa.innerHTML = "green";
                this.$refs.testa.style.color = "green";
                console.log(this.comidinhas)
            }
        },
        inject: ["comidinhas"]
    }
</script>