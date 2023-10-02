"use strict"
//Linea de prueba
alert("HOLA")
////////////
//Functions
///////////

//function calcularNota(){
  //  let nota= Number(document.getElementById("nota").value);
    //if (nota<5) {
        
    //}
//}





///////////////
///MAIN
/////////////

//let btnCalcular = document.getElementById("btnCalcular");

//btnCalcular.addEventListener("click", calcularNota);

////Codigo profesor a partir de aqui.

////////////
//Functions
///////////

function calcular() {
    //1.- Recupero los datos del formulario
    
    let nota= document.getElementById("nota").value;
    let pResultado= document.getElementById("pResultado");

    //2.- Validamos los datos
    if (nota==""){
        pResultado.innerHTML="Error. Debe introducir una nota";
        return;
    }
    if (nota<0 || nota>10){
        pResultado.innerHTML="Error. La nota debe estar entre 0 y 10";
        return;
    }
    //3.- Procesamos los datos
    if (nota>=9){
        pResultado.innerHTML="Sobresaliente";
    
    }else if (nota>=7){
        pResultado.innerHTML="Notable";
    }else if (nota>=6){
        pResultado.innerHTML="Bien";
    }else if (nota>=5){
        pResultado.innerHTML="Suficiente";
    }else{
        pResultado.innerHTML="Insuficiente";
    }

    
}



///////////////
///MAIN
/////////////
//AQUI usamos los id's no los name
//1. recupero el boton y le añado un eventListener

document.getElementById("btnCalcular").addEventListener("click",calcular);
