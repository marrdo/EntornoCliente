"use strict"


let promp = prompt("Introduce un numero: ");

while (promp != 0) {
    
    promp = Number(promp);
    
    for (let i = 1; i <= promp; i++) {
        if (promp % i == 0) {
            console.log(i);
        }
    }
    break;
}

document.getElementById("btnEmpezar").addEventListener("click")