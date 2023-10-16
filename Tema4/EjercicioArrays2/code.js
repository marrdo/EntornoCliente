"use strict";
//Ejercicio 2
/*
let array=[1,2,3,4,5,6];

let array2=[1,2,3,4,7,8,9];

const compararArrays=(array1,array2)=>{
    if(array1.length!=array2.length){
        console.log("Los arrays no son iguales");
    }else{
        for(let i=0;i<array1.length;i++){
            if(array1[i]!=array2[i]){
                return false;
            }
        }
        return true;
    }

    
}
*/
//ejercicio Camelizar la frase En-un-lugar-de-la-mancha
//enUnLugarDeLaMancha



//Ejercicio4b10
let arrayNum=String(1835).split("");

let tabla=document.querySelector(".tabla");

for(let i=0;i<arrayNum.length;i++){
    if(itabla%2==0){
        tabla.innerHTML+=`<tr>`;
    
    }
    tabla.innerHTML+=`<td>${arrayNum[i]}</td>`;
    if(i%2==0){
        tabla.innerHTML+=`</tr>`;
    }

}


//