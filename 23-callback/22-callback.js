'use strict';

//Declaración de función
function validateField(isVisible, show, hide){
    if (isVisible) {
        show();
    }else{
        hide ();
    }
}

//Expresión de función
let showField = function(){
    alert ("Campo visible");
}

//función flecha
let hideField = () => alert ("Campo oculto");

validateField (false, showField, hideField ); //--> Callbacks function