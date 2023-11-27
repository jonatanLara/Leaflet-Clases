//creacion de mapa base
//creacion de mapa base
const map = L.map('mapa', {
    center: [19.838898536012845 , -90.51670074462892],
    zoom: 14, 
    zoomControl:true,
    attributionControl: false,
    keyboard:true,
    minZoom: 14,
})

const featureGroup = L.featureGroup().addTo(map)
//BINDPOPUP
featureGroup.bindPopup(
    "Se ha dado click a un elemento"
)

//si añadimos en evento se replica para todo el grupo
featureGroup.on('click', (evento) =>{
    console.log("se dio click en el elemento ",evento)
    const {layer} = evento
})

featureGroup.on('layeradd', (evento) => {
    
})


//LO AÑADIMOS PARA CREAR EL GRUPO
featureGroup.addLayer(marcador)
featureGroup.addLayer(marcador2)
//información dinamica
featureGroup.eachLayer(layer =>{
    layer.on('clcik', (envento)=>{
        const {latIng} = evento

        console.log(evento)
        layer.bindPopup(`Se ha dado clic en la siguiente dirección
        Latitud: ${latIng.lat}
        Longitud: ${latIng.lng}
        `).openPopup()
    })
})