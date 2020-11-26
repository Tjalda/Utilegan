<template>
<div class="forsida">
    <h1>Forsíða</h1>
    <div class="forsida-Wraper">
        <div class="Panel"><Panel :campsitename="campsitename" :placename="placename"/></div>
        <div class="Map"><Map :campsitname="campsitename" :placename="placename"/> </div>
        
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
            campsitename:"",
            placename:"",
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