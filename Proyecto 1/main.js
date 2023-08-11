// 
const sidebar = document.querySelector("#sidebar")

console.log("!carga de documentos con éxito")
const map = L.map('mapa', {
    center: [19.838898536012845 , -90.51670074462892],
    zoom: 14, 
    zoomControl:true,
    attributionControl: false,
    keyboard:true,
    minZoom: 14,
})
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)



//animacion y movimiento del mapa

const moveFly = (latlng) => {
    map.flyTo(latlng, map.getMaxZoom())
}

//marcador 

const marcadorUbicacion = (lating)=> {
    setTimeout( () =>{
        L.marker(lating).addTo(map)
    },200) 
}
//animación del contenedor
const animationContenedor = (div) =>{
    if(div.classList.contains('activar')){
        div.classList.remove('activar')
        div.classList.add('ocultar')
        setTimeout(()=>{
            div.style.display = "none"
        },100)
        
    }else if(div.classList.contains('ocultar')){
        setTimeout(()=>{
            div.classList.remove('ocultar')
            div.classList.add('activar')
            div.style.display = "block"
        },100)
    }
}
 function CrearComponente(compHTML, comptID, comptClass, evento,text ){
    const comp = document.createElement(compHTML)
 }
const crearItems = () => {
    const div1 = document.createElement('div')
    div1.classList.add('card-info','activar')
    sidebar.append(div1)

    const ul = document.createElement('ul')
    ul.classList.add('list-group')
    div1.append(ul)

    const div2 = document.createElement('div')
    div2.classList.add('card-info','ocultar')
    sidebar.append(div2)

    const btn = document.createElement('i')
    btn.classList.add('fa-solid','fa-arrow-left','btn-back')
    div2.append(btn)

    btn.addEventListener('click', () => {
        animationContenedor(div1)
        animationContenedor(div2)
    })

    const titulo = document.createElement('h4')
    div2.append(titulo)

    const image = document.createElement('img')
    image.classList.add('rounded','img-resposive')
    div2.append(image)

    const p = document.createElement('p')
    div2.append(p)

    lugares.forEach(lugar => {
        const li = document.createElement('li')
        li.innerText = lugar.nombre
        li.classList.add('list-group-item')
        li.addEventListener('click', ()=>{

            animationContenedor(div1)
            animationContenedor(div2) 

            moveFly(lugar.coordenada)
            marcadorUbicacion(lugar.coordenada)
            titulo.innerText = ""
            titulo.innerText = lugar.nombre
            p.innerText = ""
            p.innerText = lugar.info
            image.src = lugar.image
            
        })    
        ul.append(li)
    })
    
}

crearItems()

