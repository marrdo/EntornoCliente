"use strict";



const btnAñadir = document.querySelector('#añadir');
const btnEliminar = document.querySelector('#eliminar');

let parr = document.querySelector('#parrafo');

btnAñadir.addEventListener('click',()=>{
    alert('helloAd');
    let texto = document.querySelector('input [name=texto1]').value;
    alert(texto);
    parr.classList.add(`${texto}`);
});

btnEliminar.addEventListener('click',()=>{
    alert('helloElim');
    let texto = document.querySelector('input [name=texto1]').value;
    alert(texto);
    parr.classList.remove(`${texto}`);
});