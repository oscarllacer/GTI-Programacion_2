//function e es un callback
/*
Un callback, es una funcion que se pasa como argumento, a otra funcion y se ejecuta dentro 
de esa funcion en algun momento determinado.
function(e){.....} -> funcion anonima, se pasa a otra funcion cuando se cumplen x condiciones*/ 


//funcion para calcular la integral (regla del trapecio)
/*
f la funcion que queremos integrar
a limite inferior del intervalo 
b limite superior
n numero de subitervalos para la aproximacion
Viendo la integral de f(x) en el intervalo [a, b]
*/
function integral(f,a,b,n){
    //paso entre subintervalos
    let h=(b-a)/n;
    //suma inicial(extremos del intervalo)
    let suma =f(a) + f(b) /2;

    //Sumar puntos intermedios
    for (let i=1;i <n ;i++){
        suma += f(a + i * h);
    }
    return suma * h //resultado aproximado de la integral
}

/*
funcion test()
Aqui definimos la funcion f(x)= x^2 y calculamos su integral desde 0 hasta 1
comparar el resultado con el valor esperado-> que es el resultado exacto de la integral de x^2 en el intervalo [0,1]
¿Cómo se pasa el text?-> está en un margen de error de 0.01 */
function test(){
    //definir la funcion a integrar (f(x) = x^2)
    function f(x){
        return x*x;
    }

// Calcular la integral de x^2 desde 0 hasta 1
let resultado=integral(f,0,1,1000) //1000 subintervalos para un resultado mas preciso
//verificar que el resultado este dentro del margen de error
let esperado = 1 / 3;

//ver si el resultado es suficientemente cercano al esperado 
let diferencia = resultado-esperado;
if (diferencia < 0.01 && diferencia > -0.01){
    console.log("La integral es correcta")
}else{
    console.log("error")
}
}

//ejecutar prueba
test();