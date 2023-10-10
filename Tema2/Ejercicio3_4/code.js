"use strict";

//1.- Creamos el array y variables globales.
let array = [];
let divRespuesta = document.querySelector(".respuesta");

////////////
//Functions
////////////

//3.- Creamos la funcion que añadirá los numeros al array.
function aniadirNumero(){
    
    //4.- Reiniciamos el div de respuesta por si ha habido algun mensaje.
    divRespuesta.innerHTML = "";
    //5.- Sacamos el valor del numero y le hacemos un casteo con Number.
    let numero= Number(document.getElementById("numero").value);

    //6.- Si el numero es NaN o vacio, mostramos un mensaje.
    if(isNaN(numero) || numero === ""){
        divRespuesta.innerHTML = "Introduce un numero.";
    }else{
        array.push(numero);
    }

    //7.- Dejamos el campo vacio.
    document.getElementById("numero").value = "";

    
}

//9.- Creamos la funcion que mostrará los datos del array.
function mostrarDatos(){
    divRespuesta.innerHTML = "";
    //10.- Puede que el usuario se equivoque, comprobemos que el array no está vacio.
    if(array.length === 0){
        divRespuesta.innerHTML = "No se han introducido notas.";
        return;
    }
    //11.- Creamos las variables locales de la funcion.
    let media;
    let suma = 0;

    //12.- Mostramos los datos del array y hacemos la media.
    for(let nota of array){
        divRespuesta.innerHTML += nota + " ";
        suma += nota;
    }

    media=suma/array.length;

    divRespuesta.innerHTML += "<br>La media es: " + media.toFixed(2);
    array = [];
}


////////////
//Main
///////////





//2.- Buscamos un evento en el boton Aniadir.
let btnAniadir = document.getElementById("btnAniadir");
btnAniadir.addEventListener("click", aniadirNumero);

//8.- Buscamos el boton envio, y creamos una acción por si ocurre algun evento.
let btnEnvio= document.getElementById("btnEnvio");
btnEnvio.addEventListener("click", mostrarDatos);