<script>
  import { store } from '../data/store';

  export default {
    data(){
      return{
        store
      }
    },

    methods:{
      searchByName(){
        this.store.respParams.page = 1;
        this.$emit('nameSearch')
      },

      getStatus(status){
        this.store.respParams.page = 1;
        if(status === 'alive'){
          this.store.respParams.status = 'Alive';
        }else if(status === 'unknown'){
          this.store.respParams.status = 'unknown';
        }else if(status === 'dead'){
          this.store.respParams.status = 'Dead';
        }else if(status === 'total'){
          this.store.respParams.status = '';
        };

        this.$emit('statusSearch')
      },

      reset(){
        this.store.respParams.page = 1;
        this.store.respParams.status = '';
        this.store.respParams.name = '';

        this.$emit('reset')
      }
    }
    
  }
</script>


<template>
  <div>
    <h1 class="fw-bold text-center pt-5">- Rick & Morty -</h1>
    <div class="d-center">
      <div class="d-flex w-50 py-5">
        <div class="input-group mx-1">
          <input v-model="store.respParams.name" @keyup.enter="searchByName" type="text" class="form-control" placeholder="Search Character" aria-label="Recipient's username" aria-describedby="button-addon2">
        </div>
        <select class="form-select mx-1 w-50" aria-label="Default select example">
          <option selected>Select status</option>
          <option value="1" @click="getStatus('alive')">Alive</option>
          <option value="2" @click="getStatus('unknown')">UnkNown</option>
          <option value="3" @click="getStatus('dead')">Dead</option>
          <option value="3" @click="getStatus('total')">Total</option>
        </select>
        <button @click="searchByName" class="btn btn-info mx-1" type="button" id="button-addon2">Search</button>
        <button @click="reset" class="btn btn-warning mx-1">Reset</button>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>