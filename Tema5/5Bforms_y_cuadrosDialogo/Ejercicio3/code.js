"use strict";

//////////////
//FUNCTIONS
//////////////

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

///////////////
//MAIN
///////////////

const numeros = document.querySelectorAll('[name=numero]');

const btnAleatorios = document.querySelector('#aleatorios');
const btnPositivos = document.querySelector('#positivos');
const btnContar = document.querySelector('#contar');

const contador = document.querySelector('.contador');

btnAleatorios.addEventListener('click', ()=>{
    contador.innerHTML ="";
    numeros.forEach((input)=>{
        input.value = "";
        input.value = getRandomIntInclusive(-100,100);
    });
});

btnPositivos.addEventListener('click', ()=>{
    contador.innerHTML ="";
    numeros.forEach((input)=>{
        input.value = "";
        input.value = getRandomIntInclusive(0,200);
        }
    );
});

btnContar.addEventListener('click', ()=>{
    contador.innerHTML ="";
    let contarPositivos = 0;
    numeros.forEach((input)=>{
        if(input.value>0)  contarPositivos ++;
    })

    contador.innerHTML = `Hay ${contarPositivos} numeros positivos`
});