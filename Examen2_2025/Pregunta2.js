/*
1-Diseña e implementa(usando filer(), map(), reduce(), si necesitas alguno)
una funcion verificarReloj1() que valide un array de objetos
h-m-s-clock (como el de antes). la comprobacion consiste en verificar
que los alores n,m  y s son los valores que contiene el array clock.
La funcion debe devolver los objetos  (n-m-s-clock) que sean incorrectos.

2-Escribe una prueba automatica

*/
function verificarReloj1(relojes) {
    return relojes.filter(obj => {
      // Verificamos que clock tenga los 3 valores esperadoscd 
      if (!Array.isArray(obj.clock) || obj.clock.length !== 3) return true;
  
      // Comparar valores uno a uno
      return (
        obj.clock[0] !== obj.h ||
        obj.clock[1] !== obj.n || // ojo: es 'n', no 'm'
        obj.clock[2] !== obj.s
      );
    });
  }

  //Prueba auto:

  function pruebaVerificarReloj1() {
    const datosDePrueba = [
      { h: 12, n: 30, s: 45, clock: [12, 30, 45] }, // correcto
      { h: 12, n: 37, s: 25, clock: [12, 37, 25] }, // correcto
      { h: 10, n: 15, s: 5, clock: [10, 15, 0] },   // incorrecto
      { h: 8, n: 59, s: 59, clock: [8, 58, 59] },   // incorrecto
      { h: 23, n: 0, s: 0, clock: [23, 0, 0] },     // correcto
      { h: 7, n: 45, s: 30, clock: [7, 45] }        // incorrecto: falta un valor
    ];
  
    const incorrectos = verificarReloj1(datosDePrueba);
  
    if (incorrectos.length === 3) {
      console.log(' Prueba pasada. Objetos incorrectos encontrados:');
      console.log(incorrectos);
    } else {
      console.log('Prueba fallida. Resultado inesperado:');
      console.log(incorrectos);
    }
  }
  
  pruebaVerificarReloj1();
  
  
