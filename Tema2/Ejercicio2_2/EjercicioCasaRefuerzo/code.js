"use strict";

///////////////////
//Functions
///////////////////

//7.- Creamos la funcion aniadir numeros.
function aniadirNumeros(){
    //8.- Dejamos el div vacio
    document.getElementById("mostrarResultado").innerHTML ="";

    //9.- Buscar en el documento un elemento con una ID numeros para sacar su valor.
    //Y lo transformamos con Number a numero.
    let numero=Number(document.getElementById("numeros").value);

    //10.- Si no lo puede transformar este if, validará el dato.
    if(isNaN(numero) || numero==""){
        document.getElementById("mostrarResultado").innerHTML = "Introduce un numero";
        //11.- Si no es valido, lo mandamos al div con un mensaje.
        return
    }else{

        //12.- Agregar el valor del numero al array.
    arrayNumeros.push(numero);
    }
    //13.- Reiniciamos el campo del input para que se quede a nada.
    document.getElementById("numeros").value="";
    
    
}

//14.- Creamos la función calcularMedia.

function calcularMedia(){
    
    //15.- Iniciamos la variable suma.
    let suma=0;

    //16.- Comprobamos si el array tiene elementos 
    if (arrayNumeros.length === 0) {
        console.log("No hay notas para calcular la media.");
        return;
    }

    //17.- Para calcular la media recorreremos el Array con for,siempre se recorre con legnht -1.
    for(let i=0;i<=arrayNumeros.length-1;i++){

        //18.- sumamos los valores que va encontrando i, con suma.
        suma += arrayNumeros[i];
    }

    //19.- Ahora calculamos la media del array
    media=suma/arrayNumeros.length;

    //20.- Mostramos la media en el HTML.
    //21.- Capturamos el ID en divResultado
    let divResultado=document.getElementById("mostrarResultado");
    //22.- Reiniciamos el div para dejarlo vacio y comenzamos a printear
    divResultado.innerHTML = "";
    divResultado.innerHTML += "<h2> Resultados </h2> <br>";
    divResultado.innerHTML += 'Los numeros que ingresaste son:  <br>';
    for(const numero of arrayNumeros){
        divResultado.innerHTML += `${numero} `;
    }
    divResultado.innerHTML += '<br>La media es: '+media;

    //23.- Reiniciamos el array para que no haya problemas con otros calculos.
    arrayNumeros=[]
}


//////////////////
//Main
/////////////////

//1.- Creamos un array de numeros.
let arrayNumeros=[];

//2.- Creamos la variable global de suma.
let media;

//3.- Busca en el documento un elemento que tenga la id btnAgregar
let agregarNumero=document.getElementById("btnAgregar");

//4.- Agregar un evento de tipo click al boton con la funcion aniadirNumeros.

agregarNumero.addEventListener("click",aniadirNumeros);

 //5.- Buscar en el documento un elemento con una ID(boton en este caso).

let btnCalcular=document.getElementById("btnCalcular");

//6.- Agregar un evento de tipo click al boton.

btnCalcular.addEventListener("click",calcularMedia);