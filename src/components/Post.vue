<template>
  <div class="container">
    <router-link to="#">
      <div class="header">
        <img src="https://picsum.photos/100/100" width="15%" class="circle" alt="#" />
        <p class="username">Gabriel Rodrigues</p>
      </div>
    </router-link>
    <div class="img">
      <img src="https://picsum.photos/200/200" class="img-post"  @dblclick="likeImg"/>
      <img src="https://i.ya-webdesign.com/images/cartoon-heart-png.png" width='50%' class='img-like' :class='classAtiva' alt="">
    </div>
    <p class="descricao">Imagine uma descrição top aqui</p>
    <div class="footer">
      <i
        class="material-icons"
        id="btnLike"
        @click="likeImg"
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
      like: false,
      classAtiva: 'img-like'
    };
  },
  methods:{
    likeImg: function(){
      this.like = !this.like;
      this.classAtiva = 'img-like-active'

      setInterval(() => {
        this.classAtiva = 'img-like-deactive'
      }, 600);

    }
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

.img{
  position:relative;
}

.img-post {
  width: 100%;
  height: 40%;
}

.img-like{
  position:absolute;
  left: 25%;
  top: 25%;
  opacity: 0;
}

.img-like-active{
  opacity: 0.8;
  transition: opacity 1s;
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

i{
  cursor: pointer;
}
</style>