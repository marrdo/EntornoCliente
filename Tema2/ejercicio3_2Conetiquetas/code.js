"use strict";

////////////////
////Functions
////////////////

function calcularArea() {
    //1.Recuperamos el radio del circulo
    let radio = Number(document.getElementById("txtRadio").value);

    let area=Math.PI*Math.pow(radio,2);
    //2.Mostramos el resultado en la pantalla
    let divResultado = document.getElementById("divResultado");
    divResultado.innerHTML = "<p><strong>area</strong> :" + area+"</p>";

}


///////////////
///MAIN
///////////////

//1.Recupero la etiqueta del boton y le asigno un listener.

let btnCalcular = document.getElementById("btnCalcular");
//let btnCalcular=document.querySelector("#btnCalcular");

btnCalcular.addEventListener("click", calcularArea);