const btn = document.querySelector("button")
const select = document.querySelector("select")
const checkbox = document.querySelector("#checkbox")
const sidebar = document.querySelector('#sidebar')


 btn.addEventListener('click', ()=>{
    const {value} = select
    const {checked} = checkbox
    if(value){
        console.log(value, checked)
        if(['marker','circleMarker'].includes(value)){
            const data = generarPuntos(1)
            crearCapa(data.flat(),value, checked)
           // console.log(data)
        }else if(value == 'polygon'){
            const data = generarPuntos(4)
            crearCapa(data,value, checked)         
            //console.log(data)
        }else if( value == 'polyline'){
            const data = generarPuntos(3)
            crearCapa(data, value, checked)
          //  console.log(data)
        }

    }
 })
 
 sidebar.addEventListener('click', () =>{
    navigator.clipboard.writeText(sidebar.innerText)
    alert("Se copio correctamente")
 })