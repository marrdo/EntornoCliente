"use strict";


//////////////
////functions
///////////////////////

function calcular(){
    let notamedia=(4+8+9+7+2+6)/6;
    console.log("El resultado es "+ notamedia)
}


////////////
//MAIN
///////////
alert("Hola caracola");

let btnEmpezar=document.getElementById("btnEmpezar");

btnEmpezar.addEventListener('click',calcular);


