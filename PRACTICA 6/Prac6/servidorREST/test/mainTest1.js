//---------------------------------------------------------------------
// mainTest1.js - Vicente Rivas Monferrer
//---------------------------------------------------------------------
var request = require("request");
var assert = require("assert");
//---------------------------------------------------------------------
//---------------------------------------------------------------------
const IP_PUERTO = "http://localhost:8080";
//---------------------------------------------------------------------
// main ()
//---------------------------------------------------------------------
describe("Test 1 : Recuerda arrancar el servidor", function () {
  //---------------------------------------------------------------------
  //---------------------------------------------------------------------
  it("probar que GET /prueba responde ¡Funciona!", function (hecho) {
    request.get(
      {
        url: IP_PUERTO + "/prueba",
        headers: {
          "User-Agent": "Vicente",
        },
      },
      function (err, respuesta, carga) {
        assert.equal(err, null, "¿ha habido un error?");
        assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)");
        assert.equal(carga, "¡Funciona!", "¿La carga no es ¡Funciona!?");
        hecho();
      } // callback()
    ); // .get
  }); // it
  //---------------------------------------------------------------------
  //---------------------------------------------------------------------
  it("probar GET /persona/:dni", function (hecho) {
    request.get(
      {
        url: IP_PUERTO + "/persona/44927858A",
        headers: {
          "User-Agent": "Vicente",
        },
      },
      function (err, respuesta, carga) {
        assert.equal(err, null, "¿ha habido un error?");
        assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)");
        var solucion = JSON.parse(carga);
        console.log(solucion);
        assert.equal(solucion.dni, "21802687K");
        assert.equal(solucion.nombre, "Vicente");
        assert.equal(solucion.apellidos, "Rivas");
        hecho();
      } // callback
    ); // .get
  }); // it
}); // describe
