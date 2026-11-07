let edad = prompt("ingresa tu edad")

if (edad >= 14 ){
    let terminos = prompt(" Aceptas los terminos y condiciones ? S/N").toUpperCase()
    if (terminos === "S"){
        alert("Bienvenido , te registraste con exito")
    }else if (terminos === "N"){
        alert("No se realizo el registro , Debes aceptar terminos y condiciones ")
    }else
        alert("ingresa S o N")


}else
    alert("no tienes edad suficiente para registrarte")