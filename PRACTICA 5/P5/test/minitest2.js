import Punto from "./Punto.js";
import assert from "assert";

// ––––––––––––––
// Pruebas de distancia()
// ––––––––––––––
describe("Prueba de distancia()", function () {
    let p1 = new Punto(0, 0);
    let p2 = new Punto(3, 4);

    // ––––––––––––––––––––-
    // Test: distancia entre p1 y p2
    it("La distancia de p1 a p2 es 5", function (done) {
        assert.strictEqual(p1.distancia(p2), 5);
        done();
    });

    // ––––––––––––––––––––-
    // Test: distancia entre p2 y p1
    it("La distancia de p2 a p1 es 5", function (done) {
        assert.strictEqual(p2.distancia(p1), 5);
        done();
    });

    // ––––––––––––––––––––-
    // Test: distancia de p1 a sí mismo
    it("La distancia de p1 a p1 es 0", function (done) {
        assert.strictEqual(p1.distancia(p1), 0);
        done();
    });
});