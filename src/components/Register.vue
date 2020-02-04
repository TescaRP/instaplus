<template>
    <div class="container">
        <div class="row">
            <div class="col s12 m8 offset-m2">
                <div class="card z-depth-3 ">
                    <div class="card-content white-text">
                        <span class="card-title">Insta+</span>
                        <form action="#" method="post">
                            <div class='input-field'>
                                <label for="nome">Usuário</label>
                                <input type="text" name="nome" id="nome" />
                            </div>
                            <div class='input-field'>
                                <label for="nome">Email</label>
                                <input type="email" name="nome" id="nome" />
                            </div>
                            <div class='input-field'>
                                <label for="nome">Senha</label>
                                <input type="password" name="nome" id="nome" />
                            </div>
                            <div class='input-field'>
                                <label for="nome">Senha</label>
                                <input type="password" name="nome" id="nome" />
                            </div>
                            <div class='input-field'>
                                <label>
                                    <input type="checkbox" name="" id="">
                                    <span>Aceito os <a href="#">termos</a></span>
                                </label>

                            </div>
                        </form>
                    </div>
                    <div class="card-action right-align">
                        <a class="waves-effect waves-light btn">Registrar</a>
                        <router-link to='/login' class="waves-effect waves-light btn">Logar</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .card {
        border-radius: 1rem !important;
        background-color: rgb(28, 139, 130) !important;
    }

    a {
        cursor: pointer;
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
        height: 400px;
    }

    label {
        color: rgb(185, 185, 185) !important;
    }

    input {
        color: white;
    }

    .card-action a:last-child {
        background-color: #00695c !important;
    }

    .card-action a:first-child {
        background-color: white;
        color: black;
    }

    .card-action a {
        font-weight: bolder;
    }
</style>