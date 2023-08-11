//creacion de mapa base
const map = L.map('mapa', {
    center: [19.838898536012845 , -90.51670074462892],
    zoom: 14, 
    zoomControl:true,
    attributionControl: false,
    keyboard:true,
    minZoom: 14,
    maxBounds:[ 
        [19.837707665415603, -90.54043292999269 ], 
        [19.818995696002762, -90.5641007423401]]
})
console.log("hola mapa")
//
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)


//plyline
const linea = L.polyline(
    [
        [19.82938361198487, -90.55242694329964],
        [19.830776324961995, -90.5544325078012],
        [19.828912753584135, -90.55559274263186]
    ]
).addTo(map)

const extensionLinea = linea.getBounds()
map.fitBounds(extensionLinea)

