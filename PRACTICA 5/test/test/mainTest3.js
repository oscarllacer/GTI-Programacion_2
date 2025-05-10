const Punto = require("../Punto.js")
var assert = require ("assert")
// ––––––––––––––
// main ()
// ––––––––––––––
// descripción los test que hacemos aquí
describe( "Prueba de diferencia()",
function () {
var p1 = new Punto( 0, 3 )
var p2 = new Punto( 1, 0 )
// ––––––––––––––––––––-
// it(): test concreto
it( "la diferencia de x de p1 a x de p2 es -1 y de y de p1 a y de p2 es 3", function(
hecho ){
assert.equal((p1.diferencia(p2)).getX(), -1)
assert.equal((p1.diferencia(p2)).getY(), 3)
hecho()
}) // it
} ) // describe