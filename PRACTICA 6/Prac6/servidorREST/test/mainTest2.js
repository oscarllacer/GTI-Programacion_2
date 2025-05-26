//---------------------------------------------------------------------
// mainTest2.js - Vicente Rivas Monferrer
//---------------------------------------------------------------------
var request = require("request");
var assert = require("assert");
//---------------------------------------------------------------------
//---------------------------------------------------------------------
const IP_PUERTO = "http://localhost:8080";
//---------------------------------------------------------------------
// main ()
//---------------------------------------------------------------------
describe("Test 2 : Recuerda arrancar el servidor", function () {
  //---------------------------------------------------------------------
  //---------------------------------------------------------------------
  it("probar GET /pers/:nombre&:apellidos", function (hecho) {
    request.get(
      {
        url: IP_PUERTO + "/pers/Vicente&Rivas",
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
        hecho();
      } // callback
    ); // .get
  }); // it
}); // describe
