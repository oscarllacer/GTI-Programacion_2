
// Función Filtrar
function filtrar(lista_palabras, condicion_x) {
    return lista_palabras.filter(condicion_x);
}

// Función Mapear
function mapear(lista, transformacion) {
    return lista.map(function (elemento) {
        return transformacion(elemento);
    });
}

// Función Reducir
function reducir(lista, operacion, valorInicial) {
    return lista.reduce(function (acumulador, elemento) {
        return operacion(acumulador, elemento);
    }, valorInicial);
}


// Definimos la lista de palabras
var palabras = ["Es", "ahora", "tu", "oportunidad", "para", "aprovechar", "este", "día"];

// Obtener una nueva lista con cada palabra escrita del revés
let palabrasInvertidas = mapear(palabras, palabra => palabra.split('').reverse().join(''));
console.log("Palabras invertidas:", palabrasInvertidas);

// Calcular el total de caracteres de la frase completa
let totalCaracteres = reducir(palabras, (acumulador, palabra) => acumulador + palabra.length, 0);
console.log("Total de caracteres:", totalCaracteres);

// Calcular cuántas palabras tienen más de 5 letras
let palabrasMasDe5 = filtrar(palabras, palabra => palabra.length > 5);
console.log("Palabras con más de 5 letras:", palabrasMasDe5.length);

// Obtener una palabra que sea la concatenación de aquellas con 3 letras o menos
let concatenacionPequenas = reducir(filtrar(palabras, palabra => palabra.length <= 3), (acumulador, palabra) => acumulador + palabra, "");
console.log("Concatenación de palabras de 3 letras o menos:", concatenacionPequenas);
