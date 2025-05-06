/*Diseña una función calcularAreaExcluida que reciba una lista de objetos 
como [[7,9], [5,1], [9,1], [7,7]], x deja el centro de un círculo sobre el eje X (X=0) y Y=0 y r es el radio. 
La función debe devolver una lista con las áreas de los círculos definidos en la pista de entrada.
 (Área es π * r^2 y π ≈ 3.14159).

Usando recursión. No puede utilizar Math.

Automatiza.

*/

// Declaración de la función calcularAreasCirculos()
// [x: R, r: R] -> calcularAreasCirculos() -> [R]

function calcularAreasCirculos(lista)
{
    var res = reducir(lista, [],
        function(acumulador, numero)
        {
            var pi = 3.14159;
            acumulador.push(pi*numero.r*numero.r);
            return acumulador;
        }
    );

    return res;
}

