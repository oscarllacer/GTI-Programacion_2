/*
Tenemos un sistema de notas con estas calificaciones: "suspenso", "aprobado", "bien", "notable", "sobresaliente",
 cuyo equivalente numérico es respectivamente: 3, 5, 7, 8, 10.

Diseña una función calcularMedia() que reciba una serie de calificaciones como tal y 
devuelva la media numérica.

Usa dos de estos: filter, map o reduce.

Automatiza.

*/
// Declaración de la función calcularMedia()
// [txt] -> calcularMedia() -> Z

function calcularMedia(lista)
{
    var m = mapear(lista, function(palabra)
                            {
                                if(palabra == "suspenso")
                                {
                                    return 3;
                                }

                                if(palabra == "aprobado")
                                {
                                    return 5;
                                }

                                if(palabra == "bien") 
                                {
                                    return 7;
                                }

                                if(palabra == "notable")
                                {
                                    return 8;
                                }

                                if(palabra == "sobresaliente")
                                {
                                    return 10;
                                }
                            });
    var r = reducir(m, 0, function(acumulador, numero)
                            {
                                return acumulador + numero;
                            });
    return r/m.length;
}

// Main

var array = [{s: 8, t: 4}, {s: 6, t: 2}];

var res1 = velocidad(array);

var lista = [{x: 1, r: 1}, {x: 2, r: 2}];

var res2 = calcularAreasCirculos(lista);

var palabras = ["coladores", "brisa", "cree", "mes", "cazar"];

var res3 = palabraFormada(palabras);

var notas = ["sobresaliente", "sobresaliente", "sobresaliente"];

var res4 = calcularMedia(notas);

// Pruebas automáticas comparar resultados con esperado

if(res1[0] == 2)
{
    console.log("Funciona velocidad() \n");
}

if(res2[0] == 3.14159)
{
    console.log("Funciona calcularAreasCirculos() \n");
}

if(res3 == "diez")
{
    console.log("Funciona palabraFormada() \n");
}

if(res4 == 10)
{
    console.log("Funciona calcularMedia()");
}