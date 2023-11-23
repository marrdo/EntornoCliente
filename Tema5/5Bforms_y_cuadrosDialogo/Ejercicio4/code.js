"use strict";


//////////////
//FUNCTIONS
//////////////

function calcularMedia(array=[]){
    let acc = 0;
    array.forEach((e)=>{
        acc = acc +e.puntuacion;
    });
    return acc/array.length;
}



//////////////
//MAIN  
/////////////
let arrHelados = [];

//Debuger
console.log(arrHelados);


document.querySelector('[name=voto]').addEventListener('click',()=>{

    let sabor = document.querySelector('#sabores').value;
    let puntuacion = document.querySelector('[name=votacion]:checked').value;
    
    const helado = new Helado(sabor,puntuacion);

    arrHelados.push(helado);

})


document.querySelector('[name=verVoto]').addEventListener('click',()=>{

    let votosChoco = arrHelados.filter((helado)=>helado.sabor === 'chocolate');
    
    let mediaChoco = calcularMedia(votosChoco);
    
    let maxVotoChoco = votosChoco.filter((helado)=>helado.puntuacion === 5);

    console.log(votosChoco.length+' media: '+mediaChoco+' veces votacion maxima: ' + maxVotoChoco );
});
