/*
PRACTICA 4

Ejercicio de Probar el código:

*/  


console.log("");
console.log("***********SOLUCIÓN MEJORADA************")
console.log("");




// Bloque de asiento con exclusión mutua
var elAsiento = "nadie"; // Variable global (mala idea)
var lock = false; // Cerrojo para evitar condiciones de carrera

// Tras un intervalo, cambia el valor de la variable global (mala idea) elAsiento.
function cambiarNombre(nombre) {
    setTimeout(function () {
        console.log(" *** El asiento pertenece al cliente: " + nombre + " ***");
        elAsiento = nombre;
        lock = false; // Liberamos el cerrojo
    }, 100);
}

// colateralmente, cambia la variable global (mala idea)
function hacerReserva(nombre) {
    if (elAsiento == "nadie" && !lock) {
        lock = true; // Adquirimos el cerrojo para evitar condiciones de carrera
        cambiarNombre(nombre);
    }
}

console.log("Intento reservar para Juan.");
console.log("Como es el primero en reservar, el asiento ");
console.log("debería ser para él");
hacerReserva("Juan");
console.log("Intento reservar para Pepe.");
hacerReserva("Pepe");

setTimeout(() => console.log("El asiento finalmente es para " + elAsiento), 1000);

/*
CONDICIÓN DE CARRERA:
En algunos programas, el resultado está sujeto al orden en el que se realizan distintas operaciones.
Hay varios procesos buscando modificar una variable al mismo tiempo.
Este tipo de errores aparece en las llamadas aplicaciones multihilo.

¿CÓMO EVITAR?
- EXCLUSIÓN MUTUA: Permite que solo un proceso acceda a la variable a la vez (usando cerrojos "locks").
- TRANSACCIONES EN BASES DE DATOS: Para garantizar atomicidad.
- COLAS: Asegurar que las acciones se ejecuten en el orden correcto.
*/

// Solución para la venta de boletos con cola de compras
var boletosDisponibles = 2; // Boletos en la tienda
var colaCompras = []; // Cola para procesar las compras en orden

// Función para procesar la cola de compras una por una
function procesarCola() {
    if (colaCompras.length === 0) return;

    let { nombre, cantidad } = colaCompras.shift(); // Sacamos el primer elemento de la cola
    console.log(`${nombre} está comprando ${cantidad} boleto(s)...`);

    setTimeout(() => {
        if (boletosDisponibles >= cantidad) {
            boletosDisponibles -= cantidad;
            console.log(` ${nombre} compró ${cantidad} boleto(s). Boletos restantes: ${boletosDisponibles}`);
        } else {
            console.log(` ${nombre} intentó comprar ${cantidad} boleto(s), pero ya no quedan suficientes.`);
        }

        procesarCola(); // Llamamos recursivamente para atender la siguiente compra
    }, 100);
}

// Función para añadir una compra a la cola
function comprarBoleto(nombre, cantidad) {
    colaCompras.push({ nombre, cantidad }); // Añadimos la compra a la cola
    if (colaCompras.length === 1) procesarCola(); // Si es el único en la cola, procesamos
}

console.log("\nIniciando venta de boletos...");
comprarBoleto("Laura", 2);
comprarBoleto("Carlos", 1);

setTimeout(() => console.log(` Boletos restantes al final: ${boletosDisponibles}`), 1000);
