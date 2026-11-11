

// Piramide de asteristcos


let filas = parseInt(prompt("Ingrese el número de filas"))

for (let i = 1; i <= filas; i++) {
    let espacios = ""
    let asteriscos = ""

    for (let j = 1; j <= filas - i; j++) {
        espacios = espacios + " "
    }

    for (let n = 1; n <= (2 * i - 1); n++) {
        asteriscos = asteriscos + "*"
    }

    console.log(espacios + asteriscos)
}
