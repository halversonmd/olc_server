let OpenLocationCode = require('./openlocationcode.js')
let gmaps = require('./gmaps.js')
let api = require('../../src/api.js').default

class MapControl {
    constructor() {
      this.poly = new google.maps.Rectangle()
      this.marker = new google.maps.Marker()
      this.shapes = []
      this.grid = []
      this.clickedCodes = {}
      this.olcSizes = {
        2: {h: 2226389.8, w: 1925641.3},
        4: {h: 111319.5, w: 74486.8},
        6: {h: 5000, w: 4000},
        8: {h: 220, w: 210},
        10: {h: 12, w: 15}
      }
    }
    newMap(elemId) {
      var initMap = new google.maps.Map(document.getElementById(elemId), {
          center: new google.maps.LatLng(40.742192046649755, -73.99111747741699),
          zoom: 11,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          scaleControl: true});
      initMap.setTilt(0);
      this.globalMap = initMap
    }
    clearPoly() {
      this.poly.setMap(null);
    }
    plotList(codes, coords) {
      for (var i=0; i<codes.length; i++){
        var code = codes[i]
        var codeAreac = OpenLocationCode.decode(code);
        var newBoundc = new google.maps.LatLngBounds(
          new google.maps.LatLng(codeAreac.latitudeLo, codeAreac.longitudeLo),
          new google.maps.LatLng(codeAreac.latitudeHi, codeAreac.longitudeHi));
        var poly = new google.maps.Rectangle({
          map: this.globalMap,
          bounds: newBoundc,
          strokeColor: '#000000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#e51c23',
          fillOpacity: 0.6,
          clickable: false
        });
      }
      for (var i=0; i<coords.length; i++){
        var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        var centerMarc = new google.maps.Marker({
            position: {lat: parseFloat(coords[i][0]), lng: parseFloat(coords[i][1])},
            map: this.globalMap,
            icon: image
          });
      }
    }
    placeMarkerAndPanTo(latLng, olc_size) {
      var currentCode = OpenLocationCode.encode(latLng.lat(), latLng.lng(), olc_size);
      if (this.clickedCodes.hasOwnProperty(currentCode)){
        this.clickedCodes[currentCode].setMap(null)
        delete this.clickedCodes[currentCode]
      } else {
        var codeAreac = OpenLocationCode.decode(currentCode);
        var newBoundc = new google.maps.LatLngBounds(
          new google.maps.LatLng(codeAreac.latitudeLo, codeAreac.longitudeLo),
          new google.maps.LatLng(codeAreac.latitudeHi, codeAreac.longitudeHi));
        var height = google.maps.geometry.spherical.computeDistanceBetween(
          new google.maps.LatLng(codeAreac.latitudeLo, codeAreac.longitudeLo),
          new google.maps.LatLng(codeAreac.latitudeHi, codeAreac.longitudeLo));
        height = Math.round(height * 10) / 10;
        var width = google.maps.geometry.spherical.computeDistanceBetween(
          new google.maps.LatLng(codeAreac.latitudeLo, codeAreac.longitudeLo),
          new google.maps.LatLng(codeAreac.latitudeLo, codeAreac.longitudeHi));
        width = Math.round(width * 10) / 10;
        var poly = new google.maps.Rectangle({
          map: this.globalMap,
          bounds: newBoundc,
          strokeColor: '#000000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#e51c23',
          fillOpacity: 0.6,
          clickable: false
        });
        this.clickedCodes[currentCode] = poly
      }
      self.lat = latLng.lat();
      self.lon = latLng.lng();
      self.currentCode = currentCode;
    }
    olcText(codes) {
      if (codes != undefined){
        return codes.join('\n')
      } else {
        return Object.keys(this.clickedCodes).join('\n')
      }
    }
    clear () {
      this.shapes.forEach( (shape) => {
        shape.setMap(null)
      })
      let clickedOlcs = Object.keys(this.clickedCodes)
      clickedOlcs.forEach( (shape) => {
        this.clickedCodes[shape].setMap(null)
      })
      this.shapes = []
      this.clickedCodes = {}
    }
    drawGrid (olcSize) {
      this.shapes.forEach( (shape) => {
        shape.setMap(null)
      })
      this.shapes = []
      var size = parseInt(olcSize)
      var bounds = this.globalMap.getBounds()
      var lat0 = bounds.getNorthEast().lat();
      var lng0 = bounds.getNorthEast().lng();
      var lat1 = bounds.getSouthWest().lat();
      var lng1 = bounds.getSouthWest().lng();
      var height = google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(lat0, lng0),
        new google.maps.LatLng(lat0, lng1))
      height = Math.round(height * 5);
      var width = google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(lat0, lng1),
        new google.maps.LatLng(lat1, lng1))
      width = Math.round(width * 5);
      var olcWidth = width / this.olcSizes[size].w
      olcWidth = Math.round(olcWidth);
      var olcHeight = height / this.olcSizes[size].h
      olcHeight = Math.round(olcHeight);
      var olcArr = [OpenLocationCode.encode(lat0, lng1, size)]
      for (var i = 0; i < olcWidth; i++){
        for (var j = 0; j < olcHeight; j++){
          var lastCode = OpenLocationCode.decode(olcArr.slice(-1)[0])
          var midLat = lastCode.latitudeHi - ((lastCode.latitudeHi-lastCode.latitudeLo)/2)
          var midLon = lastCode.longitudeHi + ((lastCode.longitudeHi-lastCode.longitudeLo)/2)
          if (j == 0) {
            var lastRowStart = olcArr.slice(-1)[0]
          }
          olcArr.push(OpenLocationCode.encode(midLat, midLon, size))
        }
        if (i == olcWidth-1) {
          { break; }
        } else {
          var lastCode = OpenLocationCode.decode(lastRowStart)
          var midLat = lastCode.latitudeLo - ((lastCode.latitudeHi-lastCode.latitudeLo)/2)
          var midLon = lastCode.longitudeHi - ((lastCode.longitudeHi-lastCode.longitudeLo)/2)
          olcArr.push(OpenLocationCode.encode(midLat, midLon, size))
        }
      }
      for (var i=0; i<olcArr.length; ++i){
        var code = OpenLocationCode.decode(olcArr[i])
        var newBound = new google.maps.LatLngBounds(
            new google.maps.LatLng(code.latitudeLo, code.longitudeLo),
            new google.maps.LatLng(code.latitudeHi, code.longitudeHi));

        var poly = new google.maps.Rectangle({
          map: this.globalMap,
          bounds: newBound,
          strokeColor: '#000000',
          strokeOpacity: 0.2,
          strokeWeight: 1,
          fillColor: '#e51c23',
          fillOpacity: 0.0,
          clickable: false
        });
        this.shapes.push(poly)
      }
    }
    async loadOlc(latLng, rad, size) {
      if (latLng == undefined) {
        var lat = 40.742192046649755
        var lon = -73.99111747741699
        var rad = 5
        var size = 6
      } else {
        var lat = latLng.lat()
        var lon = latLng.lng()
      }
      const resp = await api.getOlcs(lat, lon, rad, size)
      for (var i = 0; i<this.shapes.length; i++){
        this.shapes[i].setMap(null);
      }
      for (var i=0; i<resp.olcCodes.length; ++i){
        var codeArea = OpenLocationCode.decode(resp.olcCodes[i]);
        var newBound = new google.maps.LatLngBounds(
            new google.maps.LatLng(codeArea.latitudeLo, codeArea.longitudeLo),
            new google.maps.LatLng(codeArea.latitudeHi, codeArea.longitudeHi));
        var poly = new google.maps.Rectangle({
          map: this.globalMap,
          bounds: newBound,
          strokeColor: '#000000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#e51c23',
          fillOpacity: 0.6,
          clickable: false
        });
        this.shapes.push(poly)
      };
      for (var i=0; i<resp.pois.length; ++i){
        var myLat = parseFloat(resp.pois[i][0])
        var myLon = parseFloat(resp.pois[i][1])
        var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        var centerMarc = new google.maps.Marker({
            position: {lat: myLat, lng: myLon},
            map: this.globalMap,
            icon: image
          });
        var circleCenter1 = new google.maps.LatLng(myLat, myLon)
        var cityCircle = new google.maps.Circle({
          strokeColor: '#0000FF',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#0000FF',
          fillOpacity: 0.5,
          map: this.globalMap,
          center: circleCenter1,
          radius: rad*1609.34 //meters
        });
        this.shapes.push(cityCircle)
        this.shapes.push(centerMarc)
      }
      this.shapes = []
    }
    refreshPage() {
      window.location.reload()
    }
    clickData() {
      return {
        lat: self.lat,
        lon: self.lon,
        olcCode: self.currentCode
      }
    }
  }


export default MapControl;