//---------------------------------------------------------------------
// mainServidorRest.js - Vicente Rivas Monferrer
//---------------------------------------------------------------------
const express = require("express");
const bodyParser = require("body-parser");
//---------------------------------------------------------------------
// main()
//---------------------------------------------------------------------
function main() {
  // creo el servidor express
  var servidorExpress = express();
  // para poder acceder a la carga de la petición http, es necesario que el archivo sea en formato JSON
  servidorExpress.use(
    bodyParser.text({
      type: "application/json",
    })
  );
  // cargo las reglas REST
  var reglas = require("../ReglasREST.js");
  reglas.cargar(servidorExpress);
  // arranco el servidor
  var servicio = servidorExpress.listen(8080, function () {
    console.log("servidor REST escuchando en el puerto 8080 ");
  });
  // capturo control-c para cerrar el servicio ordenadamente
  process.on("SIGINT", function () {
    console.log(" terminando ");
    servicio.close();
  });
} // ()
//---------------------------------------------------------------------
//---------------------------------------------------------------------
main();
//---------------------------------------------------------------------
//---------------------------------------------------------------------
