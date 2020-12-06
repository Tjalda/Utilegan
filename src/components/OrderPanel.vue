<template>

<form class="form-class" action="">
      <div class="date-wrapper"> 
        <label for="date-selctor">Frá: </label>
        <input type="date" id="date-selector" name="date-select">
        <label for="date-selector-2"> Til: </label>
        <input type="date" id="date-selector-2" name="date-select">     
      </div>
      <p><b>Staður:</b></p> 
      <p id="placename"></p>

      <p><b>Tjaldsvæði:</b></p>
      <p id="campsitename"></p>

      <p><b>Valin punktur:</b></p>
      <p id="pointname"></p>

      

</form>
<button @click="confirmorder">Panta</button>
</template>

<script>

export default {

  methods: {
    confirmorder(){
      let placename =  document.getElementById("placename").innerText;
      let campsitename  =  document.getElementById("campsitename").innerText;
      let pointname =  document.getElementById("pointname").innerText;
      console.log(placename, campsitename, pointname);
    }

  }
}
</script>

<style scoped>
    p{
      padding: 0;
    }
    button {
        background-color: #7c66ad;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
        font-weight: bold;
    }
    @media screen and (min-width: 37.5em){ 
        button { 
            width: 150px;
        } 
    }
</style>



