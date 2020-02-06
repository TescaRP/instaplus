import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/Login';
import Inicio from './components/Inicio';
import Register from './components/Register';

Vue.use(Router);

const router = new Router({
    routes: [{
        path: "",
        component: Inicio,
        name:"Inicio"
    },
    {
        path: "/login",
        component: Login,
        name:"login"
    },
    {
        path: "/register",
        component: Register,
        name:"register"
    },
    {
        path: "*",
        component: Login,
    }],
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    // if (to.path == '/')
        //todo verificar se possui token (está logado) se não, manda para /login

    next();
})

export default router;