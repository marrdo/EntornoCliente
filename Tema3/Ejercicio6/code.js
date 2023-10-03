"use strict";

let cadena = "* Uno\n Dos\n Tres\n Cuatro";


function imprimirLista(cadena) {
    muestra.InnerHTML += <ul>;
        for (let i = 0; i < cadena.length; i++) {
            if(cadena[i]!="\n") {
                muestra.InnerHTML += <li>${cadena[i]}</li>
            

        muestra.InnerHTML+=</ul>;}
};


