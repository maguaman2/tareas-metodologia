'use strict';
//Forma mas comun.
function sum (a,b){
    return a + b;
}
// Expresión de función
let sumExp = function (a,b){
    return a + b;
}
// Función flecha
let sumFlecha = (a,b) => a + b;
// Llamar o invocar a las funciones

let result = sumExp (2,3);
alert (result);
