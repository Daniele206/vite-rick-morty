<script>
  import { store } from '../../data/store'

  export default {
    data(){
      return{
        store
      }
    },

    methods:{
      pageswap(isNext){
        if(isNext){
          this.store.respParams.page++;
        }else{
          this.store.respParams.page--;
        }
        this.$emit('swapPage')
      },
    }
  }
</script>


<template>
  <div class="d-center py-5">
    <button v-if="store.respParams.page > 1" @click="pageswap(false)" class="btn btn-success mx-3"><i class="fa-solid fa-angle-left"></i></button>
    <span class="fs-2">Pag. {{ store.respParams.page }} di {{ store.respParams.totalPage }}</span>
    <button v-if="store.respParams.page < store.respParams.totalPage" @click="pageswap(true)" class="btn btn-success mx-3"><i class="fa-solid fa-angle-right"></i></button>
  </div>
</template>


<style lang="scss" scoped>

</style>