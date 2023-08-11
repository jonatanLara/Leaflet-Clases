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

//creacion de evento
//on tipo de evento, y la funcion
map.on('click', (evento) => {
    //destructuracion de objetos
    console.log(evento)
    const {latlng} = evento;
    const {lat, lng} = latlng
    console.log("latitud: "+lat + " longitud: "+lng )
})

map.on('zoomend', (evento)=>{
    const zoom = evento.target._zoom;
    console.log(zoom)
})

map.on('moveend', (evento)=>{
    //métodos para modificar el mapa 
    const bound = map.getBounds()
    console.log(bound)
})

setTimeout(()=>{
    map.flyTo([ 19.829459, -90.552524],18)
},3000)