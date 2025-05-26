//---------------------------------------------------------------------
// ReglasREST.js - Vicente Rivas Monferrer
//---------------------------------------------------------------------

module.exports.cargar = function (servidorExpress, laLogica) {
  //---------------------------------------------------------------------
  // GET /prueba
  //---------------------------------------------------------------------
  servidorExpress.get("/prueba", function (peticion, respuesta) {
    console.log(" * GET /prueba ");
    respuesta.send("¡Funciona!");
  }); // get /prueba
  //---------------------------------------------------------------------
  // GET /persona/<dni>
  //---------------------------------------------------------------------
  servidorExpress.get("/persona/:dni", async function (peticion, respuesta) {
    console.log(" * GET /persona ");
    // averiguo el dni
    var dni = peticion.params.dni;
    // llamo a la función adecuada de la lógica
    var res = await laLogica.buscarPersonaConDNI(dni);
    // si el array de resultados no tiene una casilla ...
    if (res.length != 1) {
      // 404: not found
      respuesta.status(404).send("no encontré dni: " + dni);
      return;
    }
    // todo ok
    respuesta.send(JSON.stringify(res[0]));
  }); // get /persona
  //---------------------------------------------------------------------
  // DELETE /borrarFila/<tabla>
  //---------------------------------------------------------------------
  servidorExpress.delete(
    "/borrarFila/:tabla",
    async function (peticion, respuesta) {
      console.log(" * DELETE /borrarFila ");
      var tabla = peticion.params.tabla;
      // llamo a la función adecuada de la lógica
      await laLogica.borrarFilasDe(tabla);
      var res = laLogica.consultarTabla(tabla);
      // si el array de resultados no tiene una casilla ...
      if (res.length != 0) {
        // 404: not found
        respuesta.status(404).send("no estan vacias");
        return;
      }
      // todo ok
      respuesta.send("Borrado correctamente");
    }
  ); // get /persona
  //---------------------------------------------------------------------
  // DELETE /borrarFilasDeTodasLasTablas/<>
  //---------------------------------------------------------------------
  servidorExpress.delete(
    "/borrarFilasDeTodasLasTablas",
    async function (peticion, respuesta) {
      console.log(" * DELETE /borrarFilasDe ");
      // llamo a la función adecuada de la lógica
      await laLogica.borrarFilasDeTodasLasTablas();
      var res = laLogica.consultarTabla("Asignatura");
      var res2 = laLogica.consultarTabla("Persona");
      var res3 = laLogica.consultarTabla("Matricula");
      // si el array de resultados no tiene una casilla ...
      if (res.length != 0 || res2.length != 0 || res3.length != 0) {
        // 404: not found
        respuesta.status(404).send("no estan vacias ");
        return;
      }
      // todo ok
      respuesta.send("Borrado correctamente");
    }
  ); //
  //---------------------------------------------------------------------
  // POST /insertarPersona/
  //---------------------------------------------------------------------
  servidorExpress.post(
    "/insertarPersona/",
    async function (peticion, respuesta) {
      console.log(" * POST /insertarPersona ");
      //
      var datos = JSON.parse(peticion.body);
      // llamo a la función adecuada de la lógica
      await laLogica.insertarPersona(datos);
      // si el array de resultados no tiene una casilla ...
      var res = await laLogica.buscarPersonaConDNI(datos.dni);
      console.log(res);
      if (res.length != 1) {
        // 404: not found
        respuesta.status(404).send("No se dio de alta correctamente ");
        return;
      }
      // todo ok
      respuesta.send("Se dio de alta correctamente");
    }
  ); // get /persona
  //---------------------------------------------------------------------
  // POST /insertarAsignatura/
  //---------------------------------------------------------------------
  servidorExpress.post(
    "/insertarAsignatura/",
    async function (peticion, respuesta) {
      console.log(" * POST /insertarAsignatura ");
      //
      var datos = JSON.parse(peticion.body);
      // llamo a la función adecuada de la lógica
      await laLogica.insertarAsignatura(datos);
      // si el array de resultados no tiene una casilla ...
      var res = await laLogica.buscarAsignaturaPorCodigo(datos.codigo);
      if (res.length != 1) {
        // 404: not found
        respuesta.status(404).send("No se creó correctamente ");
        return;
      }
      // todo ok
      respuesta.send("Se creó correctamente");
    }
  ); // get /persona
  //---------------------------------------------------------------------
  // GET /Asignatura/<codigo>
  //---------------------------------------------------------------------
  servidorExpress.get(
    "/Asignatura/:codigo",
    async function (peticion, respuesta) {
      console.log(" * GET /Asignatura ");
      // averiguo el dni
      var codigo = peticion.params.codigo;
      // llamo a la función adecuada de la lógica
      var res = await laLogica.buscarAsignaturaPorCodigo(codigo);
      // si el array de resultados no tiene una casilla ...
      if (res.length != 1) {
        // 404: not found
        respuesta.status(404).send("no encontré el codigo: " + codigo);
        return;
      }
      // todo ok
      respuesta.send(JSON.stringify(res[0]));
    }
  ); // get /persona
  //---------------------------------------------------------------------
  // GET /buscarApellidos/<apellidos>
  //---------------------------------------------------------------------
  servidorExpress.get(
    "/buscarApellidos/:apellidos",
    async function (peticion, respuesta) {
      console.log(" * GET /buscarApellidos ");
      // averiguo el dni
      var apellidos = peticion.params.apellidos;
      // llamo a la función adecuada de la lógica
      var res = await laLogica.buscarAsignaturaPorApellidos(apellidos);
      console.log(res);
      // si el array de resultados no tiene una casilla ...
      if (res.length == 0) {
        // 404: not found
        respuesta.status(404).send("no encontré los apellidos: " + apellidos);
        return;
      }
      // todo ok
      respuesta.send(JSON.stringify(res[0]));
    }
  ); // get /persona
  //---------------------------------------------------------------------
  // POST /realizarMatricula/
  //---------------------------------------------------------------------
  servidorExpress.post(
    "/realizarMatricula/",
    async function (peticion, respuesta) {
      console.log(" * POST /realizarMatricula ");
      //
      var datos = JSON.parse(peticion.body);
      console.log(datos);
      var nombreYApellidos = {
        nombre: datos.nombre,
        apellidos: datos.apellidos,
      };
      var asignatura = datos.asignatura;
      var dni = await laLogica.buscarPersonaConNombre(nombreYApellidos);
      var codigo = await laLogica.buscarAsignaturaPorNombre(asignatura);
      // llamo a la función adecuada de la lógica
      console.log(dni[0].dni);
      console.log(codigo[0].codigo);
      await laLogica.realizarMatricula(dni[0].dni, codigo[0].codigo);
      // si el array de resultados no tiene una casilla ...

      var res = await laLogica.buscarMatricula(dni[0].dni, codigo[0].codigo);
      if (res.length != 1) {
        // 404: not found
        respuesta.status(404).send("No se matriculó correctamente ");
        return;
      }
      // todo ok
      respuesta.send("Se matriculó correctamente");
    }
  ); // get /persona
  //---------------------------------------------------------------------
  // GET /pers/<nombre&apellidos>
  //---------------------------------------------------------------------
  servidorExpress.get(
    "/pers/:nombre&:apellidos",
    async function (peticion, respuesta) {
      console.log(" * GET /pers ");
      // averiguo el nombre
      var nombre = peticion.params.nombre;
      // averiguo los apellidos
      var apellidos = peticion.params.apellidos;
      //lo pasamos a JSON
      var valoresParaSQL = {
        nombre: nombre,
        apellidos: apellidos,
      };
      // llamo a la función adecuada de la lógica
      var res = await laLogica.buscarPersonaConNombre(valoresParaSQL);
      // si el array de resultados no tiene una casilla ...
      if (res.length != 1) {
        // 404: not found
        respuesta
          .status(404)
          .send("no encontré persona: " + nombre + " " + apellidos);
        return;
      }
      // todo ok
      respuesta.send(JSON.stringify(res[0]));
    }
  ); // get /persona
  //---------------------------------------------------------------------
  // GET /asig/<nombre>
  //---------------------------------------------------------------------
  servidorExpress.get("/asig/:nombre", async function (peticion, respuesta) {
    console.log(" * GET /asig ");
    // averiguo el nombre
    var nombre = peticion.params.nombre;
    // llamo a la función adecuada de la lógica
    var res = await laLogica.buscarAsignaturaPorNombre(nombre);
    // si el array de resultados no tiene una casilla ...
    if (res.length != 1) {
      // 404: not found
      respuesta.status(404).send("no encontré asignatura: " + nombre);
      return;
    }
    // todo ok
    respuesta.send(JSON.stringify(res[0]));
  }); // get /asig
  //---------------------------------------------------------------------
  // GET /asignaturasPersona/<dni>
  //---------------------------------------------------------------------
  servidorExpress.get(
    "/personasAsignatura/:codigo",
    async function (peticion, respuesta) {
      console.log(" * GET /personasAsignatura ");
      // averiguo los apellidos
      var codigo = peticion.params.codigo;
      var res = await laLogica.buscarTodasPersonasMatriculadasEnUnaAsignaturas(
        codigo
      );
      if (res.length == 0) {
        respuesta
          .status(404)
          .send("no encontré personas matriculadas en : " + codigo);
        return;
      }
      respuesta.send(JSON.stringify(res));
    }
  );
  //---------------------------------------------------------------------
  // GET /asignaturasPersona/<dni>
  //---------------------------------------------------------------------
  servidorExpress.get(
    "/asignaturasPersona/:dni",
    async function (peticion, respuesta) {
      console.log(" * GET /asignaturasPersona ");
      // averiguo los apellidos
      var dni = peticion.params.dni;
      var res = await laLogica.buscarTodasAsignaturasDeUnaPersona(dni);
      if (res.length == 0) {
        respuesta.status(404).send("no encontré asignaturas de: " + dni);
        return;
      }
      respuesta.send(JSON.stringify(res));
    }
  );
  //---------------------------------------------------------------------
  // DELETE /matricula/dni&codigo
  //---------------------------------------------------------------------
  servidorExpress.delete(
    "/borrarMatricula/:dni&:codigo",
    async function (peticion, respuesta) {
      console.log(" * DELETE /matricula ");
      var codigo = peticion.params.codigo;
      var dni = peticion.params.dni;
      await laLogica.desmatricular(dni, codigo);
      var res = await laLogica.buscarMatricula(dni, codigo);

      if (res.length != 0) {
        respuesta.status(404).send("no se ha borrado correctamente");
        return;
      }
      respuesta.send("desmatriculado con éxito");
    }
  );
  //---------------------------------------------------------------------
  //---------------------------------------------------------------------
  servidorExpress.delete(
    "/borrarPersona/:dni",
    async function (peticion, respuesta) {
      console.log(" * DELETE /persona ");
      var dni = peticion.params.dni;

      await laLogica.darPersonaDeBajaDandoDNI(dni);

      var res = await laLogica.buscarPersonaConDNI(dni);

      if (res.length != 0) {
        respuesta.status(404).send("no se ha borrado correctamente");
        return;
      }
      respuesta.send("dado de baja con éxito");
    }
  );
};
//---------------------------------------------------------------------
//---------------------------------------------------------------------
