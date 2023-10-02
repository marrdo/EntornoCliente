"use strict";
///////////////
//Function
///////////////7
function divisores(n){
	// divResultado.innerHTML = "<p>Divisores de "+n+"</p>";
	for(let i = 1; i <= n; i++){
        if(n % i == 0){
           console.log(i);
			//   divResultado.innerHTML += "<p>" + i + "</p>";
        }
    }
}

///////////
//MAIN
////////////
// let divResultado = document.getElementById("divResultado");
//2.- Preguntamos al usuario hasta que introduce 0 o un dato incorrecto.
let n = -1;
while(n != 0){
	n = prompt("Introduzca un número");
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