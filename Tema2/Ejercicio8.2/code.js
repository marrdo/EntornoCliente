"use strict";
///////////////
//Function
///////////////

/**
 * Calcula los divisores de un numero que recibe como parametro.
 * @param {Number} n 
 */
function divisores(n){
    //1.- Creamos un parrafo con informacion
	 let texto = `<p>Divisores de ${n}</p>`;
     texto += "<ul>";
	for(let i = 1; i <= n; i++){
        if(n % i == 0){
           //console.log(i);
			   texto+= "<li>" + i + "</li>";
        }
    }
    texto += "</ul>";
    divResultado.innerHTML += texto;
}

///////////
//MAIN
////////////
// let divResultado = document.getElementById("divResultado");
//2.- Preguntamos al usuario hasta que introduce 0 o un dato incorrecto.
let n = -1;
while(n != 0){
	n = prompt("Introduzca un número");
    if(n==" "){
        divResultado.innerHTML = "<p>No selecciono nada.</p>";
        break;
    
    }
	if(n == 0){
		divResultado.innerHTML = "<p>Seleccionó 0.</p>";
		break;
	}
	n = Number(n);
	if(isNaN(n)){
		divResultado.innerHTML = "<p>Debe introducir un numero</p>";
		break;
	}
	divisores(n);
}