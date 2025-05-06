/*Diseña una función que calcule la velocidad a la que ha ido un vehículo en distintos tramos de un trayecto. 
Para esto, la función recibe un array de pares de valores como [[5,1], [6,1], [7,1]], donde d es la distancia y t el tiempo.

Solo mapear() teniendo en cuenta que la velocidad en cada tramo es constante.

Automatiza.

*/


// Declaración de la función velocidad()
// [{s: R, t: R}] -> velocidad() -> [R]

function velocidad(array)
{
    var res = mapear(array, function(elemento)
                            {
                                var r = elemento.s/elemento.t;
                                return r;
                            });

    return res;
}