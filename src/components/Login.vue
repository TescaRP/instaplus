<template>
  <div class="container d-flex">
    <h3 class="center-align">Login</h3>

    <form action="bb" @submit.prevent="onSubmit">
      <div class="input-field">
        <input id="user" type="text" class="validate" />
        <label for="user">Digite seu usuário</label>
      </div>
      <div class="input-field">
        <input id="password" type="password" class="validate" />
        <label for="password">Password</label>
        <router-link to='forget' class="helper-text teal-text text-lighten-2">Esqueceu a senha?</router-link>
        <router-link to='register' class="helper-text teal-text text-lighten-2">Não tem conta? Registre-se!</router-link>
      </div>

    <button type="submit" class='btn waves-effect waves-light align-center'>Entrar</button>
    </form>
  </div>
</template>

<script>
export default {
  methods:{
    onSubmit() {
      //if ok
      this.$router.push({name: "Inicio"})
    }
  }
};
</script>

<style scoped>
.container{
    display:flex;
    flex-direction: column;
    justify-content: space-between !important;
    height: 100%;
}
.btn{
    display:block !important;
    margin: 0 !important;
    width: 100%;
}

</style>