"use stricts";

////////////
//Functions
////////////

function calcularArea(radio){
    let area = Math.PI * Math.pow(radio,2);
    return area;
}

////////////
//MAIN
////////////

console.log("Introduce el radio de un círculo");
let radio = prompt("Radio: ");

let area = calcularArea(radio);//.toFixed es para seleccionar los dos primeros decimales

console.log("El area del ciruclo es: " +area.toFixed(2)+" cm²");