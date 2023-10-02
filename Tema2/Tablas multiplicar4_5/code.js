"use strict";

///////////
//Functions
///////////

function calcularTabla(){
    let numero = Number(document.getElementById("txtNumero").value);
    let result;
    let tabla=[];
    for(let i=1; i<11; i++){
        
        result=numero*i;

        tabla.push(result);
    }
    
    array.forEach(element => {
        
    });
}


//////////
//MAIN
//////////

let calcular = document.getElementById("btnCalcula");

calcular.addEventListener("click", calcularTabla);

