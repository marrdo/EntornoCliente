"use strict";

//1.- 1 apartado

//Recogemos todos los check


//Rescatamos div errores

const divErrores = document.querySelector('.error');

//Rescatamos boton

const btn = document.querySelector("[name=boton]");

btn.addEventListener("click", () => {

  const tiempos = document.querySelectorAll("input[name=tiempo]:checked");


    console.log(tiempos);

    //Dejamos el div vacio para cada entrada
    divErrores.innerHTML = "";
  // //Recorremos los check
  // let contador = 0;
  // tiempos.forEach((t) => {
  //   if (t.checked) {
  //     contador++;
  //   }
  // });

  if(tiempos.length>=1 && tiempos.length <3){
    tiempos.forEach((t)=>{
        if(t.checked){
            divErrores.innerHTML += `${t.value} `;
        }
    });
  }else if(tiempos.length==0){
    divErrores.innerHTML += `Debe seleccionar una opción.`
  }else{
    divErrores.innerHTML += `Debe seleccionar maximo 2 opciones.`
  }

});

/*
Para los checkbox es siempre mejor rescartalos desde el querysleector.

document.querySelectorAll("[name=tiempo]:cheked");
*/
