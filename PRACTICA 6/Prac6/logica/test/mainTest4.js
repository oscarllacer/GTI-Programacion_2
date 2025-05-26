//---------------------------------------------------------------------
// mainTest4.js - Vicente Rivas Monferrer
//---------------------------------------------------------------------
const Logica = require("./Logica.js")
var assert = require('assert')
//---------------------------------------------------------------------
// main ()
//---------------------------------------------------------------------
describe("Test 4: buscar asignaturas por apellido", function() {
//---------------------------------------------------------------------
//---------------------------------------------------------------------
  var laLogica = null
//---------------------------------------------------------------------
//---------------------------------------------------------------------
  it("conectar a la base de datos", function(hecho) {
    laLogica = new Logica(
      "../bd/bd_test.bd",
      function(err) {
        if (err) {
          throw new Error("No he podido conectar con datos.db")
        }
        hecho()
      })
  }) // it
//---------------------------------------------------------------------
//---------------------------------------------------------------------
  it("puedo buscar una asignatura",
    async function() {
      var res = await laLogica.buscarAsignaturaPorApellidos("Rivas")
      assert.equal(res.length, 2, "¿no hay un resulado?")
      assert.equal(res[0].codigo, "83012")
    }) // it
  //---------------------------------------------------------------------
  //---------------------------------------------------------------------
}) // describe
