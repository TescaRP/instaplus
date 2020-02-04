<template>
  <div class="container ">
    <div class='row'>
      <div class="s ">
        <div class="card z-depth-3 ">
          <div class="card-content white-text">
            <span class="card-title">Insta+</span>
            <form action="#" method="post">
              <div class='input-field'>
                <label for="nome">Usuário</label>
                <input type="text" name="nome" id="nome" />
              </div>
              <div class='input-field'>
                <label for="nome">Senha</label>
                <input type="text" name="nome" id="nome" />
              </div>
              <div class='input-field'>
                <label>
                  <input type="checkbox" name="" id="">
                  <span>Lembrar login</span>
                </label>

              </div>
            </form>
          </div>
          <div class="card-action right-align">
            <router-link to='/register' class="waves-effect waves-light btn">Registrar</router-link>
            
            <a class="waves-effect waves-light btn">Logar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  
.card{
  margin-top: 25%;
}
  .card-action {
    height: 100%;
    border-radius: 1rem !important;
  }

  .card-title {
    text-transform: uppercase;
    font-weight: bolder !important;

  }

  .card-content {
    height: 270px;
  }

  label {
    color: rgb(185, 185, 185) !important;
  }

  input {
    color: white;
  }

  a:last-child{
    background-color: #00695c  !important;
  }
  a:first-child{
    background-color: white;
    color: black;
  }

  a{
    font-weight: bolder;
  }



 


</style>