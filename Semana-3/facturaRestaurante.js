

// factura del restaurante

function leerProductos() {
    let productos = []
    let cantidad = parseInt(prompt("Ingrese la cantidad de productos"))
    for (let i = 1; i <= cantidad; i++) {
        let producto = prompt("Ingrese el nombre del producto " + i)
        let precio = parseFloat(prompt("Ingrese el precio del producto " + i))
        productos.push({ nombre: producto, precio: precio })
    }
    return productos

}

function calcularTotal(productos) {
    let total = 0
    for (let i = 0; i < productos.length; i++) {
        total += productos[i].precio
    }
    return total
}

function calcularPorcentaje(total, porcentaje) {
    return (total * porcentaje) / 100
}

function calcularPropina(total, porcentaje) {
    let propina = calcularPorcentaje(total, porcentaje)
    return propina
}

function calcularTotalConPropina(total, propina) {
    return total + propina
}

let productos = leerProductos()
let total = calcularTotal(productos)
let porcentajePropina = parseFloat(prompt("Ingrese el porcentaje de propina"))
let propina = calcularPropina(total, porcentajePropina)
let totalConPropina = calcularTotalConPropina(total, propina)

alert("El total de la factura es: " + total)
alert("La propina es: " + propina)
alert("El total con propina es: " + totalConPropina)