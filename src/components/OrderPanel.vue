<template>

<form class="form-class" action="">
      <div class="date-wrapper"> 
      <label for="date-selctor">Frá: </label>
      <input type="date" id="date-selector" name="date-select">
      <label for="date-selector-2"> Til: </label>
      <input type="date" id="date-selector-2" name="date-select">     
      </div>
      <div class="info-wraper">
        <p>Staður:</p> <p id="placename"></p>
      </div>
      <div class="info-wraper">
        <p>Tjaldsvæði: </p><p id="campsitename"></p>
      </div>
      <div class="info-wraper">
        <p>Valin punktur:</p> <p id="pointname"></p>
      </div>

      

</form>
<button @click="confirmorder">Panta</button>
</template>

<script>

export default {

  data() {

  },
  mounted() {
  },

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
>
<style>
.form-class{
  display: grid;
  grid-template-areas:"data2"  
  "data1 "
  "select"
  "submit";
  justify-items: start;
}

#date-selector{
  grid-area: data1;

}

#data-selector-2{
  grid-area: data2;
}

#drop-down{
  grid-area: select;
  margin-top: 5px;
  margin-bottom: 5px;
  display: inline-block;
}
#form-submit{
  grid-area: submit;
  display: inline-block;
}
.date-wraper{
  display: flex;
  justify-self: flex-start;
}
.info-wraper{
  display: flex;
}
</style>



