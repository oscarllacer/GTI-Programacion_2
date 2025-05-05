
/*FICHEROS DE TEXTO: Guardan de forma persistente información

CREAR UN FICHERO DE TEXTO:

var fs = require( "fs" )
fs.writeFile( "hola.txt", "hola mundo", function( err ) {
if( err ) {
console.log( "hubo un problema al escribir en hola.txt" )
}
})

LEER UN FICHERO:

var fs = require( "fs" )
fs.readFile( "hola.txt", "utf8", function( err, contenido ) {
if( err ) {
console.log( "hubo un problema al leer de hola.txt" )
return
}
console.log( contenido )
})

-----------------------------------------------------------------------------
1. Escribe un programa que escriba tu nombre en un fichero de texto llamado “nombre.txt”.
2. Escribe un programa que lea el contenido del fichero “nombre.txt”.
*/

var fs = request("fs");

// Escribir en el archivo
fs.writeFile("nombre.txt", "Hola, me llamo Pepe", function (err) { //La funcion err funciona como un CALLBACK
    //Dentro del callback si hay un error, err contendrá la informacion del problema y lo  mostrará en consola

    //fs.writeFile intenta escribir "Hola, me llamo Pepe" en el archivo "nombre.txt"
    if (err) {
        console.log("Hubo un problema al escribir nombre.txt");
        return;
    }
    //Si err es null significa que todo salió bien y saldrá "Archivo escrito correctamente"
    console.log("Archivo escrito correctamente.");

    // Leer el archivo después de que se haya escrito
    fs.readFile("nombre.txt", "utf8", function (err, data) { 
        if (err) {
            console.log("Hubo un problema al leer nombre.txt");
            return;
        }
        console.log("Contenido del archivo:");
        console.log(data);
    });
});

