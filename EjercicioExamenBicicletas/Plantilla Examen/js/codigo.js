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


ocultarFormularios();

/* ///////////// APARTADO B ALTAS ///////////////////// */

const btnAltaBici = document.querySelector('#btnMostrarAlta');

btnAltaBici.addEventListener("click", ()=>{
    const formAlta = document.querySelector('form[name = "frmAltaBicicleta"]');

    formAlta.classList.toggle('oculto');

});

const btnDarDeAlta = document.querySelector('#btnAltaBicicleta');
btnDarDeAlta.addEventListener("click", ()=>{
        // Campos de datos
    //Localizador
    let localizador = document.querySelector('#txtLocalizador').value;
    //AÑO
    let anio = document.querySelector('#lstAnio').value;
    //Tipo bici
    const radiosTipoBici = document.querySelectorAll('input[name="rbtTipoBicicleta"]');
    let tipoBici ;
    radiosTipoBici.forEach((tipo)=>{
        if (tipo.checked) {
            tipoBici = tipo.value;
        }
    });

    if (tipo === 'montana') {
        const numSuspensiones = document.querySelector('#txtSuspensiones');
    }else{
        const numPlatos = document.querySelector('#txtPlatos');
    }

})


