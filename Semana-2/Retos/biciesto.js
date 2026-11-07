
let año = Number(prompt("Ingresa un año:"));

if (año <= 0 ) {

    alert("Ingresa un año válido");

} else if (año % 400 === 0 || (año % 4 === 0 && año % 100 !== 0)) {

    alert("El año " + año + " es bisiesto");

} else {

    alert("El año " + año + " no es bisiesto");

}
