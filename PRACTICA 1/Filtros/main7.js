
//otra forma de hacer la integral, en este caso se usa el METODO DE MONTE CARLO



// Este método se basa en generar puntos aleatorios y estimar el área bajo la curva.

function integral(f, a, b, n = 10000) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        let xRand = a + Math.random() * (b - a); // Genera un punto aleatorio en [a, b]
        sum += f(xRand); // Evalúa la función en el punto aleatorio y acumula el resultado
    }
    return (b - a) * (sum / n); // Promedia las evaluaciones y multiplica por el ancho del intervalo
}

// Ejemplo: calcular la integral de f(x) = x^2 en [0, 2]
console.log(integral(x => x ** 2, 0, 2));

/**
 * Explicación del método de Monte Carlo:
 * - Se generan n puntos aleatorios dentro del intervalo [a, b].
 * - Se evalúa la función en cada punto aleatorio.
 * - Se calcula el promedio de todas las evaluaciones.
 * - Finalmente, se multiplica por la longitud del intervalo (b - a) para obtener la aproximación de la integral.
 * - Este método es útil cuando la función es complicada o de alta dimensión.
 */
