/*
Escribir una función que reciba como argumento la
edad de una persona y devuelva true si mayor a 18
y false si es menor.
*/

function calcAge (age){
    /*if (age >= 18){
        return true;
    }else{
        return false;
    }*/
    return (age >= 18);
} 

let edad = Number(prompt("Ingrese su edad"));

let result = calcAge(edad);
alert ("el resultado es: "+ result);