"use strict";

/**
 * Empezamos creando la clase producto, para que
 * se use la herencia en los demas productos que se crean y haya
 * un razonamiento logico en el objeto almacen.
 */

class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }

  toString() {
    return `Nombre: ${this.nombre} Precio: ${this.precio} Id producto: ${this.id}`;
  }
}

class Movil extends Producto {
  constructor(id, nombre, precio, modelo, android) {
    super(id, nombre, precio);
    this.modelo = modelo;
    this.android = android;
  }

  toHTMLRow() {
    /*id nombre precio android*/
    return `<tr><td>${this.id}</td><td>${this.nombre}</td><td>${this.precio}</td><td>${this.android}</td></tr>`;
  }
}

class Carcasa extends Producto {
  constructor(id, nombre, precio, material) {
    super(id, nombre, precio);
    this.material = material;
  }

  toHTMLRow() {
    /*id nombre precio material*/

    return `<tr><td>${this.id}</td><td>${this.nombre}</td><td>${this.precio}</td><td>${this.material}</td></tr>`;
  }
}

class StockProducto {
  constructor(idProducto, unidades) {
    this.idProducto = idProducto;
    this.unidades = unidades;
  }

  toHTMLRow() {
    return `<tr><td>${this.idProducto}</td><td>${this.unidades}</td></tr>`;
  }
}

class Almacen {
  constructor() {
    /*Array de producto*/
    this.catalogo = [];
    /*Array de StockProducto*/
    this.stock = [];
  }

  //   altaProducto(Producto /*Devuelve: boolean*/) {
  //     //Recogemos el div donde mandaremos la informacion.
  //     const informacion = document.querySelector("#listado");
  //     //Vaciamos el div listado
  //     informacion.innerHTML = "";
  //     //En caso de que el identificador del producto ya exista se devolverá false
  //     //comprobamos el array
  //     if (this.catalogo > 0) {
  //       this.catalogo.forEach((producto) => {
  //         if (Producto.id == producto.id) {
  //           informacion.innerHTML = `La id de ${Producto} ya se encuentra en el catálogo`;
  //           return false;
  //         }
  //       });
  //       this.catalogo.push(Producto);
  //       informacion.innerHTML = `El producto ${Producto} fue dado de alta.`;
  //       return true;
  //     } else {
  //       this.catalogo.push(Producto);
  //       informacion.innerHTML = `El producto ${Producto} fue dado de alta.`;
  //       return true;
  //     }
  //   }

  altaProducto(Producto /*Devuelve: boolean*/) {
    // Recogemos el div donde mandaremos la información.
    const informacion = document.querySelector("#listado");
    // Vaciamos el div listado
    informacion.innerHTML = "";

    // Comprobamos si el identificador del producto ya existe
    const productoExistente = this.catalogo.find(
      (productoArray) => Producto.id === productoArray.id
    );

    if (productoExistente) {
      // El identificador del producto ya existe
      informacion.innerHTML = `La id ${Producto.id} ya se encuentra en el catálogo`;
      return false;
    }

    // En caso de que el identificador del producto no exista, lo añadimos al array
    this.catalogo.push(Producto);
    informacion.innerHTML = `El producto ${Producto} fue dado de alta.`;
    return true;
  }

  entradaStock(idProducto, unidades /*Devuelve: String*/) {
    //Recupero el div donde mandar informacion
    const informacion = document.querySelector('#listado');
    /**En caso de que el identificador del producto no exista 
     * se devolverá un mensaje indicando que no se realizó la 
     * operación por este motivo.  */
    let idfind = this.catalogo.find((producto)=> producto.id == idProducto);
    if(!idfind){
        informacion.innerHTML = `No se encontró el id ${idProducto}.`
    }else{
        /*
        En caso de que el identificador del producto ya exista se 
        creará un objeto StockProducto y lo insertará en el 
        array stock y se devolverá un mensaje indicando que 
        la operación se realizó correctamente y el número de unidades 
        de ese producto que quedan en el almacén
         */
        let productoStock = new StockProducto(idProducto,unidades);
        this.stock.push(productoStock);
        informacion.innerHTML = `En el almacen quedan ${unidades} de producto`;
    }
  }

  salidaStock(idProducto, unidades /*Devuelve: String*/) 
  {
       //Recupero el div donde mandar informacion
       const informacion = document.querySelector('#listado');
       /**En caso de que el identificador del producto no exista 
        * se devolverá un mensaje indicando que no se realizó la 
        * operación por este motivo.  */
       let idfind = this.catalogo.find((producto)=> producto.id == idProducto);
       if(!idfind){
           informacion.innerHTML = `No se encontró el id ${idProducto}.`
       }else{
           /*
           En caso de que el identificador del producto ya exista se 
           creará un objeto StockProducto y lo insertará en el 
           array stock y se devolverá un mensaje indicando que 
           la operación se realizó correctamente y el número de unidades 
           de ese producto que quedan en el almacén
            */
           let productoStock = new StockProducto(idProducto,unidades);
           this.stock.push(productoStock);
           informacion.innerHTML = `En el almacen quedan ${unidades} de producto`;
       }
  }

  listadoCatalogo /*Devuelve: htmlTable*/() {}

  listadoStock /*Devuelve: htmlTable*/() {}

  numCarcasaStock /*Devuelve: number*/() {}

  importeTotalStock /*Devuelve: number*/() {}
}
