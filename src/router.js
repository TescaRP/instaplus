import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/Login';
import Inicio from './components/Inicio';
import Register from './components/Register';

Vue.use(Router);

const router = new Router({
    routes: [{
        path: "/",
        component: Inicio
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/register",
        component: Register
    },
    {
        path: "*",
        component: Login
    }],
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    if (to.path == '/')
        console.log('/');

    next();
})

export default router;