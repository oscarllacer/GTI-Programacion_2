//---------------------------------------------------------------------
// mainTest2.js - Vicente Rivas Monferrer
//---------------------------------------------------------------------
const Logica = require("./Logica.js");
var assert = require("assert");
//---------------------------------------------------------------------
// main ()
//---------------------------------------------------------------------
describe("Test 2: insertar una asignatura", function () {
  //---------------------------------------------------------------------
  //---------------------------------------------------------------------
  var laLogica = null;
  //---------------------------------------------------------------------
  //---------------------------------------------------------------------
  it("conectar a la base de datos", function (hecho) {
    laLogica = new Logica("../bd/bd_test.bd", function (err) {
      if (err) {
        throw new Error("No he podido conectar con datos.db");
      }
      hecho();
    });
  }); // it
  //---------------------------------------------------------------------
  //---------------------------------------------------------------------
  it("puedo insertar una asignatura", async function () {
    await laLogica.insertarAsignatura({
      codigo: "83012",
      nombre: "Castellano",
    });
    var res = await laLogica.buscarAsignaturaPorCodigo("83012");
    assert.equal(res.length, 1, "¿no hay un resulado?");
    assert.equal(res[0].codigo, "83012");
    assert.equal(res[0].nombre, "Castellano");
  }); // it
  //---------------------------------------------------------------------
  //---------------------------------------------------------------------
  it("no puedo insertar una asignatura con un codigo que ya está", async function () {
    var error = null;
    try {
      await laLogica.insertarAsignatura({
        codigo: "83012",
        nombre: "Castellano",
      });
    } catch (err) {
      error = err;
    }
    assert(
      error,
      "¿Ha insertado el codigo que ya estaba 83012? (¿No ha pasado por el catch()?"
    );
  }); // it
}); // describe
