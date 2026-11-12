
// Cajero de parqueadero

let carros= 0
let total = 0

let sumar = prompt("valor cobrado")

while (sumar > 0){
    total += parseInt(sumar)
    carros++
    sumar = prompt("valor cobrado")

    if (sumar <= 0) {
        alert("El total cobrado es: " + total + " y el total de carros es: " + carros)
    }
}