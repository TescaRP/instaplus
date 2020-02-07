<template>
  <div>
    <div>
      <router-link :to="{ name:'Inicio' }"><i class="material-icons small">arrow_back</i></router-link>
    </div>
    <div class="center-align">
      <p>Página não encontrada</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
p {
  font-size: 20px;
}
div {
  width: 100%;
}
</style>