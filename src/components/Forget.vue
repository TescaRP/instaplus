<template>
  <div class="display">
    <router-link  :to="{ name:'Inicio' }"><i class="material-icons small left-align">arrow_back</i></router-link>
    <inicial v-if='estagio == 0'  />
    <segundo v-if='estagio == 1'  />
    <terceiro v-if='estagio == 2'  />
    <button type="submit" @click='avancar' class='btn waves-effect waves-light align-center'>{{input[this.estagio]}}</button>
  </div>
</template>

<script>
import inicial from './forget/inicial.vue';
import segundo from './forget/segundo.vue';
import terceiro from './forget/terceiro.vue';

export default {
  components:{
    inicial,
    segundo,
    terceiro
  },
  data(){
    return{
      estagio: 0,
      input : [
      'Enviar email',
      'Enviar código',
      'Resetar senha'
    ]
    }
  },
  methods:{
    avancar: function() {
      if(this.estagio != 2)
      this.estagio++;
      else
       this.$router.push({name: 'Login'})
    },
    retroceder: function(){
      this.estagio--
    }

  }
}
</script>

<style scoped>
.align-center{
  font-size: 16px;
}

.display{
  text-align: center
}

a{
  display: block;
  text-align: left;
}
</style>