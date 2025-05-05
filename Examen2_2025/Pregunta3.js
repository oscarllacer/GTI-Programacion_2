/*
1-Diseñar e implementar una funcion verificarReloj2() que compruebe que los tiempos
de un array de objetos (h-m-s-clock) se van incrementando
Usa filter(), map(), reduce().

2-Escribe una prueba automatica


*/
function verificarReloj2(relojes) {
    // Convertir cada reloj a un objeto con el tiempo total en segundos
    const tiempos = relojes.map(obj => {
      const horas = obj.h * 3600;
      const minutos = obj.n * 60; // Ojo: el campo es 'n', no 'm'
      const segundos = obj.s;
      return {
        ...obj,
        totalSegundos: horas + minutos + segundos
      };
    });
  
    // Comparar con el tiempo anterior y filtrar los que NO incrementan
    return tiempos.filter((obj, i, arr) => {
      if (i === 0) return false; // el primero siempre es válido
      return obj.totalSegundos <= arr[i - 1].totalSegundos;
    });
  }

  //Prueba auto

  function pruebaVerificarReloj2() {
    const datos = [
      { h: 12, n: 0, s: 0, clock: [12, 0, 0] },   // OK
      { h: 12, n: 0, s: 1, clock: [12, 0, 1] },   // OK
      { h: 12, n: 0, s: 5, clock: [12, 0, 5] },   // OK
      { h: 12, n: 0, s: 4, clock: [12, 0, 4] },   //  menor que anterior
      { h: 12, n: 1, s: 0, clock: [12, 1, 0] },   // OK
      { h: 12, n: 0, s: 59, clock: [12, 0, 59] }, //  menor que anterior
    ];
  
    const incorrectos = verificarReloj2(datos);
  
    if (incorrectos.length === 2) {
      console.log('Prueba pasada. Objetos con tiempos NO incrementales:');
      console.log(incorrectos);
    } else {
      console.log('Prueba fallida. Resultado inesperado:');
      console.log(incorrectos);
    }
  }
  
  pruebaVerificarReloj2();
  
  