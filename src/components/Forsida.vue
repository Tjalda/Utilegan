<template>
<div class="forsida">
    <h1>Forsíða</h1>
    <div class="forsida-Wraper">
        <div class="Panel"><Panel/></div>
        <div class="Map"><Map/> </div>
        
    </div>
</div>
</template>

<script>
import Map from "../components/Map.vue"
import Panel from "../components/OrderPanel.vue"

export default {
    components: { Map, Panel },
    data(){
        return{
        } 
    }
}

</script>

<style scoped>
    .map{
        max-width: 500px;
        max-height: 800px;
        padding: 10px;
       
    }
    .panel{
        max-width: 500px;
        max-height: 800px;
        padding: 10px;
    }
    .forsida-Wraper{
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 15px;
    }
     h1{
     text-align: center;
 }
  
</style>