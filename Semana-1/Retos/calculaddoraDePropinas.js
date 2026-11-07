
//  Ejercicio #3 - Calculadora de propinas

let personas = Number(prompt("¿Cuántas personas son?"));
let valor = Number(prompt("¿Cuál es el total de la cuenta?"));
let propina = Number(prompt("¿Cuál es el porcentaje de propina? (Solo número)"));

let valorPropina = valor * propina / 100;
let totalCuenta = valor + valorPropina;
let propinaPorPersona = totalCuenta / personas;

console.log("El valor de la propina es: $" + valorPropina);
console.log("El total de la cuenta es: $" +  totalCuenta);
console.log("A cada persona le corresponde pagar: $" + propinaPorPersona);