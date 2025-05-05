/*
1-Diseña e implementa  una funcion mayorIntervalo()
que devuelva la duración en segundos del mayor intervalo
entre dos muestras consecutivas contenidas en un array
de objetos (h-m-s-clock).

2-Escribe una prueba automatica

*/

function mayorIntervalo(relojes) {
    // Paso 1: Mapear cada objeto a su tiempo total en segundos
    const tiempos = relojes.map(obj => {
      const horas = obj.h * 3600;
      const minutos = obj.n * 60; // es 'n', no 'm'
      const segundos = obj.s;
      return horas + minutos + segundos;
    });
  
    // Paso 2: Calcular las diferencias entre consecutivos
    const diferencias = tiempos.map((t, i, arr) => {
      if (i === 0) return 0;
      return t - arr[i - 1];
    });
  
    // Paso 3: Usar reduce para encontrar la diferencia máxima
    const maxIntervalo = diferencias.reduce((max, actual) => {
      return actual > max ? actual : max;
    }, 0);
  
    return maxIntervalo;
  }

  //Prueba auto:
  function pruebaMayorIntervalo() {
    const datos = [
      { h: 10, n: 0, s: 0, clock: [10, 0, 0] },    // base
      { h: 10, n: 0, s: 30, clock: [10, 0, 30] },  // +30 seg
      { h: 10, n: 2, s: 0, clock: [10, 2, 0] },    // +90 seg
      { h: 10, n: 2, s: 45, clock: [10, 2, 45] },  // +45 seg
      { h: 10, n: 5, s: 0, clock: [10, 5, 0] }     // +135 seg (mayor)
    ];
  
    const resultado = mayorIntervalo(datos);
  
    if (resultado === 135) {
      console.log("Prueba pasada. Mayor intervalo:", resultado, "segundos");
    } else {
      console.log("Prueba fallida. Resultado inesperado:", resultado);
    }
  }
  
  pruebaMayorIntervalo();
  