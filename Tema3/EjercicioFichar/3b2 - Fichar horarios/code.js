"use strict";

/////////////////////
// FUNCTIONS
/////////////////////

function fichar() {
	alert("Fichar");
	
	let fecha = new Date().toISOString;
	if (localStorage.arrayFichajes == undefined){
		localStorage.arrayFichajes = JSON.stringify([]);
	}
	

}

function mostrarFichajes() {
	alert("Mostrar fichajes");
	let mostrarStorage = document.querySelector("divFichajes");
	let divFichajes = document.querySelector("#divFichajes");
	divFichajes.innerHTML = "";
	
	divFichajes.innerHTML += "<p>"+localStorage.getItem("entrada")+"</p>"; 
	
}
	

//La ficha de salir hay que meterle un timeout para que el addeventlistener escuche a los 2 o 3 segundos

function resetearFichajes() {
	alert("Resetear");
	localStorage.clear();
}

/////////////////////
// MAIN
/////////////////////

//1.- Add event Listeners
document.querySelector("#btnFichar").addEventListener("click", fichar);
document.querySelector("#btnMostrar").addEventListener("click", mostrarFichajes);
document.querySelector("#btnResetear").addEventListener("click", resetearFichajes);
