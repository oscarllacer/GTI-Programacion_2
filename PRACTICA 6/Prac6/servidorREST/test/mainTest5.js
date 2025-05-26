//---------------------------------------------------------------------
// mainTest5.js - Vicente Rivas Monferrer
//---------------------------------------------------------------------
var request = require("request");
var assert = require("assert");
//---------------------------------------------------------------------
//---------------------------------------------------------------------
const IP_PUERTO = "http://localhost:8080";
//---------------------------------------------------------------------
// main ()
//---------------------------------------------------------------------
describe("Test 5 : Recuerda arrancar el servidor", function () {
  //---------------------------------------------------------------------
  //---------------------------------------------------------------------
  it("probar GET /buscarApellidos/:apellidos", function (hecho) {
    request.get(
      {
        url: IP_PUERTO + "/buscarApellidos/García",
        headers: {
          "User-Agent": "Vicente",
        },
      },
      function (err, respuesta, carga) {
        assert.equal(err, null, "¿ha habido un error?");
        assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)");
        var solucion = JSON.parse(carga);
        console.log(solucion);
        assert.equal(solucion[0].codigo, "92301");
        hecho();
      } // callback
    ); // .get
  }); // it
}); // describe
