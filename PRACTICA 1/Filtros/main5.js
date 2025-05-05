
//Ejercicio de clase de ejemplo: 


function sumar( inicio, fin, condicion){
    var total= 0;
    for(var i=inicio; i<=fin; i++){
        if(condicion(i)){
            total=total + i
        }
    } //for
    return total
}// ()

//main()
var s = sumar(1, 10, function(e){
    if (e%3==0){
        return true
    }
    return false

})
console.log(s)


//El resultado da 18