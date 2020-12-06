<template>
  <div class="map">
    <div id="map"></div>
    
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  data() {
    return {
      accessToken:
        "pk.eyJ1Ijoic21hcmlob3QiLCJhIjoiY2tnaHRnOXE2MDEwZzJzcXJ1MnpqeDJkcSJ9.J5R3JmyxP4K8QkM42WBmjA",
      map: {},
    };
  },
  mounted() {
    this.createMap();//renderar mappið eftir að map divið er búið til í vue
    this.createPoints(this.map);// setur functionality á merkinganr og punktana á kortinu
    //this.compairPoints(this.map);
  },

  methods: {
    createMap() {
      mapboxgl.accessToken = this.accessToken;
      this.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/smarihot/ckgi0gmza3ioq1ar1e6sl27kz",// sækir útlitið á kortinu fra mapbox api
        zoom: 4.58,//byrjunar stylling á zoominu á mappinu
        center: [-17.786, 64.806],//byrjunar stilling á hvernig mapið er senterað
      });
    },
    createPoints(Map_) {
      let ref = this; // veit ekki hvað þessi gerir en hann lagara allt.
      let booked = ["a1"];
      Map_.on("click", function (e) {
        let features = Map_.queryRenderedFeatures(e.point, {
          layers: ["island-points", "ak-tjaldsvadi-1"],
          maxzoom: 16,
        });
        //sækja points í layerinum fra mapbox
        if (!features.length) {
          //failsave ef það eru engir punktar
          return;
        }
        
        
        let feature = features[0]; // puntkanir
        let points = feature.geometry.coordinates

        if (feature.sourceLayer == "island_points") {//ef það er ítt á rauða hnappana þá fer þessi function i gang              
            Map_.flyTo({
              center: points,
              zoom: 18,
              bearing: 0,
              speed: 2, // make the flying slow
              curve: 1, // change the speed at which it zooms out
              easing: function (t) {
                return t;// veit ekki hvað þetta gerir 
              },
              essential: true,
            });
        }
        if (feature.sourceLayer == "ak-points" && ref.compairPoints(feature.properties.Point_name, booked) != false){//þetta funcrion runnar ef það er ýtt á bláu punktana.
          let pointname = feature.properties.Point_name;   
          console.log(feature);  
          let popup = new mapboxgl.Popup({offset: [0, -15]})
          .setLngLat(feature.geometry.coordinates)//býr til nýjan glugga frá punktinum sem var ítt á og fillir hann af html
          .setHTML(`<button id="takki">Panta</button>`)
          .addTo(Map_);
          document.getElementById("takki").addEventListener('click', function(){ ref.submitinfo("Akureyri", "Hamar", pointname);}, false);
          
        }


      });
   
    },
    compairPoints(point_name, booked){//point_value, map, features){
      for (let index = 0; index < booked.length; index++) {
        let element = booked[index];
        if (element == point_name) {
          console.log("pantað")
          return false;
        }

      }
    },
    submitinfo(placename, campsitename, pointname){
      document.getElementById("placename").innerHTML = placename;
      document.getElementById("campsitename").innerHTML = campsitename ;
      document.getElementById("pointname").innerHTML = pointname ;
    }
    

  
  },
  
  
  
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 50vh;
}
</style>



