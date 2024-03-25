<script>
  //axios
  import axios from 'axios';
  //axios

  import Header from './components/Header.vue';
  import Main from './components/Main.vue';

  export default {
    components:{
      Header,
      Main,
    },
    
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