--Obtener toda la información de la tabla Persona
select * from Persona;

--Obtener todos los apellidos de la tabla Persona
select apellidos from Persona;

--Obtener los datos de la persona apellidada “Garcia”
select * from Persona where apellidos="Garcia";

--Apellidos de las personas matriculadas de la asignatura cuyo código es 92301
select Persona.apellidos As Apellidos_Personas_Matriculadas_En_Programación
from Persona, Matricula
where Matricula.codigo="92301" and Matricula.dni=Persona.dni;

--Obtener el nombre de todas las personas matriculadas de Programación 2 (con AND)
select Persona.nombre As Personas_Matriculadas_En_Programación
from Persona, Matricula, Asignatura
where Matricula.dni=Persona.dni and Asignatura.asignatura="Programacion";

--Obtener el nombre de todas las personas matriculadas de Programación 2 (con INNER JOIN)
--select Persona.nombre As Personas_Matriculadas_En_Programación
--from Persona
--Inner Join Matricula, Asignatura
--on Matricula.dni=Persona.dni where Asignatura.asignatura="Programacion";

--Para borrar una fila en SQL:
--Borra la fila de datos con el DNI de Vicente:

--DELETE FROM Persona
--WHERE primary key = 21802687K;

--Para actualizar una fila en SQL:
--Actualizar la fila de datos con el DNI de Vicente:

--UPDATE Persona
--SET dni = "21802692A"
--WHERE Persona.dni = "21802692A";

--Comando para borrar una tabla entera:
--Sustituir Matricula por el nombre de la tabla
--DROP TABLE Matricula;

