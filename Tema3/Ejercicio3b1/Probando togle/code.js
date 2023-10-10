"use strict";

let menu = document.querySelector("#datos");
let btnMostrar= document.querySelector("#btndatos");
btnMostrar.addEventListener("click",()=>{
    menu.classList.toggle("divDatos--ocultar");
    menu.classList.toggle("modes_menu--mostrar");
});