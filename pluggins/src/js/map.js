import './leaflet'

const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


const marcador = L.marker([51.505, -0.09]).addTo(map);
marcador.on('click', () =>{
    sidebar.toggle()
})

const sidebar = L.control.sidebar('sidebar')
map.addControl(sidebar)

