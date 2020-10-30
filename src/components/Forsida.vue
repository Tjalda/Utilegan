<template>
<div>
    <h1>Forsíða</h1>
    <div class="Map"><Map/></div>
</div>
</template>

<script>
import Map from "../components/Map.vue"

export default {
  components: { Map }
}
</script>

<style scoped>
    .map{
        max-width: 500px;
        max-height: 800px;
    }
</style>