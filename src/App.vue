<script>
  //axios
  import axios from 'axios';
  //axios

  //store
  import { store } from './data/store'
  //store

  import Header from './components/Header.vue';
  import Main from './components/Main.vue';

  export default {
    components:{
      Header,
      Main,
    },

    data(){
      return{
        store
      }
    },

    methods:{
      getApi(){
        console.log('get api');
        axios.get(this.store.apiUrl, {
          params:{
            num: 10,
            offset: 0,
            language: 'it'
          }
        })
        .then(result => {
          this.store.cardList = result.data.results;
          console.log(this.store.cardList);
        })
        .catch(error => {
          console.log(error);
        })
      }
    },

    mounted(){
      this.getApi()
    }
    
  }
</script>


<template>
  <div class="bg-primary">
    <Header />
    <Main />
  </div>
</template>


<style lang="scss">

  @use './assets/scss/main.scss';

</style>