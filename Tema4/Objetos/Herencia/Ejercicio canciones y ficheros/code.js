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
    this.nombreCancion=nombre;
    this.duracion = duracion;
  }

  getDatos() {
    super.getDatos();
    console.log(`Duracion: ${this.duracion} minutos.`);
  }
}


//////////////////
//MAIN
//////////////

let arrayFicheros=[];


//Buscador de eventos
let btnMostrar =document.querySelector('#mostrar');
let btnAgregar = document.querySelector('#agregar');