<template>
  <div class="container">
    <router-link to="#">
      <div class="header">
        <img src="https://picsum.photos/100/100" width="15%" class="circle" alt="#" />
        <p class="username">Gabriel Rodrigues</p>
      </div>
    </router-link>
    <img src="https://picsum.photos/200/200" class="img-post" />
    <p class="descricao">Imagine uma descrição top aqui</p>
    <div class="footer">
      <i
        class="material-icons"
        id="btnLike"
        @click="like = !like"
      >{{like==true ? 'favorite' : 'favorite_border'}}</i>
      <p>3 curtiram</p>
    </div>
  </div>
</template>

<script>
export default {
  // icone : favorite e favorite_border
  data() {
    return {
      like: false
    };
  },
  methods:{
    
  }
};
</script>

<style scoped>
p:first-child {
  display: inline;
}

.username {
  margin-left: 15px;
}

.header {
  display: flex;
  align-items: flex-end;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.img-post {
  width: 100%;
  height: 40%;
}

.descricao {
  margin-top: 0;
}

p:last-child {
  display: inline;
  margin: 0;
  margin-left: 10px;
}

.footer {
  display: flex;
  align-items: center;
  margin-bottom: 60px;
}
</style>