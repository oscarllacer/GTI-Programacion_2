/*
Se necesita desarrollar una aplicación on-line para relojes inteligentes 
que trabajen sobre datos obtenidos por los sensores que llevan dichos relojes y que se almacenan
en JSON con esta estructura:

[{"h": ,"m":, "s":,"clcok":[ , ,]}]

1-Diseña e implementa una funcion llamada leerDatosREloj() que a 
partir del nombre de un archivo devuelva los datos que el archivo guarda.

2-Escribe una prueba auto que contemple la posibilidad de errores
en la lectura o conversación del archivo. 
Puedes suponner que el fichero datos.json contiene:

[{"h": 12,"n":30, "s": 45, "clock": [12,30,45]}
 {"h": 12,"n":37, "s": 25, "clock": [12,37,25]
]

*/

const fs = require('fs');

function leerDatosReloj(nombreArchivo) {
  try {
    const contenido = fs.readFileSync(nombreArchivo, 'utf8'); // leer como string
    const datos = JSON.parse(contenido); // parsear JSON
    return datos;
  } catch (error) {
    throw new Error(`Error al leer o parsear el archivo: ${error.message}`);
  }
}

//Prueba auto:

function pruebaLeerDatosReloj() {
    try {
      const datos = leerDatosReloj('datos.json');
      
      if (!Array.isArray(datos)) {
        console.log(' Los datos no son un array');
        return;
      }
  
      for (const item of datos) {
        if (
          typeof item.h !== 'number' ||
          typeof item.n !== 'number' || // nota: en el enunciado es "n", no "m"
          typeof item.s !== 'number' ||
          !Array.isArray(item.clock)
        ) {
          console.log(' Formato incorrecto en alguno de los elementos:', item);
          return;
        }
      }
  
      console.log('✅ Prueba superada: Datos leídos correctamente');
      console.log(datos);
    } catch (error) {
      console.error(' Error durante la prueba:', error.message);
    }
  }
  
  pruebaLeerDatosReloj();
  
