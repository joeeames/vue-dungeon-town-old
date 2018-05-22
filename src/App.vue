<template>
  <div id="app">
    <a href="#/town">Go to town</a>
    <a href="/">Home</a>
    <game/>
    <router-view/>
  </div>
</template>

<script>
import game from './game/Game.vue'

export default {
  name: 'App',
  components: { game }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
