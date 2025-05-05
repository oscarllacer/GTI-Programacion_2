
alert("Primera Practica de JavaScript");

//Crea una funcion q reciba un numero y un callback y ejecute el callback con el numero como parametro
function porTres(x, callback) {
    callback(3 * x);
}
//llama a la  funcion *3 y le decimos que ingrese un numero
let numero = parseFloat(prompt("Ingrese un número: "));

//llama a la funcion porTres y le pasa el numero y una funcion anonima que recibe el resultado
porTres(numero, function(resultado) {
    document.write("El resultado de la multiplicación es: ", resultado);
});
