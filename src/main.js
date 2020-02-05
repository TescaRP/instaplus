import Vue from 'vue'
import App from './App.vue'
import router from './router';
import materialize from 'materialize-css/dist/css/materialize.min.css';
import materializeJS from 'materialize-css/dist/js/materialize';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
