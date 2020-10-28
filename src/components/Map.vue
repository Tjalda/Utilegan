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
    this.createMap();
    this.createPoints(this.map);
  },

  methods: {
    createMap() {
      mapboxgl.accessToken = this.accessToken;
      this.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/smarihot/ckgi0gmza3ioq1ar1e6sl27kz",
        zoom: 4.58,
        center: [-17.786, 64.806],
      });
    },
    createPoints(Map_) {
      Map_.on("click", function (e) {
        let features = Map_.queryRenderedFeatures(e.point, {
          layers: ["island-points"],
          maxzoom: 16,
        }); //sækja points í layerinum fra mapbox
        if (!features.length) {
          //failsave ef það eru engir punktar
          return;
        }
        
        let feature = features[0]; // puntkanir
        let points = feature.geometry.coordinates
        console.log(feature.geometry.coordinates);
        Map_.flyTo({
          // These options control the ending camera position: centered at
          // the target, at zoom level 9, and north up.
          center: points,
          zoom: 15,
          bearing: 0,

          // These options control the flight curve, making it move
          // slowly and zoom out almost completely before starting
          // to pan.
          speed: 2, // make the flying slow
          curve: 1, // change the speed at which it zooms out

          // This can be any easing function: it takes a number between
          // 0 and 1 and returns another number between 0 and 1.
          easing: function (t) {
            return t;
          },

          // this animation is considered essential with respect to prefers-reduced-motion
          essential: true,
        });
      });
    },
  },
};
</script>

<style>
#map {
  width: 100%;
  height: 50vh;
}
</style>



.flyTo({center: [-74.5 + (Math.random() - 0.5) * 10,40 + (Math.random() - 0.5) * 10],
essential: true});