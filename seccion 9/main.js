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



const path = {
    stroke:true, //la figura tenga bordes
    color: "red",
    weight:2,
    opacity: 1,
    fillColor: 'green',
    fillOpacity: 0.3
}

const circulo = L.circle([19.829459, -90.552524],{radius: 10,...path}).addTo(map) // el radio esta en metros

circulo.on('mouseover', () =>{
    circulo.setStyle(path)
})

setTimeout(()=>{
    map.flyTo([ 19.829459, -90.552524],18)
},3000)

L.circleMarker([19.829459, -90.552524],{radius: 10,...path}).addTo(map) //el radio esta en pixels

