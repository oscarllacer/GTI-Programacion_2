//---------------------------------------------------------------------
// proxy.js - Vicente Rivas Monferrer
//---------------------------------------------------------------------

const IP_PUERTO = "http://localhost:8080";

async function insertarPersonaProxy(datos) {
  var dni = datos.dni;
  var nombre = datos.nombre;
  var apellidos = datos.apellidos;

  var url = "/insertarPersona/";
  console.log(url);

  fetch(IP_PUERTO + url, {
    method: "POST",
    headers: {
      "User-agent": "Vicente",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ dni: dni, nombre: nombre, apellidos: apellidos }),
  }).then((res) => {
    console.log(res);
  });
}
