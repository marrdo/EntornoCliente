"use strict";




//1.- Vamos a identificar el boton

let btnEnviar = document.querySelector('#enviar');

btnEnviar.onclick = ()=>{
    let clave= document.querySelector('#clave').value;
    let valor= document.querySelector('#valor').value;

    document.cookie = `${clave}=${valor}`;
}