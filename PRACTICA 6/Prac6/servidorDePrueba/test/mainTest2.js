//---------------------------------------------------------------------
// mainTest2.js
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
  it("probar POST /dividirV2", function (hecho) {
    var datos = {
      a: 10,
      b: 2,
    };
    request.post(
      {
        url: IP_PUERTO + "/dividirV2",
        headers: {
          "User-Agent": "Vicente",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      },
      function (err, respuesta, carga) {
        assert.equal(err, null, "¿ha habido un error?");
        assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)");
        assert.equal(carga, '{"a":10,"b":2,"division":5}');
        var car = JSON.parse(carga);
        console.log(car);
        assert.equal(car.division, 5);
        hecho();
      } // callback
    ); // .post
  }); // it
}); // describe
