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
      }
    }
    
  }
</script>


<template>
  <div>
    <h1 class="fw-bold text-center pt-5">- Rick & Morti -</h1>
    <div class="d-center">
      <div class="d-flex w-50 py-5">
        <div class="input-group mx-1">
          <input v-model="store.respParams.name" @keyup.enter="searchByName" type="text" class="form-control" placeholder="Search Character" aria-label="Recipient's username" aria-describedby="button-addon2">
        </div>
        <select class="form-select mx-1 w-50" aria-label="Default select example">
          <option selected>Select status</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <button class="btn btn-info mx-1" type="button" id="button-addon2">Search</button>
        <button class="btn btn-warning mx-1">Reset</button>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>