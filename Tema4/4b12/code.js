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

btnMostrar.addEventListener("click", () => {
    let Datos;
    
    for (let persona of arraygeneral) {
        Datos+= `<label for="person">${persona[0]}</label>`;
        Datos+=`<select id="person">`;

        for (let ciudad of persona[1]) {
            Datos+= `<option value="${ciudad}">${ciudad}</option>`;
        }

        Datos+=`</select>`;
    }
    mostrarDatos.innerHTML=Datos;
});
