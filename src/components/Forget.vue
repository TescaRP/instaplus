<template>
  <div class="display">
    <inicial v-if='estagio == 0'  />
    <segundo v-if='estagio == 1'  />
    <terceiro v-if='estagio == 2'  />
    <button type="submit" :click='avancar' class='btn waves-effect waves-light align-center'>Enviar</button>
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
      estagio: 0
    }
  },
  methods:{
    avancar: function() {
      this.estagio++;
    },
    retroceder: function(){
      this.estagio--
    }

  }
}
</script>

<style scoped>
.center-align{
  font-size: 16px;
}
</style>