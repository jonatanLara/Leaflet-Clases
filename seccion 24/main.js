
//creacion de mapa base
const map = L.map('mapa', {
    center: [19.838898536012845 , -90.51670074462892],
    zoom: 14, 
    zoomControl:false,
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

const control = L.control.zoom({
    zoomInText: '<span aria-hidden="true">+</span>',
    zoomInTitle:'Acercar',
    zoomOutTitle:'Alejar',
    position:'bottomright'
}).addTo(map)

setTimeout(() => {
    control.setPosition('topright')
}, 3000);