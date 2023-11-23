"use strict";






//1.- recuperamos la div

const divResultado = document.querySelector('.resultado');

//2.- recuperamos el cuadro

const cuadroTexto = document.querySelector('[name=cuadroTexto]');

//3.- añadimos el evento al cuadro

cuadroTexto.addEventListener('keyup',(letra) =>{
    if (letra.key !='Backspace' || letra.key != 'Control') {
        divResultado.innerHTML += letra.key;
    }
    
});