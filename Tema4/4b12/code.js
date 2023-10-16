"use strict";

let arraygeneral = [
    ['Juan',   ['Granada',' Londres',' Roma']],
    ['Ana',    ['Bilbao', 'Sevilla', 'Roma']],
    ['Manuel', ['Granada', 'Paris', 'Londres', 'Roma']],
    ['Antonio',['Granada', 'Sevilla','Bilbao']],
    ['Elena',  ['Granada', 'Sevilla']],
    ['Jorge',  ['Sevilla']]
];


let mostrarDatos=document.querySelector(".desplegar");
let btnMostrar=document.querySelector("#abrir");

btnMostrar.addEventListener("click", ()=>{
    for(let persona of arraygeneral){
        mostrarDatos.innerHTML+= `<label for="person">${persona[0]}</label>`;
        mostrarDatos.innerHTML+= `<select id="person">`
        
        for(let ciudad of persona[1]){
            mostrarDatos.innerHTML += `<option value="${ciudad}">${ciudad}</option>`;
        })

    }
});