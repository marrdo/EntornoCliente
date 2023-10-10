"use strict";


let menu = document.querySelector("#datos");
let btnMostrar= document.getElementById("btndatos");


btnMostrar.addEventListener("click",()=>{
    menu.classList.toggle("divDatos--ocultar");
    
});