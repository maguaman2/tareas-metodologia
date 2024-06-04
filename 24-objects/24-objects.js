'use strict';

let person = {
  firstname: 'Marco',
  lastname: 'Guaman',
  age: 18,
  height: 1.68,
  address: {
    street: "Simon Bolivar", 
    houseNumber: '1-65'
}//'Simon bolivar 1-65'
}

//Acceder a las propiedades del objeto es con un punto [.]
alert ("Nombre: " + person.firstname);
alert ("Apellido: " + person.lastname);
alert ("Edad: " + person.age + " años");
alert ("Calle: " + person.address.street);
alert ("Numero de cada: " + person.address.houseNumber);

