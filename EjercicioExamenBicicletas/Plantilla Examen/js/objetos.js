"use strict";

function Bicicleta(localizador, anio, vendida = false) {
  this.localizador = localizador;
  this.anio = anio;
  this.vendida = vendida;
}

Bicicleta.prototype.toHTMLrow = function () {
    return `<tr><td>${this.localizador}</td><td>${this.anio}</td><td>${this.vendida}</td></tr>`;
  };

function Carretera(localizador, anio, vendida, numPlatos) {
  Bicicleta.call(this, localizador, anio, vendida);
  this.numPlatos = numPlatos;
}

Carretera.prototype = Object.create(Bicicleta.prototype);
Carretera.prototype.constructor = Carretera;

Carretera.prototype.toHTMLrow = function () {
    if (this.vendida == true) {
        return `<tr><td>${this.localizador}</td><td>${this.anio}</td><td>Vendida</td><td>${this.numPlatos}</td></tr>`;    
    }else{
        return `<tr><td>${this.localizador}</td><td>${this.anio}</td><td>En stock</td><td>${this.numPlatos}</td></tr>`;
    }
    
  };

function Montania(localizador, anio, vendida, numSuspensiones) {
  Bicicleta.call(this, localizador, anio, vendida);
  this.numSuspensiones = numSuspensiones;
}

Montania.prototype = Object.create(Bicicleta.prototype);
Montania.prototype.constructor = Montania;

Montania.prototype.toHTMLrow = function () {
    if (this.vendida == true) {
        return `<tr><td>${this.localizador}</td><td>${this.anio}</td><td>Vendida</td><td>${this.numSuspensiones}</td></tr>`;    
    }else{
        return `<tr><td>${this.localizador}</td><td>${this.anio}</td><td>En stock</td><td>${this.numSuspensiones}</td></tr>`;
    }
    
  };
// Instanciar Carretera
//const carretera = new Carretera('XYZ789', 2021, true, 2);

// Instanciar Montania
//const montania = new Montania('DEF456', 2023, false, 4);

class Tienda {
  constructor(tBicis = [], numVentas) {
    this.tBicis = tBicis;
    this.numVentas = numVentas;
  }

  /**
   * Agrega una nueva bicicleta a la tienda.
   *
   * @param {Bicicleta} OBici - Objeto que representa la bicicleta a agregar.
   * @returns {boolean} - Devuelve true si la bicicleta se agregó con éxito, false si falló.
   * @memberof Tienda
   */
  altaBicicleta(OBici) {
    //Si el array tiene un tamaño de 0 introduzco la bicicleta
    if (this.tBicis.length == 0) {
      this.tBicis.push(OBici);
      alert("Alta bicicleta OK");
    } else {
      //Si hay mas de uno primero compruebo si el localizador de la bici existe en el array.
      let idBici = OBici.localizador;
      let biciEnTienda = this.tBicis.find(
        (objetoQueRecorro) => objetoQueRecorro.localizador == idBici
      );
      //Si esta en la tienda mando un alert avisando de que la bici ya esta en la tienda
      if (biciEnTienda) {
        alert("Bicicleta registrada previamente");
      } else {
        //Si no está en la tienda introduzco la bici en el array y mando el aviso de alerta.
        this.tBicis.push(OBici);
        alert("Alta bicicleta OK");
      }
    }
  }
  /**
   *
   * @param {*} sLocalizador
   * @returns {String}
   */
  ventaBici(sLocalizador) {
    let buscarLocalizador = this.tBicis.find(
        (bicicleta) => bicicleta.localizador === sLocalizador
    );

    if (buscarLocalizador) {
        for (let bicicleta of this.tBicis) {
            if (bicicleta.localizador === buscarLocalizador.localizador && !bicicleta.vendida) {
                bicicleta.vendida = true;
                alert('Bicicleta vendida');
                return;  // Sale del método después de vender la bicicleta
            } else if (bicicleta.localizador === buscarLocalizador.localizador && bicicleta.vendida) {
                alert('Bicicleta ya vendida');
                return;  // Sale del método si la bicicleta ya está vendida
            }
        }
    } else {
        alert('La bicicleta no existe.');
    }
}
    numCarretera(){
        let biciCarretera=0;
        this.tBicis.forEach((bicicleta)=>{
            if(bicicleta instanceof Carretera){
                biciCarretera++;
            }
        });

        return biciCarretera;
    }
    numMontania(){
        let biciMontania=0;

        this.tBicis.forEach((bicicleta)=>{
            if(bicicleta instanceof Montania){
                biciMontania++;
            }
        });
        return biciMontania;

    }
    numTotal(){
        return this.tBicis.length;
    }
    numVenta(){
        let biciVendidas=0;

        this.tBicis.forEach((bicicleta)=>{
            if(bicicleta.vendida == true){
                biciVendidas++;
            }
        });
        return biciVendidas;
    }

    listadoMontania(){
        let s = `<table>`;
        s += `<thead> <tr><th>Localizador</th><th>Año</th><th>Vendida</th><th>Nº Suspensiones</th></tr></thead>`;
        s += `<tbody>`;
        for(let bici of this.tBicis){
            if (bici instanceof Montania) {
                s += bici.toHTMLrow();
            }
        }
        s += `</tbody></table>`;
        return s;
    }

    listadoCarretera(){
        let s = `<table>`;
        s += `<thead> <tr><th>Localizador</th><th>Año</th><th>Vendida</th><th>Nº Platos</th></tr></thead>`;
        s += `<tbody>`;
        for(let bici of this.tBicis){
            if (bici instanceof Carretera) {
                s += bici.toHTMLrow();
            }
        }
        s += `</tbody></table>`;
        return s;
    }

}
