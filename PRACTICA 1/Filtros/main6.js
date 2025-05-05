//Ejericio: Funcion que  calcule la integral con el PUNTO MEDIO


//--------------------
// R-->Filtrar()-->R
//---------------------

/**
 * Calcula la integral definida de una función f(x) en [a, b] con el método del punto medio.
 
 */
function integral(f, a, b, n = 1000) {
    let h = (b - a) / n; // Tamaño de cada subintervalo
    let sum = 0;
    
    for (let i = 0; i < n; i++) {
        let xMid = a + (i + 0.5) * h; // Calcula el punto medio del subintervalo
        sum += f(xMid); // Evalúa la función en el punto medio y acumula el resultado
    }
    
    return sum * h; // Multiplica la suma por el tamaño del subintervalo para obtener la integral aproximada
}

// Ejemplo: calcular la integral de f(x) = x^2 en [0, 2]
console.log(integral(x => x ** 2, 0, 2));

/**
 * Explicación del método del punto medio:
 * - Se divide el intervalo [a, b] en n subintervalos de igual tamaño h.
 * - En lugar de evaluar la función en los extremos de cada subintervalo, se evalúa en su punto medio.
 * - Se calcula el punto medio como xMid = a + (i + 0.5) * h.
 * - Se suma el valor de la función en estos puntos y se multiplica por h para obtener la aproximación de la integral.
 * - Este método suele ser más preciso que el método del trapecio para la misma cantidad de subintervalos.
 */
