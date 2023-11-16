"use strict";

function Bicicleta(localizador, anio, vendida) {
    this.localizador = localizador;
    this.anio = anio;
    this.vendida = vendida;
}

Bicicleta.prototype.toHTMLrow = function() {
    // Implementa la lógica para convertir la bicicleta a una fila HTML
};

function Carretera(localizador, anio, vendida, numPlatos) {
    Bicicleta.call(this, localizador, anio, vendida);
    this.numPlatos = numPlatos;
}

Carretera.prototype = Object.create(Bicicleta.prototype);
Carretera.prototype.constructor = Carretera;

Carretera.prototype.toHTMLrow = function() {
    // Implementa la lógica específica para bicicletas de carretera
};

function Montania(localizador, anio, vendida, numSuspensiones) {
    Bicicleta.call(this, localizador, anio, vendida);
    this.numSuspensiones = numSuspensiones;
}

Montania.prototype = Object.create(Bicicleta.prototype);
Montania.prototype.constructor = Montania;

Montania.prototype.toHTMLrow = function() {
    // Implementa la lógica específica para bicicletas de montaña
};

// Instanciar Carretera
//const carretera = new Carretera('XYZ789', 2021, true, 2);

// Instanciar Montania
//const montania = new Montania('DEF456', 2023, false, 4);


class Tienda{
    constructor(tBicis = [],numVentas){
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
    altaBicicleta(OBici){

    }
    /**
     * 
     * @param {*} sLocalizador 
     * @returns {String}
     */
    ventaBici(sLocalizador){
        
    }
}