'use strict';

function calc (value, sum, rest ){
    let a=1;
    let b=2;
    let result = rest (a,b);
    alert (result)
}
let restar = (a,b) => a+b;
calc ("sumar",restar, restar)
/*
funcion sumar (primerNumero, segundoNumero){
    suma de los dos numeros
    alert del resultado
}

funcion restar (primerNumero, segundoNumero){
    restar de los dos numeros
    alert del resultado
}
*/