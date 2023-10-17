"use strict";

let arrayPerros=[];

function Perro(nombre,edad,raza){
    this.nombre=nombre;
    this.edad=edad;
    this.raza=raza;
    this.mostrarDatos= function(){
        let datos=this.nombre+" "+this.edad+" "+this.raza;
    }
}



//Capturar botones
let btnAnadir= document.querySelector("#aniadir");
let btnOrdenarInsercion= document.querySelector("#ordenarIn");
let btnOrdenarRaza = document.querySelector("#ordenarRaz");


//Accion botones
btnAnadir.onclick=()=>{
    let nombre=document.querySelector("#nombre").value;
    let edad=document.querySelector("#edad").value;
    let raza=document.querySelector("#raza").value;

    let perro=new Perro(nombre,edad,raza);
    arrayPerros.push(perro);
}


btnOrdenarInsercion.onclick=(arrayPerros)=>{
    for(let perro for arrayPerros){
        
    }
}