<template>
  <div class="container d-flex">
    <h3 class="center-align">Registrar</h3>
    <span>
      <div class="input-field">
        <input id="user" type="text" class="validate" />
        <label for="user">Digite seu usuário</label>
      </div>
      <div class="input-field">
        <input id="user" type="email" class="validate" />
        <label for="user">Digite seu email</label>
      </div>
      <div class="input-field">
        <input id="password" type="password" class="validate" />
        <label for="password">Digite sua senha</label>
      </div>
      <div class="input-field">
        <input id="password2" type="password" class="validate" />
        <label for="password2">Digite sua senha novamente</label>
        <router-link to='login' class="helper-text teal-text text-lighten-2">Já possui uma conta?</router-link>
      </div>

    </span>
    <button type="submit" class='btn waves-effect waves-light align-center'>Entrar</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>