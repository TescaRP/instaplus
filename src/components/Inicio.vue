<template>
  <div>
    <div class="search input-field">
      <i class="material-icons">search</i>
      <input type="text" name="search" id="search" placeholder="Pesquisa" />
    </div>
    <section>
      <Post />
    </section>
  </div>
</template>

<script>
import Post from "./Post.vue";
export default {
  components: {
    Post
  }
};
</script>

<style scoped>
section {
  margin-top: 5%;
}

input#search {
  font-size: 16px !important;
  height: 20% !important;
  color: white;
  border-bottom: none !important;
  box-shadow: none !important;
}

input#search:focus {
  border-bottom: none !important;
  box-shadow: none !important;
}
div.search {
  margin-top: 0;
  padding-top: 0;
  color: white;
  background-color: #2bb4ac;
  display: flex;
  align-items: center;
  align-content: center;
}
</style>