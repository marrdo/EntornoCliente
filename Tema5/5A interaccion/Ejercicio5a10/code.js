"use strict";

function extraerDatos(){
    const fichero = txtFile.files[0];

    if(fichero){
        const reader = new FileReader();
        reader.addEventListener("load", (e) => {
            const contenido = e.target.result;
            datos.innerText=contenido;
        });
    }
}


const capturarArchivo = document.querySelector("input[type=file]");
const datos = document.querySelector(".grafico");
capturarArchivo.addEventListener("change",extraerDatos);