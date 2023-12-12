"use strict";

document.querySelector('#color').addEventListener('click',()=>{
    const btn = document.querySelector('#color');
    btn.style.backgroundColor = "#47adad";
});

const modes = document.querySelector('#claroscuro');

modes.addEventListener('click',()=>{
    
    const css = document.styleSheets[1];
    if(css.disabled == false){
        css.disabled = true;
    }else{
        css.disabled = false;
    }
    
})