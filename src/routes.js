import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio';
import Login from './components/Login';
import NotFound from './components/NotFound';

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
