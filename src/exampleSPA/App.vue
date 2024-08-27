<template>
    <h1>{{ message }}</h1>
    <!-- Props pode ser usado tanto com traço (food-name) quanto colado (foodName) -->
    <!-- <FoodItem food-name="Maçã" color="Verde" message="Eu gosto de maçãs" favorite="true" />
    <FoodItem foodName="Abacaxi" color="Amarelo" message="Não vou descascar" />
    <FoodItem foodName="Maçã" color="Vermelha" message="E também gosto da vermelha" v-bind:favorite="true" /> -->
    <FoodItem v-for="comidinha in comidinhas" v-bind:foodName="comidinha.name" :key="comidinha.foodName" @addFavorite="addFavorite"  />
    <Test/>
    <button @click="removeFirst()">Remove first</button>

    <ul>
        <p>Comidas favoritas:</p>
        <li v-for="comidinha in comidinhas" v-show="comidinha.favorite" >{{ comidinha.name }}</li>
    </ul>

</template>

<script>

    import FoodItem from './components/FoodItem.vue';
    import Test from './components/Test.vue';

    export default {
        components:{
            FoodItem, Test
        },
        data(){
            return{
                message: "Frutas e comidinhas",
                comidinhas: [ {name: "Maçã", favorite: false}, {name: "Pera", favorite: false}, {name: "Uva", favorite: false},]
            }
        },
        methods: {
            removeFirst(){
                this.comidinhas.shift()
            },
            addFavorite( name ){
                this.comidinhas.map( comidinha => {
                    if( comidinha.name == name ){
                        comidinha.favorite = !comidinha.favorite;
                    }
                    return comidinha
                } )
            }
        },
        provide(){
            return{
                comidinhas: this.comidinhas
            }
        }
    }
</script>



<style>
</style>
