"use strict";

//////////////
//Funcitons
//////////////

function calcularSeno(){
    let anguloGrado=Number(document.getElementById("seno").value);
    let radianes = anguloGrado*(Math.PI/180);
    return Math.sin(radianes);
}

function calcularCoseno(){
    let angulo=document.getElementById("coseno").value;
    let radianes = anguloGrado*(Math.PI/180);
    return Math.cos(radianes);
}

function ejecutador(){
    let seno=calcularSeno();
    let coseno=calcularCoseno();

    return [seno,coseno];
}

function mostrarDatos(){
    let datos=ejecutador();
    let seno=datos[0];
    let coseno=datos[1];

    let resul= document.querySelector(".result");
    resul.innerHTML = `Seno: ${seno}\nCoseno: ${coseno}`;   
    resul.innerHTML += "<img src='imagen.png'>";

}


/////////////
//Main
/////////////

let btnInterpretar = document.getElementById("interpretar");

btnInterpretar.addEventListener("click", )




// Ángulo de rotación en grados especificado por el usuario
//var anguloEnGrados = 45;

// Convierte el ángulo de grados a radianes
//var anguloEnRadianes = anguloEnGrados * (Math.PI / 180);