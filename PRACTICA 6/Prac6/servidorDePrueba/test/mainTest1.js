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
  it("probar GET /longitud", function (hecho) {
    request.get(
      {
        url: IP_PUERTO + "/longitud/hola",
        headers: {
          "User-Agent": "Vicente",
        },
      },
      function (err, respuesta, carga) {
        assert.equal(err, null, "¿ha habido un error?");
        assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)");
        var solucion = JSON.parse(carga);
        assert.equal(solucion.longitud, 4, "¿La longitud no es 4?");
        hecho();
      } // callback
    ); // .get
  }); // it
  //---------------------------------------------------------------------
  //---------------------------------------------------------------------
  it("probar GET /dividir", function (hecho) {
    request.get(
      {
        url: IP_PUERTO + "/dividir?a=10&b=2.5",
        headers: {
          "User-Agent": "Vicente",
        },
      },
      function (err, respuesta, carga) {
        assert.equal(err, null, "¿ha habido un error?");
        assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)");
        var solucion = JSON.parse(carga);
        assert.equal(solucion.division, 4, "¿El cociente es no es 4?");
        hecho();
      } // callback
    ); // .get
  }); // it
  //---------------------------------------------------------------------
  //---------------------------------------------------------------------
  it("probar POST /alta", function (hecho) {
    var datosPersona = {
      dni: "20123459D",
      nombre: "Jose",
      apellidos: "Ramirez",
    };
    request.post(
      {
        url: IP_PUERTO + "/alta",
        headers: {
          "User-Agent": "Vicente",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosPersona),
      },
      function (err, respuesta, carga) {
        assert.equal(err, null, "¿ha habido un error?");
        assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)");
        assert.equal(carga, "OK", "¿La carga no es OK");
        hecho();
      } // callback
    ); // .post
  }); // it
}); // describe
