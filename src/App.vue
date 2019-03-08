<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>What is your favorite CSS reference?</h1>
    <search-ui/>
  </div>
</template>

<script>
import SearchUi from './components/SearchUi'

export default {
  name: 'App',
  components: {
    SearchUi
  }
}
</script>

<style>
body {
  font-family: sans-serif;
  padding: 1em;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h1 {
  left: 125px;
  position: absolute;
  top: 25px;
}
img {
  width: 80px;
  margin-bottom: 20px;
}
</style>
