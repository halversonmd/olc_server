webpackJsonp([1],{"1/oy":function(e,t){},"9M+g":function(e,t){},FflU:function(e,t){function a(e,t,a){this.latLng_=e,this.displayText_=t,this.className_="map_label",this.map_=a,this.div_=null,this.heightOffset_=0,this.widthOffset_=0,this.setMap(a)}a.prototype=new google.maps.OverlayView,a.prototype.onAdd=function(){var e=document.createElement("DIV");e.className=this.className_,e.innerHTML=this.displayText_,e.style.position="absolute",this.div_=e,this.getPanes().overlayLayer.appendChild(e),this.heightOffset_=this.div_.offsetHeight/2,this.widthOffset_=this.div_.offsetWidth/2},a.prototype.draw=function(){var e=this.getProjection().fromLatLngToDivPixel(this.latLng_);this.div_.style.left=e.x-this.widthOffset_+"px",this.div_.style.top=e.y-this.heightOffset_+"px"},a.prototype.onRemove=function(){this.div_.parentNode.removeChild(this.div_),this.div_=null}},Fssm:function(e,t,a){var n={"./cli":"znem","./cli.js":"znem","./json":"sXY0","./json.js":"sXY0"};function o(e){return a(i(e))}function i(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id="Fssm"},GfHa:function(e,t){},Id91:function(e,t){},Jmt5:function(e,t){},N7Ue:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=a("oQOm"),o=(a("FflU"),a("n5Qe").default);t.default=class{constructor(){this.poly=new google.maps.Rectangle,this.marker=new google.maps.Marker,this.shapes=[],this.grid=[],this.clickedCodes={},this.olcSizes={2:{h:2226389.8,w:1925641.3},4:{h:111319.5,w:74486.8},6:{h:5e3,w:4e3},8:{h:220,w:210},10:{h:12,w:15}}}newMap(e){var t=new google.maps.Map(document.getElementById(e),{center:new google.maps.LatLng(40.742192046649755,-73.99111747741699),zoom:11,mapTypeId:google.maps.MapTypeId.ROADMAP,scaleControl:!0});t.setTilt(0),this.globalMap=t}clearPoly(){this.poly.setMap(null)}plotList(e,t){for(var a=0;a<e.length;a++){var o=e[a],i=n.decode(o),r=new google.maps.LatLngBounds(new google.maps.LatLng(i.latitudeLo,i.longitudeLo),new google.maps.LatLng(i.latitudeHi,i.longitudeHi));new google.maps.Rectangle({map:this.globalMap,bounds:r,strokeColor:"#000000",strokeOpacity:.8,strokeWeight:2,fillColor:"#e51c23",fillOpacity:.6,clickable:!1})}for(a=0;a<t.length;a++)new google.maps.Marker({position:{lat:parseFloat(t[a][0]),lng:parseFloat(t[a][1])},map:this.globalMap,icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"})}placeMarkerAndPanTo(e,t){var a=n.encode(e.lat(),e.lng(),t);if(this.clickedCodes.hasOwnProperty(a))this.clickedCodes[a].setMap(null),delete this.clickedCodes[a];else{var o=n.decode(a),i=new google.maps.LatLngBounds(new google.maps.LatLng(o.latitudeLo,o.longitudeLo),new google.maps.LatLng(o.latitudeHi,o.longitudeHi)),r=google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(o.latitudeLo,o.longitudeLo),new google.maps.LatLng(o.latitudeHi,o.longitudeLo));r=Math.round(10*r)/10;var s=google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(o.latitudeLo,o.longitudeLo),new google.maps.LatLng(o.latitudeLo,o.longitudeHi));s=Math.round(10*s)/10;var l=new google.maps.Rectangle({map:this.globalMap,bounds:i,strokeColor:"#000000",strokeOpacity:.8,strokeWeight:2,fillColor:"#e51c23",fillOpacity:.6,clickable:!1});this.clickedCodes[a]=l}self.lat=e.lat(),self.lon=e.lng(),self.currentCode=a}olcText(e){return void 0!=e?e.join("\n"):Object.keys(this.clickedCodes).join("\n")}clear(){this.shapes.forEach(e=>{e.setMap(null)}),Object.keys(this.clickedCodes).forEach(e=>{this.clickedCodes[e].setMap(null)}),this.shapes=[],this.clickedCodes={}}drawGrid(e){this.shapes.forEach(e=>{e.setMap(null)}),this.shapes=[];var t=parseInt(e),a=this.globalMap.getBounds(),o=a.getNorthEast().lat(),i=a.getNorthEast().lng(),r=a.getSouthWest().lat(),s=a.getSouthWest().lng(),l=google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(o,i),new google.maps.LatLng(o,s));l=Math.round(5*l);var c=google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(o,s),new google.maps.LatLng(r,s)),u=(c=Math.round(5*c))/this.olcSizes[t].w;u=Math.round(u);var d=l/this.olcSizes[t].h;d=Math.round(d);for(var p=[n.encode(o,s,t)],h=0;h<u;h++){for(var g=0;g<d;g++){var f=(w=n.decode(p.slice(-1)[0])).latitudeHi-(w.latitudeHi-w.latitudeLo)/2,v=w.longitudeHi+(w.longitudeHi-w.longitudeLo)/2;if(0==g)var m=p.slice(-1)[0];p.push(n.encode(f,v,t))}if(h==u-1)break;var w;f=(w=n.decode(m)).latitudeLo-(w.latitudeHi-w.latitudeLo)/2,v=w.longitudeHi-(w.longitudeHi-w.longitudeLo)/2,p.push(n.encode(f,v,t))}for(h=0;h<p.length;++h){var b=n.decode(p[h]),C=new google.maps.LatLngBounds(new google.maps.LatLng(b.latitudeLo,b.longitudeLo),new google.maps.LatLng(b.latitudeHi,b.longitudeHi)),x=new google.maps.Rectangle({map:this.globalMap,bounds:C,strokeColor:"#000000",strokeOpacity:.2,strokeWeight:1,fillColor:"#e51c23",fillOpacity:0,clickable:!1});this.shapes.push(x)}}async loadOlc(e,t,a){if(void 0==e){var i=40.742192046649755,r=-73.99111747741699;t=5,a=6}else i=e.lat(),r=e.lng();const s=await o.getOlcs(i,r,t,a);for(var l=0;l<this.shapes.length;l++)this.shapes[l].setMap(null);for(l=0;l<s.olcCodes.length;++l){var c=n.decode(s.olcCodes[l]),u=new google.maps.LatLngBounds(new google.maps.LatLng(c.latitudeLo,c.longitudeLo),new google.maps.LatLng(c.latitudeHi,c.longitudeHi)),d=new google.maps.Rectangle({map:this.globalMap,bounds:u,strokeColor:"#000000",strokeOpacity:.8,strokeWeight:2,fillColor:"#e51c23",fillOpacity:.6,clickable:!1});this.shapes.push(d)}for(l=0;l<s.pois.length;++l){var p=parseFloat(s.pois[l][0]),h=parseFloat(s.pois[l][1]),g=new google.maps.Marker({position:{lat:p,lng:h},map:this.globalMap,icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}),f=new google.maps.LatLng(p,h),v=new google.maps.Circle({strokeColor:"#0000FF",strokeOpacity:.8,strokeWeight:2,fillColor:"#0000FF",fillOpacity:.5,map:this.globalMap,center:f,radius:1609.34*t});this.shapes.push(v),this.shapes.push(g)}this.shapes=[]}refreshPage(){window.location.reload()}clickData(){return{lat:self.lat,lon:self.lon,olcCode:self.currentCode}}}},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=a("7+uW"),i=a("Xxa5"),r=a.n(i),s=a("exGp"),l=a.n(s),c=this,u=new(0,a("N7Ue").default),d="map-canvas-overview",p={created:(n=l()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,document.getElementById(d);case 2:u.globalMap=e.sent,u.newMap(d);case 4:case"end":return e.stop()}},e,c)})),function(){return n.apply(this,arguments)}),name:"overview",data:function(){return{olcSize:!1,map:null,selectOlcAlert:!1,clickedData:{lat:"",lon:"",olcCode:""}}},methods:{loadMap:function(){var e=this;return l()(r.a.mark(function t(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:u.loadOlc();case 1:case"end":return e.stop()}},t,e)}))()},loadClickData:function(){this.clickedData=u.clickData()}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"bv-example-row bv-example-row-flex-cols"},[a("b-row",{staticClass:"py-2"},[a("b-col",{attrs:{cols:"10"}},[a("p",[e._v("\n        Open Location Codes (OLCs) are innovative geographical indentifiers, developed by Google engineers.  Physically, the are retangular geographical areas that cover the globe in a grid-like pattern.  They come in five different sizes and each OLC had a unique indentifier.  They are also known as "),a("a",{attrs:{href:"https://plus.codes/"}},[e._v("Plus Codes")]),e._v(".\n      ")]),e._v(" "),a("p",[e._v("\n        Click the button below and you will see a circle centered in Manhattan with a five mile radius and twelve OLC codes of length six that roughly correlate to the same area.  This is to illustrate how OLCs can be used in place of lat/longs with radius for local digital advertising.\n      ")])])],1),e._v(" "),a("b-row",{staticClass:"py-2"},[a("b-col",{attrs:{"align-self":"center",cols:"8"}},[a("button",{staticClass:"btn-primary sm",on:{click:e.loadMap}},[e._v("Show OLCs")])])],1),e._v(" "),a("b-row",{staticClass:"py-2"},[a("b-col",[a("div",{staticClass:"w-100",staticStyle:{height:"500px"},attrs:{id:"map-canvas-overview"}})])],1)],1)},staticRenderFns:[]};var g=a("VU/8")(p,h,!1,function(e){a("Qrpt")},"data-v-540fef7b",null).exports,f=a("c/Tr"),v=a.n(f),m=this,w=a("N7Ue").default,b=a("n5Qe").default,C=new w,x={created:function(){var e=l()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,document.getElementById("map-canvas-plot");case 2:C.globalMap=e.sent,C.newMap("map-canvas-plot");case 4:case"end":return e.stop()}},e,m)}));return function(){return e.apply(this,arguments)}}(),name:"olcMap",data:function(){return{olcSize:!1,map:null,olcText:"",uploadError:null,currentStatus:null,uploadFieldName:"olcs"}},computed:{isInitial:function(){return 0===this.currentStatus},isSaving:function(){return 1===this.currentStatus},isSuccess:function(){return 2===this.currentStatus},isFailed:function(){return 3===this.currentStatus}},methods:{reset:function(){this.currentStatus=0,this.uploadedFiles=[],this.uploadError=null},upload:function(e){var t=this;return l()(r.a.mark(function a(){var n;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.postOlcs(e);case 2:n=a.sent,C.plotList(n.olcCodes,n.pois),t.olcText=C.olcText(n.olcCodes);case 5:case"end":return a.stop()}},a,t)}))()},filesChange:function(e,t){var a=new FormData;t.length&&(v()(Array(t.length).keys()).map(function(e){a.append("olcFile",t[e])}),this.upload(a))}},mounted:function(){var e=l()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.reset();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},L={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"bv-example-row bv-example-row-flex-cols"},[a("b-row",{staticClass:"py-2"},[a("b-col",{attrs:{cols:"12"}},[a("p",[e._v("\n          Open Location Codes have several uses.  One of which is geotargeting digial media campaigns. AppNexus, when used as a DSP allows you to geo target campaigns with OLCs.  The two main benefits to geotargeting with OLCs are targeting custom geo boundaries and ensuring accurate location inventory.\n        ")]),e._v(" "),a("p",[e._v("\n          Upload a CSV file (two columns - latitude and longitude) to see what an address list with a five mile radius looks like as OLCs.  You can also use the generated OLCs to geotarget campaigns on AppNexus.\n        ")])])],1),e._v(" "),a("b-row",{staticClass:"py-2"},[a("b-col",{attrs:{"align-self":"center",cols:"8"}},[e.isInitial||e.isSaving?a("form",{attrs:{enctype:"multipart/form-data",novalidate:""}},[a("h1",[e._v("Upload Coords")]),e._v(" "),a("div",{staticClass:"dropbox"},[a("input",{staticClass:"input-file",attrs:{type:"file",multiple:"",name:e.uploadFieldName,disabled:e.isSaving,accept:"csv"},on:{change:function(t){e.filesChange(t.target.name,t.target.files)}}}),e._v(" "),e.isSaving?a("p",[e._v("\n                Uploading "+e._s(e.fileCount)+" files...\n              ")]):e._e()])]):e._e()])],1),e._v(" "),a("b-row",{staticClass:"py-2"},[a("b-col",[a("div",{staticClass:"w-100",staticStyle:{height:"500px"},attrs:{id:"map-canvas-plot"}})]),e._v(" "),a("b-col",{attrs:{cols:"3"}},[a("span",[e._v("New OLCs:")]),e._v(" "),a("b-form-textarea",{attrs:{disabled:!0,"max-rows":15},model:{value:e.olcText,callback:function(t){e.olcText=t},expression:"olcText"}})],1)],1)],1)},staticRenderFns:[]};var _=a("VU/8")(x,L,!1,function(e){a("Y/oU")},"data-v-8e5c8ee8",null).exports,y=this,O=new(0,a("N7Ue").default)("map-canvas-draw"),M={created:function(){var e=l()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,document.getElementById("map-canvas-draw");case 2:O.globalMap=e.sent,O.newMap("map-canvas-draw");case 4:case"end":return e.stop()}},e,y)}));return function(){return e.apply(this,arguments)}}(),name:"olcDraw",data:function(){return{olcSize:6,olcText:"",canDraw:!0,map:null,selectOlcAlert:!1,radius:"5",zoomSize:{2:4,4:6,6:11,8:15,10:19},clickedData:{lat:"",lon:"",olcCode:""}}},methods:{loadMap:function(){var e=this;return l()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:O.loadOlc(e.radius,e.olcSize);case 1:case"end":return t.stop()}},t,e)}))()},setCanDraw:function(){this.canDraw=this.map.globalMap.getZoom()>=this.zoomSize[this.olcSize]},clearMap:function(){O.clear(),this.olcText=""},loadOlcText:function(){this.olcText=O.olcText()},drawGrid:function(){this.canDraw&&O.drawGrid(this.olcSize)}},mounted:function(){var e=l()(r.a.mark(function e(){var t,a=this;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O;case 2:this.map=e.sent,t=this,this.map.globalMap.addListener("click",function(e){t.olcSize?(O.placeMarkerAndPanTo(e.latLng,t.olcSize),t.loadOlcText()):t.selectOlcAlert=!0}),this.map.globalMap.addListener("bounds_changed",function(){t.canDraw=a.map.globalMap.getZoom()>=t.zoomSize[t.olcSize]});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},k={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"bv-example-row bv-example-row-flex-cols"},[a("b-row",{staticClass:"py-2",attrs:{"align-self":"center"}},[a("b-col",{attrs:{cols:"12"}},[a("p",[e._v("\n        Click around the map below to create custom geo boundaries using OLCs with various sizes.  The codes you choose will appear in the adjacent text box.\n      ")])])],1),e._v(" "),a("b-row",{staticClass:"py-2"},[a("b-col",{attrs:{cols:"6"}},[a("p",[a("b",[e._v("OLC Size:")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.olcSize,expression:"olcSize"}],attrs:{type:"radio",id:"ten",value:"10"},domProps:{checked:e._q(e.olcSize,"10")},on:{change:[function(t){e.olcSize="10"},e.setCanDraw]}}),e._v(" "),a("label",{attrs:{for:"ten"}},[e._v("10")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.olcSize,expression:"olcSize"}],attrs:{type:"radio",id:"eight",value:"8"},domProps:{checked:e._q(e.olcSize,"8")},on:{change:[function(t){e.olcSize="8"},e.setCanDraw]}}),e._v(" "),a("label",{attrs:{for:"eight"}},[e._v("8")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.olcSize,expression:"olcSize"}],attrs:{type:"radio",id:"six",value:"6"},domProps:{checked:e._q(e.olcSize,"6")},on:{change:[function(t){e.olcSize="6"},e.setCanDraw]}}),e._v(" "),a("label",{attrs:{for:"six"}},[e._v("6")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.olcSize,expression:"olcSize"}],attrs:{type:"radio",id:"four",value:"4"},domProps:{checked:e._q(e.olcSize,"4")},on:{change:[function(t){e.olcSize="4"},e.setCanDraw]}}),e._v(" "),a("label",{attrs:{for:"four"}},[e._v("4")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.olcSize,expression:"olcSize"}],attrs:{type:"radio",id:"two",value:"2"},domProps:{checked:e._q(e.olcSize,"2")},on:{change:[function(t){e.olcSize="2"},e.setCanDraw]}}),e._v(" "),a("label",{attrs:{for:"two"}},[e._v("2")])]),e._v(" "),a("b-col",{attrs:{"align-self":"center"}},[a("div",{staticClass:"my-3",attrs:{id:"redraw"}},[a("b-btn",{attrs:{disabled:!1===e.canDraw},on:{click:e.drawGrid}},[e._v("Draw Grid")]),e._v(" "),a("b-popover",{attrs:{target:"redraw",triggers:"hover",placement:"right",plaintext:"",disabled:!0===e.canDraw}},[e._v("\n             Zoom in or select different size\n      ")]),e._v(" "),a("b-btn",{on:{click:e.clearMap}},[e._v("Clear Map")])],1)])],1),e._v(" "),a("b-row",{staticClass:"py-2"},[a("b-col",[a("div",{staticClass:"w-100",staticStyle:{height:"500px"},attrs:{id:"map-canvas-draw"}})]),e._v(" "),a("b-col",{attrs:{cols:"3"}},[a("span",[e._v("Selected OLCs:")]),e._v(" "),a("b-form-textarea",{attrs:{disabled:!0,"max-rows":15},model:{value:e.olcText,callback:function(t){e.olcText=t},expression:"olcText"}})],1)],1)],1)},staticRenderFns:[]};var S={name:"olc",components:{draw:a("VU/8")(M,k,!1,function(e){a("Q4+s")},"data-v-5e01cb85",null).exports,olcOverview:g,plotPoi:_}},N={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"myolc"}},[t("b-tabs",[t("b-tab",{attrs:{title:"Overview",active:""}},[t("br"),this._v(" "),t("olcOverview")],1),this._v(" "),t("b-tab",{attrs:{title:"Convert"}},[t("br"),this._v(" "),t("plotPoi")],1),this._v(" "),t("b-tab",{attrs:{title:"Draw"}},[t("br"),this._v(" "),t("draw")],1)],1)],1)},staticRenderFns:[]};var z=a("VU/8")(S,N,!1,function(e){a("s03E")},null,null).exports,E=a("e6fC");a("Jmt5"),a("9M+g"),a("nAle"),a("eVIG");o.a.config.productionTip=!1,o.a.use(E.a),new o.a({el:"#olc",components:{App:z},template:"<App/>"})},"Q4+s":function(e,t){},Qrpt:function(e,t){},"Y/oU":function(e,t){},eVIG:function(e,t){},n5Qe:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("mtWM"),o=a.n(n).a.create({baseURL:"http://mhalverson.com/",json:!0});t.default={execute:function(e,t,a){return o({method:e,url:t,data:a}).then(function(e){return e.data})},getOlcs:function(e,t,a,n){var o="lat="+e+"&lon="+t+"&rad="+a+"&sz="+n;return this.execute("get","/api/olcCodes?"+o)},postOlcs:function(e){return this.execute("post","/api/olcCodes",e)},testGetOlcs:function(){return this.execute("get","/api/testOlcs")}}},nAle:function(e,t){},oQOm:function(e,t,a){var n,o,i,r;i=this,r=function(){var e={CODE_PRECISION_NORMAL:10,CODE_PRECISION_EXTRA:11},t="23456789CFGHJMPQRVWX",a=t.length,n=[20,1,.05,.0025,125e-6],o=(e.getAlphabet=function(){return t},e.isValid=function(e){if(!e||"string"!=typeof e)return!1;if(-1==e.indexOf("+"))return!1;if(e.indexOf("+")!=e.lastIndexOf("+"))return!1;if(1==e.length)return!1;if(e.indexOf("+")>8||e.indexOf("+")%2==1)return!1;if(e.indexOf("0")>-1){if(0==e.indexOf("0"))return!1;var a=e.match(new RegExp("(0+)","g"));if(a.length>1||a[0].length%2==1||a[0].length>6)return!1;if("+"!=e.charAt(e.length-1))return!1}if(e.length-e.indexOf("+")-1==1)return!1;for(var n=0,o=(e=e.replace(new RegExp("\\++"),"").replace(new RegExp("0+"),"")).length;n<o;n++){var i=e.charAt(n).toUpperCase();if("+"!=i&&-1==t.indexOf(i))return!1}return!0}),i=e.isShort=function(e){return!!o(e)&&(e.indexOf("+")>=0&&e.indexOf("+")<8)},r=e.isFull=function(e){if(!o(e))return!1;if(i(e))return!1;if(t.indexOf(e.charAt(0).toUpperCase())*a>=180)return!1;if(e.length>1&&t.indexOf(e.charAt(1).toUpperCase())*a>=360)return!1;return!0},s=e.encode=function(t,a,n){if(t=Number(t),a=Number(a),n=void 0===n?e.CODE_PRECISION_NORMAL:Number(n),isNaN(t)||isNaN(a)||isNaN(n))throw"ValueError: Parameters are not numbers";if(n<2||n<8&&n%2==1)throw"IllegalArgumentException: Invalid Open Location Code length";t=c(t),a=d(a),90==t&&(t-=u(n));var o=p(t,a,Math.min(n,10));return n>10&&(o+=h(t,a,n-10)),o},l=e.decode=function(e){if(!r(e))throw"IllegalArgumentException: Passed Open Location Code is not a valid full code: "+e;e=(e=(e=e.replace("+","")).replace(new RegExp("0+"),"")).toUpperCase();var t=g(e.substring(0,10));if(e.length<=10)return t;var a=v(e.substring(10));return m(t.latitudeLo+a.latitudeLo,t.longitudeLo+a.longitudeLo,t.latitudeLo+a.latitudeHi,t.longitudeLo+a.longitudeHi,t.codeLength+a.codeLength)},c=(e.recoverNearest=function(e,t,a){if(!i(e)){if(r(e))return e;throw"ValueError: Passed short code is not valid: "+e}if(t=Number(t),a=Number(a),isNaN(t)||isNaN(a))throw"ValueError: Reference position are not numbers";t=c(t),a=d(a);var n=8-(e=e.toUpperCase()).indexOf("+"),o=Math.pow(20,2-n/2),u=o/2,p=l(s(t,a).substr(0,n)+e),h=p.latitudeCenter-t;return h>u?p.latitudeCenter-=o:h<-u&&(p.latitudeCenter+=o),(h=p.longitudeCenter-a)>u?p.longitudeCenter-=o:h<-u&&(p.longitudeCenter+=o),s(p.latitudeCenter,p.longitudeCenter,p.codeLength)},e.shorten=function(e,t,a){if(!r(e))throw"ValueError: Passed code is not valid and full: "+e;if(-1!=e.indexOf("0"))throw"ValueError: Cannot shorten padded codes: "+e;e=e.toUpperCase();var o=l(e);if(o.codeLength<6)throw"ValueError: Code length must be at least 6";if(t=Number(t),a=Number(a),isNaN(t)||isNaN(a))throw"ValueError: Reference position are not numbers";t=c(t),a=d(a);for(var i=Math.max(Math.abs(o.latitudeCenter-t),Math.abs(o.longitudeCenter-a)),s=n.length-2;s>=1;s--)if(i<.3*n[s])return e.substring(2*(s+1));return e},function(e){return Math.min(90,Math.max(-90,e))}),u=function(e){return e<=10?Math.pow(20,Math.floor(e/-2+2)):Math.pow(20,-3)/Math.pow(5,e-10)},d=function(e){for(;e<-180;)e+=360;for(;e>=180;)e-=360;return e},p=function(e,a,o){for(var i="",r=e+90,s=a+180,l=0;l<o;){var c=n[Math.floor(l/2)],u=Math.floor(r/c);r-=u*c,i+=t.charAt(u),l+=1,s-=(u=Math.floor(s/c))*c,i+=t.charAt(u),8==(l+=1)&&l<o&&(i+="+")}return i.length<8&&(i+=Array(8-i.length+1).join("0")),8==i.length&&(i+="+"),i},h=function(e,a,n){for(var o="",i=125e-6,r=125e-6,s=(e+90)%i,l=(a+180)%r,c=0;c<n;c++){var u=Math.floor(s/(i/5)),d=Math.floor(l/(r/4));s-=u*(i/=5),l-=d*(r/=4),o+=t.charAt(4*u+d)}return o},g=function(e){var t=f(e,0),a=f(e,1);return new m(t[0]-90,a[0]-180,t[1]-90,a[1]-180,e.length)},f=function(e,a){for(var o=0,i=0;2*o+a<e.length;)i+=t.indexOf(e.charAt(2*o+a))*n[o],o+=1;return[i,i+n[o-1]]},v=function(e){for(var a=0,n=0,o=125e-6,i=125e-6,r=0;r<e.length;){var s=t.indexOf(e.charAt(r));a+=Math.floor(s/4)*(o/=5),n+=s%4*(i/=4),r+=1}return m(a,n,a+o,n+i,e.length)},m=e.CodeArea=function(t,a,n,o,i){return new e.CodeArea.fn.init(t,a,n,o,i)};return m.fn=m.prototype={init:function(e,t,a,n,o){this.latitudeLo=e,this.longitudeLo=t,this.latitudeHi=a,this.longitudeHi=n,this.codeLength=o,this.latitudeCenter=Math.min(e+(a-e)/2,90),this.longitudeCenter=Math.min(t+(n-t)/2,180)}},m.fn.init.prototype=m.fn,e},n=[a("ZsPj")],void 0===(o=function(e){return i.returnExportsGlobal=r()}.apply(t,n))||(e.exports=o)},s03E:function(e,t){},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.664f85ccf419110b7560.js.map