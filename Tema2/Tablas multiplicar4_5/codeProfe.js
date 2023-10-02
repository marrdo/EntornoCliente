"use strict";

///////////
//Functions
///////////

function mostrarTabla() {
    //1.Recuperar la division donde vamos a mostrar la tabla.
    let tabla=document.getElementById("divResultado");


    //2.Borramos el contenido de la tabla
    tabla.innerHTML="";

    //3.Recuperamos el numero que ha introducido el usuario
    let num=Number(document.getElementById("textNumero").value);


    //4.Escribimos la tabla de multiplicar
    tabla.innerHTML +=`<p>${num} x 1 = ${num * 1}</p>`;
}


//////////
//MAIN
//////////

let btnTabla = document.getElementById("btnTabla");

btnTabla.addEventListener("click", mostrarTabla);
