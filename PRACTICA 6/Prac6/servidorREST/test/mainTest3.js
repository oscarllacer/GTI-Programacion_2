//---------------------------------------------------------------------
// mainTest3.js - Vicente Rivas Monferrer
//---------------------------------------------------------------------
var request = require("request");
var assert = require("assert");
//---------------------------------------------------------------------
//---------------------------------------------------------------------
const IP_PUERTO = "http://localhost:8080";
//---------------------------------------------------------------------
// main ()
//---------------------------------------------------------------------
describe("Test 3 : Recuerda arrancar el servidor", function () {
  // ....................................................
  // ....................................................
  it("probar GET /Asignatura/:codigo", function (hecho) {
    request.get(
      {
        url: IP_PUERTO + "/Asignatura/23456",
        headers: {
          "User-Agent": "Vicente",
        },
      },
      function (err, respuesta, carga) {
        assert.equal(err, null, "¿ha habido un error?");
        assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)");
        var solucion = JSON.parse(carga);
        console.log(solucion);
        assert.equal(solucion.codigo, "23456");
        assert.equal(solucion.nombre, "Programacion");
        hecho();
      } // callback
    ); // .get
  }); // it
}); // describe
