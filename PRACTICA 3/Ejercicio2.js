/* Diseña e implementa una estructura con objetos de JavaScript para representar tu horario de clases. Utiliza como base el siguiente ejemplo, pero añadiendo la hora de inicio de cada asignatura.
var horario = {
lunes : ["física", "matemáticas", "inglés"],
martes : ["programación", "matemáticas"],
miercoles : ["ingles", "física"],
jueves : ["física", "matemáticas", "inglés"],
viernes : ["programación", "matemáticas"],
}
*/
var horario ={
    lunes: [
         { materia: "Física", hora: "08:00" },
         { materia: "Matemáticas", hora: "10:00" },
         { materia: "Inglés", hora: "12:00" }
    ],
    martes: [
        { materia: "Programación", hora: "09:00" },
        { materia: "Matemáticas", hora: "11:00" }
    ],
    miercoles: [
        { materia: "Inglés", hora: "08:30" },
        { materia: "Física", hora: "10:30" }
    ],
    jueves: [
        { materia: "Física", hora: "08:00" },
        { materia: "Matemáticas", hora: "10:00" },
        { materia: "Inglés", hora: "12:00" }
    ],
    viernes: [
        { materia: "Programación", hora: "09:00" },
        { materia: "Matemáticas", hora: "11:00" }
    ]

}
//Convertir el objeto a JSON:
var horarioJSON = JSON.stringify(horario, 4); //EL 4 es para que cuando se cree el JSON se haga en 4 filas. SI quito el 4 el jSON se haría todo en una linea


console.log(horarioJSON);