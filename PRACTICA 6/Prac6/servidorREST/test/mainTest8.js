//---------------------------------------------------------------------
// mainTest8.js - Vicente Rivas Monferrer
//---------------------------------------------------------------------
var request = require("request");
var assert = require("assert");
//---------------------------------------------------------------------
//---------------------------------------------------------------------
const IP_PUERTO = "http://localhost:8080";
//---------------------------------------------------------------------
// main ()
//---------------------------------------------------------------------
describe("Test 8 : Recuerda arrancar el servidor", function () {
  //---------------------------------------------------------------------
  //---------------------------------------------------------------------
  it("probar POST /realizarMatricula/:nombre&:apellidos&:asignatura", function (hecho) {
    request.post(
      {
        url: IP_PUERTO + "/realizarMatricula/Vicente&Rivas&Programacion",
        headers: {
          "Content-Type": "application/json",
        },
      },
      function (err, respuesta, carga) {
        assert.equal(err, null, "¿ha habido un error?");
        assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)");
        assert.equal(carga, "matricula dada de alta correctamente");
        hecho();
      } // callback
    ); // .get
  }); // it
}); // describe
