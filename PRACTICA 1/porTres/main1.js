

//Sale una alerta para poder ingresar los valores necesarios, en este caso al principio dira: Primera Practica
alert("Primera Practica de JavaScript");

//Nombramos la variable numero y le asignamos un valor
function porTres(x) {
    return x * 3;
}

//El prompt nos permite ingresar un valor y lo convierte en un numero
let res = porTres(2);
console.log(`porTres: ${res === 6 ? "ok" : "mal"}`);

//Prompt se usa para pedir datos al usuario
numero = parseFloat(prompt("Ingrese un número: "));

//Mostrar en pantalla y consola
document.write("El resultado de la multiplicacion es: ", porTres(numero));
console.log("El resultado de la multiplicacion es: ", porTres(numero));