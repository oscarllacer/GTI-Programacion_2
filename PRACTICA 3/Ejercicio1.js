
/*. Diseña, implementa y prueba un objeto pila (consultar Pila) con operaciones apilar(), desapilar() y cima().*/

function crearPila() {
    let elementos = [];
    return {
        apilar(valor) {
            elementos.push(valor);
        },
        desapilar() {
            if (this.estaVacia()) {
                console.log("La pila está vacía");
                return;
            }
            return elementos.pop();
        },
        cima() {
            if (this.estaVacia()) {
                console.log("La pila está vacía");
                return;
            }
            return elementos[elementos.length - 1];
        },
        estaVacia() {
            return elementos.length === 0;
        }
    };
}

// Pruebas
const pila = crearPila();
pila.apilar(10);
pila.apilar(20);
console.log(pila.cima()); // 20
console.log(pila.desapilar()); // 20
console.log(pila.desapilar()); // 10
console.log(pila.desapilar()); // "La pila está vacía"
console.log(pila.cima()); // "La pila está vacía"
console.log(pila.estaVacia()); // true








