<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Comfortaa&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <div class="box row" style='min-height: 80vh;'>
      <div class="col s12 m6 offset-m3">
        <Header />
      <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
* {
  font-family: "Comfortaa", Helvetica, sans-serif;
}
html,
body {
  height: 100%;
  background-color: #E4FCFE;
}
.box{
  width: 100%;
  height: 100%;
}
</style>
