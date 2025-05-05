/*
La función mapear, aplica una transformación a cada elemento de una lista para obtener una nueva lista
Para lograr esto se usa el método Map*/

//Funcion mapear, que transforma cada elemento de una lista.
//map()recibe una funcion tradicional anónima y hace el cambio
function mapear(lista, transformacion){
    return lista.map(function(elemento){
        return transformacion(elemento)
    });
    }


//Función tradicional para obtener la longitud de una palabra
function longitud(palabra){
    return palabra.length;
}


//Parte principal/main

let palabras = ["rosa","clavel","margarita","naranjo"];
let longitud_palabras=mapear(palabras, longitud)

console.log("longitudes de las palabras:",longitud_palabras)