'use strict';   

let totalKms = prompt("Ingrese el km");

let precioPorKm = 0.25; 

let arranque = 0.55;

let valor = (precioPorKm * totalKms) + arranque;

if(valor < 1.5) {
    valor = 1.5;
}
alert (valor);