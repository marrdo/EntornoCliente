"use strict";

//////////////
//Functions
/////////////


function procesarDatos(){
    let volumen1= Number((4/3)*Math.PI*Math.pow(1,3));
    let volumen2= Number((4/3)*Math.PI*Math.pow(2,3));

    // Debes devolver los resultados como un objeto o una matriz, no como dos valores separados.
    return [volumen1, volumen2];
    
}

function mostrarDatos(){

    // Debes asignar los resultados a variables dentro de la función mostrarDatos.
    let volumenes= procesarDatos();

    let divResultado = document.querySelector(".result");
    divResultado.innerHTML = "";
    divResultado.innerHTML += "<h1> Resultados </h1>"
    divResultado.innerHTML += `El volumen de la esfera 1 es: ${volumenes[0]} <br>`;
    divResultado.innerHTML += `El volumen de la esfera 2 es: ${volumenes[1]}`;
}

/////////////
//MAIN
////////////

//1.- Bucamos en el documento el id del boton Envio
let btnEnvio = document.getElementById("btnEnvio");

//2.- Agregamos un evento al boton
btnEnvio.addEventListener("click", mostrarDatos); 