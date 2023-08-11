//creacion de mapa base
const map = L.map('mapa', {
    center: [19.829459, -90.552524],
    zoom: 20, 
    zoomControl:true,
    attributionControl: false,
    keyboard:true,
    minZoom: 16,
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

