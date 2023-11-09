"use strict";

///////////////////
// FUNCTIONS
///////////////////

function registrarDatos(){
    alert("h");
    //Vamos a dejar solo el formualrio de alta.
    altaProducto.classList.remove("oculto");
    entradaSalidaStock.classList.add('oculto');
    alert("o");
}


///////////////////
// MAIN
///////////////////

//Botones
const btnAlta = document.querySelector("#btnFormAltaProducto");
const btnModificar = document.querySelector("#btnFormEntradaSalidaStock");
const btnListarCatalogo = document.querySelector("#btnListadoCatalogo");
const btnListarStock = document.querySelector("#btnListadoStock");

//Secciones
const altaProducto = document.querySelector("#frmAltaProducto");
const entradaSalidaStock = document.querySelector("#frmEntradaSalidaStock");
//Alta a un producto
btnAlta.addEventListener("click", registrarDatos);