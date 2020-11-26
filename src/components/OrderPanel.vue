<template>
<p>{{ campsitename }}</p>
<p>{{ placename }}</p>
  <div class="panel">
  <div class="field">
  <div class="control">
  <div class="select is-primary">
  <form class="form-class" action="">
      <select id="drop-down">
        <option>Select dropdown</option>
        <option>With options</option> 
      </select>
      <div class="date-wrapper"> 
      <label for="date-selctor">Frá: </label>
      <input type="date" id="date-selector" name="date-select">
      <label for="date-selector-2"> Til: </label>
      <input type="date" id="date-selector-2" name="date-select">     
      </div>
      <input id="form-submit" type="submit" value="Panta">
</form>
    </div>
  </div>
  </div>
  </div>
</template>

<script>

export default {
  props:["campsitename","placename"],
  data() {

  },
  mounted() {
  },

  methods: {
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
</style>



