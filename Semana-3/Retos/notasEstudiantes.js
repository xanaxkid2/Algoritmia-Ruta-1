
// Notas de cinco estudiantes

mayor = 0
menor = 5
suma = 0
aprobados = 0
perdio = false

for (let i = 1; i <= 5; i++) {
    let nota = parseFloat(prompt("Ingrese la nota del estudiante " + i))

    if (nota>3){
        aprobados++
    }else if (nota<3){
        perdio = true
    }
    if (nota > mayor) {
        mayor = nota
    }
    if (nota < menor) {
        menor = nota
    }
    alert("el prooedio de notas es " + nota / 5)
    alert("la nota mayor es " + mayor)
    alert("la nota menor es " + menor)
    alert("el total de estudiantes aprobados es " + aprobados)  

    if (perdio === true) {
        alert("hay estudiantes en refuerzo")
    }


}