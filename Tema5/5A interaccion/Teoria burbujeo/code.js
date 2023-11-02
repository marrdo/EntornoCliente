"use strict";

// function clickTodos(evt) { alert("¡se hizo click!"); }

// document.getElementById("idEnlace").addEventListener('click', clickTodos);
// document.getElementById("idParrafo").addEventListener('click', clickTodos);
// document.getElementById("idDiv").addEventListener('click', clickTodos);

function clickEnlace(evt) { alert("El enlace"); }
function clickParrafo(evt) { alert("El párrafo"); }
function clickDiv(ev) { alert("La división"); }

document.getElementById("idEnlace").addEventListener('click', clickEnlace);
document.getElementById("idParrafo").addEventListener('click', clickParrafo);
document.getElementById("idDiv").addEventListener('click', clickDiv);