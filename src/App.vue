<template>
<div class="Map"><Map></Map></div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Map from "./components/Map.vue"

export default {
  name: 'App',
  components: {
    //HelloWorld,
    Map
  }
}
</script>

<style>
.map{
  max-width: 500px;
  max-height: 800px;
}
</style>
