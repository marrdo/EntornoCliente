"use strict";

const media= (...param)=>{//Operador spred
    let suma=0;
    for (let num of param){
        suma += num;
    }
    if(param.length===0) return null;
    return suma/param.length;
}