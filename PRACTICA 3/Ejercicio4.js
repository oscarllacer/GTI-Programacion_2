/*
Para el primer ejercicio, lo  que  evita que tomarMediciones se llame a sí misma indefinidamente es el setTimeout, que cuando pasen 1000 segundos dejará de llamarla

Ejercicio que simule obtener medidas de temperatura y las guarde en un fichero de texto
Otro pero que las abra el fichero con las temperaturas guardadas y
que calcule la media de las temperaturass y en qué instante se produjo la máxima y la mínima
  
 */
const fs = request('fs');

// Función para generar y guardar temperaturas en un archivo
function generarTemperaturas(cantidad) {
    let datos = '';
    for (let i = 0; i < cantidad; i++) {
        let temperatura = (Math.random() * 40 - 10).toFixed(2); // Genera una temperatura entre -10 y 30 grados
        datos += i + ',' + temperatura + '\n'; // Agrega el instante y la temperatura a los datos
    }
    fs.writeFileSync('temperaturas.txt', datos, 'utf8'); // Guarda los datos en un archivo
    console.log('Datos de temperatura guardados en temperaturas.txt');
}

// Función para leer el archivo y analizar las temperaturas
function analizarTemperaturas() {
    let contenido = fs.readFileSync('temperaturas.txt', 'utf8'); // Lee el archivo
    let lineas = contenido.split('\n'); // Separa las líneas
    
    let suma = 0;
    let maxTemp = -Infinity;
    let minTemp = Infinity;
    let instanteMax = 0;
    let instanteMin = 0;
    
    for (let i = 0; i < lineas.length; i++) {
        let datos = lineas[i].split(','); // Separa cada línea en instante y temperatura
        let instante = parseInt(datos[0]); // Convierte el instante a número
        let temperatura = parseFloat(datos[1]); // Convierte la temperatura a número
        
        if (!isNaN(temperatura)) { // Verifica que la temperatura sea un número válido
            suma += temperatura;
            
            if (temperatura > maxTemp) {
                maxTemp = temperatura;
                instanteMax = instante;
            }
            if (temperatura < minTemp) {
                minTemp = temperatura;
                instanteMin = instante;
            }
        }
    }
    
    let media = suma / (lineas.length - 1); // Calcula la temperatura media
    console.log('Temperatura media:', media.toFixed(2) + '°C');
    console.log('Temperatura máxima:', maxTemp + '°C en instante ' + instanteMax);
    console.log('Temperatura mínima:', minTemp + '°C en instante ' + instanteMin);
}

// Ejecutar simulación y análisis
generarTemperaturas(10); // Genera 10 mediciones
analizarTemperaturas();
