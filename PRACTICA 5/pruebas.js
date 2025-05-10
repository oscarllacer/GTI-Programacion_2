// ––––––––––––––-
// pruebas.js
// ––––––––––––––-

// ––––––––––––––-
// requires
// ––––––––––––––-
var bib = require( "./bib.js" )
// ––––––––––––––-
// main ()
// ––––––––––––––-
var a = bib.porDos( 8 )
console.log( a )
console.log( bib.porTres( 3 ) )

// ––––––––––––––––-
// requires
// ––––––––––––––––-
const Punto = require( "./Punto.js" )
// ––––––––––––––––-
// main ()
// ––––––––––––––––-
var p1 = new Punto( 3, 4 )
console.log( p1.getX() )