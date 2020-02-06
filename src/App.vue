<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Comfortaa&display=swap" rel="stylesheet">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
*{
  font-family: 'Comfortaa', Helvetica, sans-serif;
}
html{
  height: 100%;
}

div#app{
  width: 100%;
  height: 100%;
}
</style>
