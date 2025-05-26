//---------------------------------------------------------------------
// Logica.js - Vicente Rivas Monferrer
//---------------------------------------------------------------------

const sqlite3 = require("sqlite3");
//---------------------------------------------------------------------
//---------------------------------------------------------------------
module.exports = class Logica {
  //---------------------------------------------------------------------
  // nombreBD: Texto
  // -->
  // constructor () -->
  //---------------------------------------------------------------------
  constructor(nombreBD, cb) {
    this.laConexion = new sqlite3.Database(nombreBD, (err) => {
      // function (err){
      if (!err) {
        this.laConexion.run("PRAGMA foreign_keys = ON");
      }
      cb(err);
    });
  } // ()
  //---------------------------------------------------------------------
  // nombreTabla:Texto
  // -->
  // borrarFilasDe() -->
  //---------------------------------------------------------------------
  borrarFilasDe(tabla) {
    return new Promise((resolver, rechazar) => {
      this.laConexion.run("delete from " + tabla + ";", (err) =>
        err ? rechazar(err) : resolver()
      );
    });
  } // ()
  //---------------------------------------------------------------------
  // nombreTabla:Texto
  // -->
  // consultarTabla() --> {*}
  //---------------------------------------------------------------------
  consultarTabla(tabla) {
    var textoSQL = "select * from " + tabla;
    return new Promise((resolver, rechazar) => {
      this.laConexion.all(textoSQL, (err, res) => {
        err ? rechazar(err) : resolver(res);
      });
    });
  }
  //---------------------------------------------------------------------
  // borrarFilasDeTodasLasTablas() -->
  //---------------------------------------------------------------------
  async borrarFilasDeTodasLasTablas() {
    await this.borrarFilasDe("Matricula");
    await this.borrarFilasDe("Asignatura");
    await this.borrarFilasDe("Persona");
  } // ()
  //---------------------------------------------------------------------
  // datos:{dni:Texto, nombre:Texto: apellidos:Texto}
  // -->
  // insertarPersona() -->
  //---------------------------------------------------------------------
  insertarPersona(datos) {
    var textoSQL = "insert into Persona values($dni, $nombre, $apellidos);";
    var valoresParaSQL = {
      $dni: datos.dni,
      $nombre: datos.nombre,
      $apellidos: datos.apellidos,
    };
    return new Promise((resolver, rechazar) => {
      this.laConexion.run(textoSQL, valoresParaSQL, function (err) {
        err ? rechazar(err) : resolver();
      });
    });
  } // ()
  //---------------------------------------------------------------------
  // dni:Texto
  // -->
  // buscarPersonaPorDNI() <--
  // <--
  // {dni:Texto, nombre:Texto: apellidos:Texto}
  //---------------------------------------------------------------------
  buscarPersonaConDNI(dni) {
    var textoSQL = "select * from Persona where dni=$dni";
    var valoresParaSQL = {
      $dni: dni,
    };
    return new Promise((resolver, rechazar) => {
      this.laConexion.all(textoSQL, valoresParaSQL, (err, res) => {
        err ? rechazar(err) : resolver(res);
      });
    });
  } // ()
  //---------------------------------------------------------------------
  // cerrar() -->
  //---------------------------------------------------------------------
  cerrar() {
    return new Promise((resolver, rechazar) => {
      this.laConexion.close((err) => {
        err ? rechazar(err) : resolver();
      });
    });
  } // ()
  //---------------------------------------------------------------------
  //---------------------------------------------------------------------
  // datos:{nombre:Texto: codigo:Texto}
  // -->
  // insertarAsignatura() -->
  //---------------------------------------------------------------------
  insertarAsignatura(datos) {
    var textoSQL = "insert into Asignatura values($codigo, $nombre);";
    var valoresParaSQL = {
      $codigo: datos.codigo,
      $nombre: datos.nombre,
    };
    return new Promise((resolver, rechazar) => {
      this.laConexion.run(textoSQL, valoresParaSQL, function (err) {
        err ? rechazar(err) : resolver();
      });
    });
  }
  //---------------------------------------------------------------------
  // codigo:Texto
  // -->
  // buscarAsignaturaPorCodigo() <--
  // <--
  // {nombre:texto, codigo:Texto}
  //---------------------------------------------------------------------
  buscarAsignaturaPorCodigo(codigo) {
    var textoSQL = "select * from Asignatura where codigo=$codigo";
    var valoresParaSQL = {
      $codigo: codigo,
    };
    return new Promise((resolver, rechazar) => {
      this.laConexion.all(textoSQL, valoresParaSQL, (err, res) => {
        err ? rechazar(err) : resolver(res);
      });
    });
  } // ()
  // datos:{dni:Texto: codigo:Texto}
  // -->
  // insertarAsignatura() -->
  //---------------------------------------------------------------------
  realizarMatricula(datos) {
    var textoSQL = "insert into Asignatura values($dni, $codigo);";
    var valoresParaSQL = {
      $dni: datos.dni,
      $codigo: datos.codigo,
    };
    return new Promise((resolver, rechazar) => {
      this.laConexion.run(textoSQL, valoresParaSQL, function (err) {
        err ? rechazar(err) : resolver();
      });
    });
  }
  // datos:{apellidos:Texto}
  // -->
  // buscarAsignaturaPorApellidos() -->
  // Lista: [{codigo:Texto}]
  //---------------------------------------------------------------------
  buscarAsignaturaPorApellidos(apellidos) {
    var textoSQL =
      "select Matricula.codigo from Matricula, Persona where apellidos=$apellidos and Persona.dni=Matricula.dni";
    var valoresParaSQL = {
      $apellidos: apellidos,
    };
    return new Promise((resolver, rechazar) => {
      this.laConexion.all(textoSQL, valoresParaSQL, (err, res) => {
        err ? rechazar(err) : resolver(res);
      });
    });
  }
  //---------------------------------------------------------------------
  // dni:Texto, codigo:Texto
  // -->
  // buscarAsignaturaPorNombre() <--
  // <--
  // {json}
  //---------------------------------------------------------------------
  buscarMatricula(dni, codigo) {
    var textoSQL = "select * from Matricula where dni=$dni and codigo=$codigo";
    var valoresParaSQL = {
      $dni: dni,
      $codigo: codigo,
    };
    return new Promise((resolver, rechazar) => {
      this.laConexion.all(textoSQL, valoresParaSQL, (err, res) => {
        err ? rechazar(err) : resolver(res);
      });
    });
  } // ()
  //---------------------------------------------------------------------
  // {nombre:Texto: apellidos:Texto}
  // -->
  // buscarPersonaConNombre() <--
  // <--
  // dni:Texto
  //---------------------------------------------------------------------
  buscarPersonaConNombre(datos) {
    var textoSQL =
      "select dni from Persona where nombre=$nombre and apellidos=$apellidos;";
    var valoresParaSQL = {
      $nombre: datos.nombre,
      $apellidos: datos.apellidos,
    };
    return new Promise((resolver, rechazar) => {
      this.laConexion.all(textoSQL, valoresParaSQL, (err, res) => {
        err ? rechazar(err) : resolver(res);
      });
    });
  } // ()
  //---------------------------------------------------------------------
  // nombre:Texto
  // -->
  // buscarAsignaturaPorNombre() <--
  // <--
  // codigo:Texto
  //---------------------------------------------------------------------
  buscarAsignaturaPorNombre(nombre) {
    var textoSQL = "select codigo from Asignatura where nombre=$nombre";
    var valoresParaSQL = {
      $nombre: nombre,
    };
    return new Promise((resolver, rechazar) => {
      this.laConexion.all(textoSQL, valoresParaSQL, (err, res) => {
        err ? rechazar(err) : resolver(res);
      });
    });
  } // ()
  //---------------------------------------------------------------------
  // codigo:Texto
  // -->
  // buscarTodasAsignaturasDeUnaPersona() <--
  // <--
  // lista<personas>
  //---------------------------------------------------------------------
  buscarTodasPersonasMatriculadasEnUnaAsignaturas(codigo) {
    var textoSQL =
      "select Persona.nombre, Persona.apellidos from Matricula, Persona where Matricula.codigo=$codigo and Matricula.dni=Persona.dni";
    var valoresParaSQL = {
      $codigo: codigo,
    };
    return new Promise((resolver, rechazar) => {
      this.laConexion.all(textoSQL, valoresParaSQL, (err, res) => {
        err ? rechazar(err) : resolver(res);
      });
    });
  } // ()
  //---------------------------------------------------------------------
  // dni:Texto
  // -->
  // buscarTodasAsignaturasDeUnaPersona() <--
  // <--
  // lista<asignaturas>
  //---------------------------------------------------------------------
  buscarTodasAsignaturasDeUnaPersona(dni) {
    var textoSQL =
      "select Asignatura.nombre from Matricula, Asignatura where Matricula.dni=$dni and Matricula.codigo=Asignatura.codigo";
    var valoresParaSQL = {
      $dni: dni,
    };
    return new Promise((resolver, rechazar) => {
      this.laConexion.all(textoSQL, valoresParaSQL, (err, res) => {
        err ? rechazar(err) : resolver(res);
      });
    });
  } // ()
  //---------------------------------------------------------------------
  // codigo:Texto
  // -->
  // desmatricular() -->
  // <--
  //
  //---------------------------------------------------------------------
  desmatricular(dni, codigo) {
    var textoSQL = "delete from Matricula where dni=$dni and codigo=$codigo;";
    var valoresParaSQL = {
      $dni: dni,
      $codigo: codigo,
    };
    return new Promise((resolver, rechazar) => {
      this.laConexion.run(textoSQL, valoresParaSQL, function (err) {
        err ? rechazar(err) : resolver();
      });
    });
  } // ()
  //---------------------------------------------------------------------
  // dni:Texto
  // -->
  // darPersonaDeBajaDandoDNI() -->
  // <--
  //
  //---------------------------------------------------------------------
  darPersonaDeBajaDandoDNI(dni) {
    var textoSQL = "delete from Persona where dni=$dni;";
    var valoresParaSQL = {
      $dni: dni,
    };
    return new Promise((resolver, rechazar) => {
      this.laConexion.run(textoSQL, valoresParaSQL, (err) => {
        err ? rechazar(err) : resolver();
      });
    });
  } // ()
};
