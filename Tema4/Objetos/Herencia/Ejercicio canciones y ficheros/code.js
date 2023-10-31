"use strict";


///////////
//CLASES
///////////////
class Fichero {
  // Constructor de la clase
  constructor(nombre, tamanio) {
    this.nombreFichero = nombre;
    this.tamanio = tamanio;
  }

  getDatos() {
    console.log(`Nombre del fichero ${this.nombre}(${this.tamanio}Mb).`);
  }
  extension() {}
}

class Cancion extends Fichero {
  constructor(nombre, duracion) {
    super();
    this.nombreCancion=nombre;
    this.duracion = duracion;
  }

  getDatos() {
    super.getDatos();
    console.log(`Duracion: ${this.duracion} minutos.`);
  }
}


///////////////
//MAIN
//////////////

let arrayFicheros=[];


//Buscador de eventos
let btnMostrar =document.querySelector('#mostrar');
let btnAgregar = document.querySelector('#agregar');

let pruebas=document.querySelector(".pruebas");

btnAgregar.onclick=function(){

  if(document.querySelector("#radio2").checked){

    let nombreCancion = document.querySelector("#nombreCancion").value;
    let duracion = document.querySelector("#duracion").value; 
    
    const Cancion=new Cancion(nombreCancion, duracion);
    arrayFicheros.push(Cancion);

    alert(nombreCancion+","+duracion);
  }else if(document.querySelector("#radio1").checked){

    let nombreFichero= document.querySelector("#nombreFichero").value;
    let tamanio=document.querySelector("#tamanio").value;

    const fichero=new Fichero(nombreFichero, tamanio);
    arrayFicheros.push(fichero);
    alert(nombreFichero+","+tamanio);
  }

  pruebas.innerHTML=arrayFicheros;
}

btnMostrar.onclick=function(){
  pruebas.innerHTML="";
  let datos;
  for(let item of arrayFicheros){
    datos=item.getDatos();
    alert(datos);
        pruebas.innerHTML=`<p>${datos}</p><br>`;
        
  }
}

//Mirar para examen checkeds!!!!!!!!!!!!