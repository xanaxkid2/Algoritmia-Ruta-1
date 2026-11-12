
// Validar Pin Robot

let pinRobot = 2580
intentos = 3

while (intentos > 0) {
    let pinIngresado = parseInt(prompt("Ingrese el pin "))

    if (pinIngresado === pinRobot) {
        alert("Pin correcto, Bienvenido")
        break
    } else {
        intentos--
        alert("Pin incorrecto  Te quedan " + intentos + " intentos.")
        if (intentos === 0) {
            alert("Sistema bloqueado.")
        }
    }
    
}