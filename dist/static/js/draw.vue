<template>
  <b-container class="bv-example-row bv-example-row-flex-cols">
    <b-row class="py-2">
      <p>
        Select an OLC size below and click around the map.
      </p>
    </b-row>
    <b-row class="py-2">
      <b-col align-self="center" cols="4">
        <h3>Size</h3>
        <input type="radio" id="ten" value="10" v-model="olcSize" v-on:change='drawGrid'>
        <label for="ten">5</label>
        <input type="radio" id="eight" value="8" v-model="olcSize" v-on:change='drawGrid'>
        <label for="eight">8</label>
        <input type="radio" id="six" value="6" v-model="olcSize" v-on:change='drawGrid'>
        <label for="six">6</label>
        <input type="radio" id="four" value="4" v-model="olcSize" v-on:change='drawGrid'>
        <label for="four">4</label>
        <input type="radio" id="two" value="2" v-model="olcSize" v-on:change='drawGrid'>
        <label for="two">2</label>
      </b-col>
    </b-row>

    <b-row class="py-2">
      <b-col>
        <div id="map-canvas" style="height: 500px; width: 700px"></div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

let MapControl = require('../../static/js/mapControl').default

let mapCtl = new MapControl()

export default {
  created: async () => {
    mapCtl.globalMap = await document.getElementById('map-canvas')
    mapCtl.newMap()
  },
  name: 'olcMap',
  data () {
    return {
      olcSize: false,
      map: null,
      selectOlcAlert: false,
      radius: '5',
      clickedData: {
        lat: '',
        lon: '',
        olcCode: ''
      }
    }
  },
  methods: {
    async loadMap () {
      mapCtl.loadOlc(this.radius, this.olcSize)
    },
    loadClickData () {
      this.clickedData = mapCtl.clickData()
    },
    drawGrid () {
      mapCtl.drawGrid(this.olcSize)
    }
  },
  mounted: async function () {
    this.map = await mapCtl
    let _thisVue = this
    this.map.globalMap.addListener('click', (e) => {
      if (_thisVue.olcSize) {
        // mapCtl.placeMarkerAndPanTo(e.latLng, _thisVue.olcSize)
        mapCtl.loadOlc(e.latLng, _thisVue.radius, _thisVue.olcSize)
        _thisVue.loadClickData()
      } else {
        _thisVue.selectOlcAlert = true
      }
    })
  }
}

</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
