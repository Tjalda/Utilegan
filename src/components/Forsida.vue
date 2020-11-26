<template>
    <div class="content">
        <h1>Forsíða</h1>
        <hr>
        <div class="Map"><Map/></div>

        <hr>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt lacinia ex, et tristique arcu ultrices in. 
            Morbi sagittis velit nulla, sit amet cursus erat laoreet ut. Fusce bibendum orci eu elit viverra, non sollicitudin ipsum accumsan. 
            Integer commodo justo eget nunc facilisis tristique. Donec cursus urna in mauris sodales, vel placerat magna eleifend.<br><br> 
            Cras turpis erat, tempor et est id, ullamcorper malesuada velit. Pellentesque et velit sem.Nulla consectetur ullamcorper metus, in lobortis urna aliquam vitae. 
            Vivamus id ligula leo. Vestibulum ac malesuada nunc. Nam erat mi, condimentum ut sagittis quis, rhoncus dignissim sapien. Donec eros metus, feugiat vitae pulvinar et, rhoncus sed mauris. 
            Nulla id ultricies justo. Aliquam convallis egestas est, a semper magna placerat in. Morbi sed luctus justo. Praesent a odio at erat faucibus efficitur. Cras at enim urna. <br><br>
            Aliquam consequat id tellus eget varius. Ut ultricies, tortor id tincidunt ornare, enim ligula accumsan nulla, facilisis dapibus nibh dui et ante. 
            Quisque sed quam eu leo pretium pharetra vel non magna. Nunc eget efficitur elit, vitae congue velit. Praesent finibus enim nunc, vehicula eleifend velit dictum at. Nulla et interdum odio.
        </p>
    </div>
</template>

<script>
import Map from "../components/Map.vue"

export default {
  components: { Map }
}
</script>

<style scoped>
    .content{
        max-width: 75em;
        margin: 0 auto;
        background-color: white;
        text-align: left;
        padding: 3em;
        min-height: 40em;
        line-height: 1.5;
    }
    .map{
        max-width: 500px;
        max-height: 800px;
    }
    h1{
        margin-top: -10px;
    }
    p{ padding-top: 1em; }
</style>