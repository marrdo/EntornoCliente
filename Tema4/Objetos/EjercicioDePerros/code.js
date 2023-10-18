"use strict";

//let arrayPerros=[];
let arrayPerros=new Array();


function Perro(nombre,edad,raza){
    alert("contruyendo al perro");
    this.nombre=nombre;
    this.edad=edad;
    this.raza=raza;
    this.mostrarDatos= function(){
        let datos=this.nombre+" "+this.edad+" "+this.raza;
        return datos;
    }
    alert(nombre + ", " + edad + ", " + raza);
}



//Capturar botones
let btnAnadir= document.querySelector("#aniadir");
let btnOrdenarInsercion= document.querySelector("#ordenarIn");
let btnOrdenarRaza = document.querySelector("#ordenarRaz");

//Zonas de muestras de datos
let divMostrar=document.querySelector(".mostrarDatos");


//Accion botones

//Boton añadir
btnAnadir.onclick=()=>{
    
    //extraer valores de los campos
    let nombre=document.querySelector("#nombre").value;
    let edad=document.querySelector("#edad").value;
    let raza=document.querySelector("#raza").value;

    //construir al perro
    let perro=new Perro(nombre,edad,raza);
    //Añadir perro al array peror
    arrayPerros.push(perro);

    //Reiniciar campos
    document.querySelector("#nombre").value="";
    document.querySelector("#edad").value="";
    document.querySelector("#raza").value="";
    //Debug
    divMostrar.innerHTML="<p>"+ perro.mostrarDatos()+"</p>";
}

//Boton ordenar por insercion
btnOrdenarInsercion.onclick=(arrayPerros)=>{
    //Reiniciar div
    divMostrar.innerHTML="";

    //Declarar lista
    let datos="<ol";
    alert("ordenar")
    //Recorrer array y mostrar datos
    for(let perro of arrayPerros){
        datos += "<li>"+perro.mostrarDatos+"</li>";
    }
    datos+="</ol>";
    //mostrar array en div
    divMostrar.innerHTML = datos;
}

//Boton ordenar por raza
btnOrdenarRaza.onclick=(arrayPerros)=>{
    //Vamos a ordenar los perros por raza
    let razas=arrayPerros.toSorted((a,b)=>a.raza-b.raza);
    divMostrar.innerHTML="";
    let datos="<ul";
    for(let perro of razas){
        datos += "<li>"+perro.mostrarDatos+"</li>";
    }
    datos+="</ul>";
    divMostrar.innerHTML = datos;
}