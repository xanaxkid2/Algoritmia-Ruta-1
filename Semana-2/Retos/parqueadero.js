
let minutos = Number(prompt("Ingrese los minutos de parqueo:"));

if (minutos <= 0 ) {

    console.log("Tiempo inválido");

} else if (minutos <= 15) {

    console.log("Parqueadero gratuito. No debe pagar.");

} else {

    let vehiculo = prompt("Tipo de vehículo: C = Carro / M = Moto").toUpperCase();
    let factura = prompt("¿Cuenta con factura? S/N").toUpperCase();

    let tarifa = 0;
    let horas = Math.ceil(minutos / 60);
    let total = 0;

    if (vehiculo === "C") {
        tarifa = 4000;

    } else if (vehiculo === "M") {
        tarifa = 2000;

    } else {
        console.log("Tipo de vehículo inválido");
    }

    if (tarifa > 0) {

        if (factura === "S" || factura === "N") {

            total = horas * tarifa;

            if (total > 30000) {
                total = 30000;
            }

            if (factura === "S") {
                total = total / 2;
            }

            console.log("Total a pagar: $" + total);

        } else {
            console.log("Factura inválida. Ingrese S o N");
        }
    }
}
