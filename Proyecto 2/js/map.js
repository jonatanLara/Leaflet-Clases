1919
//creacion de mapa base
//
//estilos
const pathDefect = {
    color: 'black'
}
const pathGroup = {
    color: 'green'
}
const divIcon = L.divIcon({
    className: 'fa-solid fa-thumbtack myDivIcon',
    iconSize:[20,20],
    iconAnchor: [10,30],
    popupAnchor: [0,-30]
})

//
const bounds = L.latLngBounds([
    [19.837707665415603, -90.54043292999269 ], 
    [19.818995696002762, -90.5641007423401]
])

const map = L.map('mapa', {
    minZoom: 6,
    maxZoom:22,
    center: [19.838898536012845 , -90.51670074462892],
    attributionControl: false,
    maxBounds:bounds 
})
map.fitBounds(bounds)

const scale = L.control.scale({
    position:'bottomright'
}).addTo(map)

const mapBase =  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxNativeZoom: 19,
    maxZoom: 22,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

const street = L.tileLayer('https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
const satelite =  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
})

const shadow = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
})

const group = L.featureGroup().addTo(map)
group.on('layeradd', (evento)=>{
    const {layer} = evento
    if(layer?.dragging){
        //definir el icono
        layer.setIcon(divIcon)
    }else{
        //definir el estilo
        layer.setStyle(pathGroup)
    }
})

const baseLayers = {
    "Satelital":satelite,
    "Streets":street,
    "Noche":shadow
}
const overlays = {
    "Feature Group": group
}

const controlLayers = L.control.layers(baseLayers,overlays).addTo(map)

const crearCapa = (latlng, type, grouped) =>{
    console.log(latlng, type, grouped)
    let layer
    if(type == 'marker') layer = L.marker(latlng,{draggable:true})
    else if(type == 'circleMarker') layer = L.circleMarker(latlng, {...pathDefect})
    else if(type == 'polygon') layer = L.polygon(latlng, {...pathDefect})
    else if(type == 'polyline') layer = L.polyline(latlng, {...pathDefect})

    if(grouped){
        //SI LO QUEREMOS AÑADIR A UN GRUPO
        group.addLayer(layer)
    }else{
        //SI NO LO QUEREMOS AGRUPADO LO AÑADIMOS A LA CAPA
        layer.addTo(map)
        controlLayers.addOverlay(layer, type)
    }

    crearTooltips(layer, type)
    crearPopups(layer,grouped)
}

const crearTooltips = (layer, text) =>{
    layer.bindTooltip(text)
}

const crearPopups = (layer, grouped) =>{
    const contenedor = document.createElement('div')
    contenedor.classList.add('popupContenet')

    const grupoBtn = document.createElement('button')
    const capaBtn = document.createElement('button')
    const cancelarBtn = document.createElement('button')

    cancelarBtn.classList.add('cancelar')
    capaBtn.classList.add('proceso')
    grupoBtn.classList.add('proceso')
    
    cancelarBtn.textContent = 'Cancelar'
    grupoBtn.textContent = 'GeoJson del grupo'
    capaBtn.textContent = 'GeoJson de la capa'

    const contenedorBtns = document.createElement('div')
    contenedorBtns.append(cancelarBtn)
    if(grouped) contenedorBtns.append(grupoBtn)
    contenedorBtns.append(capaBtn)

    const div = document.createElement('div')
    div.textContent = ' ¿Qué preoceso desea realizar?'

    contenedor.append(div)
    contenedor.append(contenedorBtns)

    //btn copiar
    const copy = document.createElement('i')
    copy.classList.add('fa-regular','fa-copy','btn-copy')

    //eventos
    cancelarBtn.addEventListener('click', ()=>{
        layer.closePopup()
    })

    capaBtn.addEventListener('click', ()=>{
        sidebar.textContent = JSON.stringify(layer.toGeoJSON() )
        sidebar.append(copy)
    })

    grupoBtn.addEventListener('click', ()=>{
        sidebar.textContent = JSON.stringify(group.toGeoJSON())
        sidebar.append(copy)
    })

    

    layer.bindPopup(contenedor)
}
