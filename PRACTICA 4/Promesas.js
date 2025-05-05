/*
Ejercicio de Promesas:

*/

//fUNCION QUE MULTIPLICA UN NUMERO POR DOS DE FORMA ASÍNCRONA USANDO PROMESAS.
function porDos(n){
    return new Promise((resolver)=>{
        setTimeout(()=>{
            resolver(n*2);//resuelve la promesa con el doble numero
        },300)//simulamos una operacion asincrona con 300ms de retraso

    })
}


//Version que usa callbacks(sin promesas)
//recibe un número y un callback, y después de 1000ms llama al callback con el resultado
function porDosCallback(n, callback){
    setTimeout(()=>{
        callback(n*2);//Llama al callback con el resultado
    },1000)//simulamos una operacion asincrona con 1000ms de retraso
    //si en el anterior, hemos tenido, que definir previamente la promes, aqui simplemente hacemos uso del callback, por lo que es un proceso mas sencillo y breve

}

//Implementación con callbacks(callback hell)
//Cada llamada depende de la anterior, generando una estructura dificil de leer y mantener.
porDosCallback(3, function(a){
    porDosCallback(4, function(b){
        porDosCallback(5, function (c) {
            //suma total de todos los resultados y los muestra
            console.log("total de callbacks: ", a+b+c);//seria 3+4+5 =12
        });
    });
});
  



//Implementacion con promesas encadenadas
//En lugar de tener tres funciones callback, solo hay 1 y con los then los voy enlazando
//Se evita el anidamiento de callbacks usando then()
let a,b,c;
porDos(3)//llama a por 2 con 3 y espera el resultado
   .then((r)=>{
       a =r;//guardar el resultado de 3*2
       return porDos(4);//llama a pordos con 4 y devuelve la promes
   })
   .then((r)=>{
       b=r;//guarda el resultado de 4*2
       return porDos(5);//llama a porDos con 5 y devuelve la promesa
   })
   .then((r)=>{
        c=r;//guarda el resultado de 5*2
        return a+b+c; //calcula la suma total y la devuelve
   })
   .then((total)=>{
     console.log("total con promesas=",total);
   });


//Implementacion con async/await

//código más legible y fácil de entender sin necesidad de encadenar then()
async function hacerUnaSuma(){
    let a=await porDos(3); //espera a que se resuelva la promesa de 3*2

    let b=await porDos(4);//creamos la variable, llamamos a la funcion y asignamos el número y nos da el resultado de 4*2
   
    let c=await porDos(5);//espera a que se resuelva la promesa de 5*2

    return a +b+c;//retorna la suma total como resultado
}

//Llama a async y maneja el resultado con then()
//se ejecuta hacerUnaSuma()y cuando la promesa se resuelve, se imprime el resultado.

//el .then hace referencia a la funcion que hemos creado antes (es una forma de llamarse así misma)
//una vez que la funcion se ha llamado, se muestra también el total mediante la funcion flecha
hacerUnaSuma().then((total)=>{
    console.log("Total con async/await=", total)//muestra el resultado final
})