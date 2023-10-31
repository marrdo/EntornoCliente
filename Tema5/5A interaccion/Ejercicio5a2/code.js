"use strict";

function pintarnegrita() {
    
    clasesParr.toggle("negrita");

}
function cursiva() {
    
    clasesParr.toggle("cursiva");
}

let negrita=document.querySelector("#btnNegrita");
let btnCursiva=document.querySelector("#btnCursiva");



let parr=document.querySelector(".parrafo");


let clasesParr=parr.classList;

btnCursiva.addEventListener("contextmenu",cursiva);
negrita.addEventListener("contextmenu", pintarnegrita);