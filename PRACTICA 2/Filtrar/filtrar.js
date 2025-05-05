//FILTRAR
/* 
fUNCION QUE RECIBE DOS PARAMETROS
Una lista de elementos(una lista de palabras)
Una funcion de condicion que determina si el elemento debe o no debe estar en la lista
*/ 

//Funcion Filtrar, que aplica una condicion a los elementos de la lista
function filtrar(lista_palabras, condicion_x){
    return lista_palabras.filter(condicion_x);

}

//Prueba automatica: pasamos una lista y seleccionamos las palabras con la letra x
let lista_palabras = ["texto", "examen", "maximo", "palabra" , "filtro", "execute"];

let condicion_x= filtrar(lista_palabras, palabra => palabra.includes("x"));

/*
Es una función de flecha que recibe un parámetro (palabra).
Devuelve true si la palabra contiene la letra "x" (palabra.includes("x")).
Devuelve false en caso contrario.
*/

console.log("palabras con la 'x':",condicion_x)
// es lo mismo que hacer if palabra in lista_palabras 



//SIN FUNCION FLECHA
function filtrado(lista, condicion){
    return lista.filtrer(function(elemento){
        return condicion(elemento)

    });
}

//prueba automática: seleccionar palabras con la 'x'
function contienex(palabra){
    return palabra.includes('x'); 
}

let palabras  = ["texto", "examen", "maximo", "palabra" , "filtro", "execute"];

let palabrasConx = filtrado(palabras, contienex); //esta linea es la llamada de las dos funciones

console.log("Palabras que incluyen la letra 'x': ",palabrasConX)