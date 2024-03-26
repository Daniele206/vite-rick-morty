<script>
  //axios
  import axios from 'axios';
  //axios

  //store
  import { store } from './data/store'
  //store

  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import Paginator from './components/partials/Paginator.vue';

  export default {
    components:{
      Header,
      Main,
      Paginator
    },

    data(){
      return{
        store
      }
    },

    methods:{
      getApi(){
        axios.get(this.store.apiUrl, {
          params: this.store.respParams
        })
        .then(result => {
          this.store.respParams.totalPage = result.data.info.pages
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
    <Header @nameSearch="getApi()" @statusSearch="getApi()" @reset="getApi()"/>
    <Main />
    <Paginator @swapPage="getApi()" />
  </div>
</template>


<style lang="scss">

  @use './assets/scss/main.scss';

</style>