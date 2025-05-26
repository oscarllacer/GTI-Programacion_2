//---------------------------------------------------------------------
// mainTest7.js - Vicente Rivas Monferrer
//---------------------------------------------------------------------
var request = require("request");
var assert = require("assert");
//---------------------------------------------------------------------
//---------------------------------------------------------------------
const IP_PUERTO = "http://localhost:8080";
//---------------------------------------------------------------------
// main ()
//---------------------------------------------------------------------
describe("Test 7 : Recuerda arrancar el servidor", function () {
  //---------------------------------------------------------------------
  //---------------------------------------------------------------------
  it("probar POST /insertarAsignatura/:codigo&:nombre", function (hecho) {
    request.post(
      {
        url: IP_PUERTO + "/insertarAsignatura/80513&Proyecto",
        headers: {
          "User-Agent": "Vicente",
        },
      },
      function (err, respuesta, carga) {
        assert.equal(err, null, "¿ha habido un error?");
        assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)");
        assert.equal(carga, "asignatura dada de alta correctamente");
        hecho();
      } // callback
    ); // .get
  }); // it
}); // describe
