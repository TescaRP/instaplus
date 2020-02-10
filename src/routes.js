import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Forget from './components/Forget';

Vue.use(Router);

const router = new Router({
    routes:[
        {
            path: "",
            component: Inicio,
            name:"Inicio",
            auth: true
        },
        {
            path: "/login",
            component: Login,
            name:"Login",
        },
        {
            path: "/forget",
            component: Forget,
            name:"Forget",
        },
        {
            path:"/register",
            component: Register,
            name: "Register"
        },
        {
            path:"*",
            component: NotFound,
            name: "NotFound"
        }
    ],
    mode: "history"
});

router.beforeEach((to, from, next) => {
    if(to.name == "Inicio")
        next('/login')
    
    next();
});

export default router;
