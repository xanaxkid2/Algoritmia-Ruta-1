
let unidades = Number(prompt("Ingrese la cantidad de unidades:"));

if (unidades < 0 || isNaN(unidades)) {
    alert("Error, ingrese un dato válido 🚫");

} else if (unidades === 0) {
    alert("Agotado 🔴");

} else if (unidades > 0 && unidades <= 10) {
    alert("Pedir 🟡");

} else {
    alert("Todo melo 🟢");
}
