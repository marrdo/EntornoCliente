"use strict";



document.querySelector("#enviar").addEventListener("click", ()=>{
    let edad = document.querySelector("#edad").value;
    if (edad >= 18){
        return true;
    }
    else{
        return false;
    }
})