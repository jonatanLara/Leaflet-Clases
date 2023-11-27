
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

const shadow = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
});

const baseLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

const marcador1 = L.marker([19.830849574328838, -90.55428367127574]).addTo(map)
const marcador2 = L.marker([19.83247906034102, -90.55701726399593])

const baseMaps = {
    "OpenStringMaps" : baseLayer,
    "Shadow Map":shadow
}

const overlayers = {
    "marcador 1":marcador1,
    "marcador 2": marcador2,
}

const control = L.control.zoom({
    zoomInText: '<span aria-hidden="true">+</span>',
    zoomInTitle:'Acercar',
    zoomOutTitle:'Alejar',
    position:'bottomright'
}).addTo(map)

setTimeout(() => {
    control.setPosition('topright')
}, 3000);

//LAYERS
const controlLayer = L.control.layers(baseMaps, overlayers).addTo(map)