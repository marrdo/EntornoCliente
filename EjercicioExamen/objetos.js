"use strict";

class Almacen {
    constructor() {
        //array de producto
      this.catalogo = [];
      //array deStock de producto
      this.stock = [];
    }

    altaProducto(oProducto){
        let infor = document.querySelector("#listado");
        let objetoCatalogo;
        for(let i=0;i<this.catalogo.length;i++){
            objetoCatalogo = this.catalogo[i];

            if(objetoCatalogo.id == oProducto.id){

                infor.innerHTML = `El producto con la id: ${oProducto.id} ya existe.`;
                return false;
            } 

        }
        this.catalogo.push(objetoCatalogo);
        infor.innerHTML = `El producto se añadio satisfactoriamente.`
        return true;
    }

    entradaStock(idProducto, unidades){
        let infor = document.querySelector("#listado");

        for(let producto of this.catalogo){
            if (producto.id == idProducto) {
                let stockProd = new StockProducto(idProducto,unidades);
                this.stock.push(stockProd);
                infor.innerHTML = `El producto se añadio satisfactoriamente. Hay ${this.unidades} de producto.`
            }
        }

        infor.innerHTML = `Este producto no se encuentra.`
    }

    
    salidaStock(idProducto, unidades){
        let infor = document.querySelector("#listado");

        for(let producto of this.catalogo){
            if (producto.id == idProducto) {
                let stockProd = new StockProducto(idProducto,unidades);
                this.stock.push(stockProd);
                infor.innerHTML = `El producto se añadio satisfactoriamente. Hay ${this.unidades} de producto.`
            }
        }

        infor.innerHTML = `Este producto no se encuentra.`
    }

}



class Producto {

    constructor(id,nombre,precio){
        this.id=id;
        this.nombre = nombre;
        this.precio = precio;
    }

    toString(){
        return `Id:${id}, Nombre:${nombre}, Precio: ${this.precio}`
    }
}

class StockProducto extends Producto{
    constructor(idProducto,unidades){
        super(idProducto)
        this.unidades=unidades;
    }

    toHTMLRow(){/*TO-DO */
    const row = document.createElement("tr");
    const td = document.createElement("td");

    td.innerHTML = `${this.id}`;
    row.appendChild(td);

    td.innerHTML = `${this.unidades}`;
    row.appendChild(td);
    }


}

class Movil extends Producto{
    constructor(idProducto,nombreProducto,precioProducto,modelo,android){
        super(idProducto,nombreProducto,precioProducto);
        this.modelo= modelo;
        this.android = android;
    }

    toHTMLRow(){
        const row = document.createElement("tr");
        const td = document.createElement("td");

        td.innerHTML = `${this.id}`;
        row.appendChild(td);

        td.innerHTML = `${this.nombre}`;
        row.appendChild(td);

        td.innerHTML = `${this.precio}`;
        row.appendChild(td);

        td.innerHTML = `${this.android}`;
        row.appendChild(td);
    }
}


class Carcasa extends Producto{
    constructor(material){
        this.material=material;
    }

    toHTMLRow(){
        const row = document.createElement("tr");
        const td = document.createElement("td");

        td.innerHTML = `${this.id}`;
        row.appendChild(td);

        td.innerHTML = `${this.nombre}`;
        row.appendChild(td);

        td.innerHTML = `${this.precio}`;
        row.appendChild(td);

        td.innerHTML = `${this.material}`
    }
}