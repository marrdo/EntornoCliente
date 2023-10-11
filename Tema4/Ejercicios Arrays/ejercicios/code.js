"use strict";
 //Ejercicio1
 let ar=[1,"manuel","farlopa"];

 for(let e of ar){
    console.log(e);
  } 

//Ejercicio 2

function sumarArray(arrayNumero) {
    let suma = 0;  
    for (let numero of arrayNumero) {
        suma += numero;
    }
    return suma;
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let resultado = sumarArray(a);
console.log(resultado); 

//Ejercicio 3

/*
Crea una función que reciba 2 parámetros, un array de números a y un valor numérico x.
La función devolverá otro array que contenga todos los numeros de a que no sean x.
*/

let filtrado = (a,x) => a.filter(numero=> numero!=x)
let arr=[1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1];
let nuevaCosa=filtrado(arr,5); 
console.log(nuevaCosa);

//Ejercicio 4


let arra=[1,2,3,4,5,6,7,8,9,10,11,12];
let arraCuadrado=arra.map(numero=>Math.pow(numero,2));

//Ejercicio 5
/*
Usando una función map en un array de nombres, crea un array que contenga la longitud de los nombres*/
let nombres=["Ana", "Paco", "Lucas"]


let longNom=nombres.map(nombre=>nombre.length);
console.log(longNom);

//Ejercicio 6
/*
Crea una función que reciba un array de notas y devuelva un array que contenga "aprobado" o "suspenso" por cada nota que esté aprobada o suspensa.

Resuelve el ejercicio usando una función map.
*/
let notas=[10,5,8,9,6,7,8,9,0,1,3];

let resultados = notas.map(nota=>{
    if(nota>=5){
        return "aprobado";
    }else{
        return "suspenso";
    
    }
});