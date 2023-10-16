"use strict";


let menu = document.querySelector("#datos");
let btnMostrar= document.getElementById("btndatos");


btnMostrar.addEventListener("click",()=>{
    menu.classList.toggle("divDatosOcultar");
    btnMostrar.value = btnMostrar.value == "Mostrar datos" ? "Ocultar datos": "Mostrar datos";
    
});