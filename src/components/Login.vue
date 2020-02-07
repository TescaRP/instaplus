<template>
  <div class="container d-flex">
    <h3 class="center-align">Login</h3>
    <span>
      <div class="input-field">
        <input id="user" type="text" class="validate" />
        <label for="user">Digite seu usuário</label>
      </div>
      <div class="input-field">
        <input id="password" type="password" class="validate" />
        <label for="password">Password</label>
        <router-link to='forget' class="helper-text teal-text text-lighten-2">Esqueceu a senha?</router-link>
      </div>

    </span>
    <button type="submit" class='btn waves-effect waves-light align-center'>Entrar</button>
  </div>
</template>

<script>
export default {};
</script>

<style >
.container{
    display:flex;
    flex-direction: column;
    justify-content: space-between !important;
    min-height: 80vh;
}
.btn{
    display:block !important;
    margin: 0 !important;
    width: 100%;
}

</style>