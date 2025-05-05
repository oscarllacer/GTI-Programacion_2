
//Ejericio: funcion porTres() que tarde tres segundos en devolver el resultado


//--------------------
// R-->porTres()-->R
//---------------------

alert("Primera Practica de JavaScript");

//Funcion porTres que tarda 3s en devolver el resultado
function porTres(callback){
    setTimeout(function(){
         let multiplicacion=numero*3;
         callback(multiplicacion); //llamamos al callback con el resultado
    },3000); 
}


//main
//Nombramos la variable numero y le asignamos un valor
let numero;
numero= "valor";


//El prompt nos permite ingresar un valor y lo convierte en un numero
numero=parseFloat(prompt("Ingrese un numero: "));


//Llamamos a la funcion porTres pasando una funcion como CALLBACK
porTres(function(resultado){
    console.log("El resultado de la multiplicacion es: " + resultado);
    document.write("El resultado de la multiplicacion es: " +  resultado);
});

