<script>
  import card from './partials/card.vue';

  import { store } from '../data/store';

  export default {
    components:{
      card
    },

    data(){
      return{
        store
      }
    }
    
  }
</script>


<template>
  <div class="d-center flex-wrap my-container">
    <card 
    v-for="card in store.cardList"
    :kei="card.id"
    :cardName="card.name"
    :CardStatus="card.status"
    :CardSpecies="card.species"
    :CardImage="card.image"
    />
  </div>
</template>


<style lang="scss" scoped>

</style>