<script>
  export default {
    props:{
      cardName: String,
      CardStatus: String,
      CardSpecies: String,
      CardImage: String
    }
  }
</script>


<template>
  <div class="card m-4 card-dim">
    <img :src="CardImage" class="card-img-top" alt="">
    <div class="card-body">
      <h2 class="fw-bold d-center text-center ">{{ cardName }}</h2>
      <hr>
      <div class="fs-3 text-center">{{ CardStatus }}</div>
      <div class="fs-4 text-center">{{ CardSpecies }}</div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  @use '../../assets/scss/variables' as *;

  h2{
    height: 4.5rem;
  }

</style>