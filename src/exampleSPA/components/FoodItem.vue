<template>
    <h2 @click="addFavorite(foodName)" >{{ foodName }} -- <small>{{ color }}</small> <u v-show="favorite">FAVORITO</u> </h2>
    <p>{{ message }}</p>
</template>

<script>
    export default{
        props: [ "foodName", "color", "message", "favorite" ],
        data() {
            return{
                // name: "Maçãs",
                // message: "Eu gosto de maçãs"
            }
        },
        methods: {
            addFavorite(name){
                this.$emit("addFavorite", this.foodName)
                console.log(name)
            }
        }
    }
</script>

<style scoped>
    p{
        color: red;
    }
</style>