import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio';
import Login from './components/Login';
// import NotFound from './components/NotFound';

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
        criaRota('*','NotFound','NotFound')
    ],
    mode: "history"
});

router.beforeEach((to, from, next) => {
    if(to.name == "Inicio")
        next('/login')
    
    next();
});

export default router;

function criaRota(caminho='', component='', nome='', auth=false){
    import NotFound from ("./components/NotFound");
    return {path: caminho, component: NotFound, name: nome, auth}
}