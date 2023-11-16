"use strict";

///////////////
//FUNCTIONS
//////////////
function ocultarFormularios(){
    const formAlta = document.querySelectorAll(".form-horizontal");
    formAlta.forEach(formulario => formulario.classList.add('oculto'));
}



/////////////
//MAIN
////////////
let tienda = new Tienda();

console.log(tienda);

ocultarFormularios();

/* ///////////// APARTADO B ALTAS ///////////////////// */

const btnAltaBici = document.querySelector('#btnMostrarAlta');

btnAltaBici.addEventListener("click", ()=>{
    ocultarFormularios();
    const formAlta = document.querySelector('form[name = "frmAltaBicicleta"]');

    formAlta.classList.remove('oculto');

});

const btnDarDeAlta = document.querySelector('#btnAltaBicicleta');
btnDarDeAlta.addEventListener("click", ()=>{
        // Campos de datos
    //Localizador
    let localizador = document.querySelector('#txtLocalizador').value;
    //AÑO
    let anio = document.querySelector('#lstAnio').value;
    //Tipo bici
    let tipoBici = document.querySelector('[name="rbtTipoBicicleta"]:checked').value;
    console.log(tipoBici);
    if(tipoBici === 'carretera'){//Añadir bicis si son de carretera
        let numPlatos = document.querySelector('#txtPlatos').value;

        if(localizador == '' || anio == '' || numPlatos == ''){
            alert('Debe rellenar los campos:Localizador, Año y Numero de platos.');
            return;
        }else{
            let biciCarretera = new Carretera(localizador,anio,false,numPlatos);

            tienda.altaBicicleta(biciCarretera);    
            console.log(tienda.tBicis);
            ocultarFormularios();
        }
    }else{//Añadir bicis si son de Montaña
        let numSuspensiones = document.querySelector('#txtSuspensiones').value;

        if(localizador == '' || anio == '' || numSuspensiones == ''){
            alert('Debe rellenar los campos:Localizador, Año y Numero de suspensiones.');
            return;
        }else{
            let biciMontania = new Montania(localizador,anio,false,numSuspensiones);

            tienda.altaBicicleta(biciMontania);
            console.log(tienda.tBicis);
            ocultarFormularios();
        }
    }
})

/*////////////// VENTA DE BICICLETAS /////////////////////*/

const mostrarVenta = document.querySelector('#btnMostrarVenta');

mostrarVenta.addEventListener('click', () =>{
    ocultarFormularios();
    const formVenta =  document.querySelector('[name="frmVentaBicicleta"]');
    formVenta.classList.remove('oculto');
});

//Boton de vender bicicleta
const btnVender = document.querySelector('#btnVentaBicicleta');

btnVender.addEventListener('click', ()=>{
    let localizadorVenta = document.querySelector('#txtLocalizadorVenta').value;

    tienda.ventaBici(localizadorVenta);
});

/*  /////////////// MOSTRAR TOTALES ///////////////////// */

//Capturamos el div de totales.
let divTotales = document.querySelector('#totales');
//Capturamos el boton de mostrarTotales
let btnMostrarTotales = document.querySelector('#btnMostrarTotales');

btnMostrarTotales.addEventListener('click', ()=>{
    divTotales.innerHTML = `<h3>Bicicletas de carretera: ${tienda.numCarretera()}</h3>`;
    divTotales.innerHTML += `<h3>Bicicletas de montaña: ${tienda.numMontania()}</h3>`;
    divTotales.innerHTML += `<h3>Total de bicicletas: ${tienda.numTotal()}</h3>`;
    divTotales.innerHTML += `<h3>Total de ventas: ${tienda.numVenta()}</h3>`;
});

/*  ///////////////     MOTRAR TABLAS   ////////////    */


let btnMostrarListado = document.querySelector('#btnMostrarListado');

btnMostrarListado.addEventListener('click',()=>{
    let nuevaVentana = window.open();

    nuevaVentana.listadoMontania = tienda.listadoMontania();
    nuevaVentana.listadoCarretera = tienda.listadoCarretera();

    nuevaVentana.document.write(`<h2>Tabla de Montaña</h2>${nuevaVentana.listadoMontania}`);
    nuevaVentana.document.write(`<h2>Tabla de Carretera</h2>${nuevaVentana.listadoCarretera}`);
});