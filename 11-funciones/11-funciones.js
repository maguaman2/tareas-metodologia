'use strict';
//1. declarando la función
function mostrarMensaje(){
    alert ("Hola");
}

//2. Llamar a la función
//mostrarMensaje();

function mostrarMensajeConNombre(nombre){
    alert ("Hola "+nombre);
}
//mostrarMensajeConNombre("Juan"); // Juan es argumento

function generarFrase (){
    return "Hola Mundo";
}
let result;
result = generarFrase ();
//alert ("El valor de retorno de la funcion es : ");

function sum (primerValor, segundoValor){
    let result = primerValor + segundoValor;
    return result;
}

let resultado = sum(3,6);






