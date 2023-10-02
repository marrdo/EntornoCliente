"use strict";


let btnEmpezar= document.getElementById("btnEmpezar");

btnEmpezar.addEventListener('click', calcular)




function calcular(){
    let volumenEsfera1=(4/3)* Math.PI* 1;

    console.log(volumenEsfera1);
    
    let volumenEsfera2=(4/3*Math.PI)*2;
    
    console.log(volumenEsfera2);
    
}