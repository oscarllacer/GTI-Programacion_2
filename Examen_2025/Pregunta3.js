/*
Diseña una función que reciba como parámetro de entrada una lista de palabras y 
devuelva una palabra formada por las letras del centro de las palabras de tamaño impar 
(las de tamaño par se ignoran).

Implementa el método usando en cada uno de sus pasos una de las funciones filter(), map() o reduce().

Recuerda que Math.floor((5-1)/2) es justo la posición central de una palabra de 5 letras.

Automatiza si "cálculo", "bisa", "dice", "mío" → "lcm", ¿coincide si es dic?

*/
// Declaración de la función palabraFormada()
// [txt] -> palabraFormada() -> txt

function palabraFormada(lista)
{
    var f = filtrar(lista, palabra => palabra.length % 2 != 0);
    
    var m = mapear(f, palabra =>
                        {
                            var pos = Math.floor(palabra.length/2);
                            return palabra[pos];
                        }
    );

    var r = reducir(m, "", (acumulador, letra) => acumulador+letra);

    return r;
}