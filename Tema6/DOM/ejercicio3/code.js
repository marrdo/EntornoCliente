"use strict";
let main = document.querySelector( "main" );
let toast = document.createElement('p');


function eleiminarClases(){
    
}

toast.innerHTML='Hola, estoy aqui';
toast.classList.add('toast');
document.querySelector('button[name=btnAI]').addEventListener('click',()=>{
    toast.classList.add('toast');
    toast.classList.add('topLeft');
    main.appendChild(toast);
});

document.querySelector('button[name=btnA]').addEventListener('click',()=>{
    toast.classList.add('toast');
    toast.classList.add('top');
    main.appendChild(toast);
});

document.querySelector('button[name=btnAD]').addEventListener('click',()=>{
    toast.classList.add('toast');
    toast.classList.add('derTop');
    main.appendChild(toast);
});
document.querySelector('button[name=btnDD]').addEventListener('click',()=>{
    toast.classList.add('toast');
    toast.classList.add('derBot');
    main.appendChild(toast);
});
document.querySelector('button[name=btnD]').addEventListener('click',()=>{
    toast.classList.add('toast');
    toast.classList.add('bot');
    main.appendChild(toast);
});
document.querySelector('button[name=btnDI]').addEventListener('click',()=>{
    toast.classList.add('toast');
    toast.classList.add('botLef');
    main.appendChild(toast);
});