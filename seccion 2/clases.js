class Carro{
    llantas
    motor
    marca
    peso
    indicador

    constructor(llantas, motor, marca, peso){
        this.llantas = llantas
        this.motor = motor
        this.marca = marca
        this.peso = peso
        this.calcularIndicador()
    }

    calcularIndicador(){
        this.indicador = this.motor/this.peso
    }
}
const miCarro = {
    llantas: 4,
    motor: 1000,
    marca: 'Toyota',
    peso: 500
}
//console.log(miCarro)
//console.log(Carro)
const instanciaCarro = new Carro(miCarro)
console.log(instanciaCarro)
console.log(instanciaCarro.calcularIndicador())