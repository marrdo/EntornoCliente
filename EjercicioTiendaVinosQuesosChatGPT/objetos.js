"use strict";

class Tienda {
  constructor(almacen=[]) {
    this.almacen = almacen;
  }

  agregarProducto(objeto) {
    
    const divListado = document.querySelector('#seccionListado');
    divListado.innerHTML = "";
    if(this.almacen.some((obj)=>{
        return obj.nombre == objeto.nombre;
    })){
        divListado.innerHTML += `El producto ${objeto.nombre} ya existe en la tienda.`
    }else{
        this.almacen.push(objeto);
        divListado.innerHTML += `El producto se agregó correctamente.`;
    }
  }

  venderProducto(oNombre){
    const divListado = document.querySelector('#seccionListado');
    divListado.innerHTML = "";
    if(this.almacen.some((obj)=>{
        return obj.nombre == oNombre;
    })){
        objeto.estado = 'agotado';
        divListado.innerHTML += `El producto ${oNombre} ha sido vendido.`
    }else{
        
        divListado.innerHTML += `El producto no se encontró.`;
    }

  }


}

class Vino {
  constructor(nombre, anioCosecha, tipo, precio, estado) {
    this.nombre = nombre;
    this.anioCosecha = anioCosecha;
    this.tipo = tipo;
    this.precio = precio;
    this.estado = estado;
  }

}

class Queso{
  constructor(nombre, tipo , origen, precio, estado) {
    this.nombre = nombre;
    this.origen = origen;
    this.tipo = tipo;
    this.precio = precio;
    this.estado = estado;
  }

}