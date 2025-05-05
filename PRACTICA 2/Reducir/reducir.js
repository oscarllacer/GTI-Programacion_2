/*REDUCIR
Esta función, tiene un reductor, que colapsa una lista en un solo valor, aplicando una función repetidamente. 
Para ello utilizaremos el método reduce() en javascript.
Se usa la función reducir()
*/

/*
reducir, recibe tres parametos, una lista, formada por distintos números.
para reducir la lista y quedarnos con un solo elemento, vamos a sumarlos todos, he aqui cuando aparece el segunfo parámetro 
que es una operación, en este caso, una suma.
El tercer paraémtro, que es el valor inicial, es numérico y cuando se llame a la función desde el main, lo suyo es que sea 0.

Hay dos return, el primero, usa la función predefinida reduce, para reducir la lista, acumulando elemento a elemento,
valores que se devuelven en el segundo return
Finalmente se llama al valor Inicial, ya que es el último parámetro.*/ 
function reducir(lista, operacion, valorInicial){
    return lista.reduce(function(acumulador, elemento){
        return operacion (acumulador, elemento);
    }, valorInicial);
}

//Sumas
function sumar(a,b){
return a + b;
}

//MAIN
let numeros=[1,2,3,4,5];
let sumaTotal = reducir(numeros, sumar, 0)

console.log("La lists reducida y suma es: ",sumaTotal)