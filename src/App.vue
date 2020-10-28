<!--npm run dev-->

<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import navbar from "./components/navbar"

export default {
  name: 'App',
  components: {
    navbar
  },
}
</script>

<style>
  body{
    margin: 0 auto;
    background-color: #e6e6e6;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
