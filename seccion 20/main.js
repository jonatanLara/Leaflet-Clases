
//creacion de mapa base
const map = L.map('mapa', {
    center: [19.838898536012845 , -90.51670074462892],
    zoom: 14, 
    zoomControl:true,
    attributionControl: false,
    keyboard:true,
    maxBounds:[ 
        [19.837707665415603, -90.54043292999269 ], 
        [19.818995696002762, -90.5641007423401]]
})
console.log("hola mapa")
//
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)


//TILELAYER WMS
var wms = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
    layers: 'nexrad-n0r-900913',
    format: 'image/png',
    transparent: true,
    attribution: "Weather data © 2012 IEM Nexrad"
}).addTo(map)

//IMAGEOVERLAY

 const url = "./assets/imagen.png"
 const extension = [[19.829223185900616, -90.55168103205216],[19.830131641441785, -90.55346185061885]];

//L.imageOverlay(url, extension).addTo(map);

//VIDEOOVERLAY
var videoUrl = 'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
    videoBounds = extension;
const videoOverlay = L.videoOverlay(videoUrl, videoBounds).addTo(map);
setTimeout(()=>{

    const elemento = videoOverlay.getElement()
    console.log(elemento)
    
},3000)

 console.log(4*6)