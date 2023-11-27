//creacion de mapa base
const map = L.map('mapa', {
    center: [19.838898536012845 , -90.51670074462892],
    zoom: 14, 
    zoomControl:true,
    attributionControl: false,
    keyboard:true,
    minZoom: 14,
})
console.log("hola mapa")
//
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

const estilo_defecto = {
    color: 'yellow'
}
//plyline
const geojsonLayer = L.geoJSON(geojson,
    {
        pointToLayer: (geoJsonPoint, latIng) =>{
            console.log(`geojsongpoint: ${geoJsonPoint} latIng: ${latIng}`)
            return L.circleMarker(latIng,{color:'red'})
            
        },
        style: (feature) => {
            
            const {nombre} = feature.properties
            if(nombre === 'punto'){
                return {color: 'orange'}
            }
            else if(nombre === 'linea'){
                return {color: 'green'}
            }else if(nombre === 'poligono'){
                return {color: 'red'}
            }else{
                return estilo_defecto
            }
            
        },
        filter: (feature) => {
            return ['punto','poligono'].includes(feature.properties.nombre)
        },
        onEachFeature: (feature, layer) => {
            //console.log(layer)
            layer.on('mouseover', ()=>{
                layer.setStyle(estilo_defecto)
            })
            layer.on('click', () => {
                if(feature.geometry.type === 'Point'){
                    map.setView(layer.getLatLng(),map.getMaxZoom())
                }else{
                    map.fitBounds(layer.getBounds())
                }
            })
        }
    }).addTo(map)

console.log(geojson)

setTimeout(()=>{
    geojsonLayer.addData(nueveFeature)
},3000)

console.log(nueveFeature)