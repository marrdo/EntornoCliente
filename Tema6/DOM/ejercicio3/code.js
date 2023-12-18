"use strict";
let main = document.querySelector( "main" );
let toast = document.createElement('p');


function eleiminarClases(){
    alert('hola');
    toast.classList.remove('derBot', 'botLef', 'bot', 'derTop', 'top', 'topLef');
    
}

toast.innerHTML='Hola, estoy aqui';
toast.classList.add('toast');
document.querySelector('button[name=btnAI]').addEventListener('click',()=>{
    eleiminarClases();
    toast.classList.add('toast');
    toast.classList.add('topLef');
    main.appendChild(toast);
});

document.querySelector('button[name=btnA]').addEventListener('click',()=>{
    eleiminarClases();
    toast.classList.add('toast');
    toast.classList.add('top');
    main.appendChild(toast);
});

document.querySelector('button[name=btnAD]').addEventListener('click',()=>{
    eleiminarClases();
    toast.classList.add('toast');
    toast.classList.add('derTop');
    main.appendChild(toast);
});
document.querySelector('button[name=btnDD]').addEventListener('click',()=>{
    eleiminarClases();
    toast.classList.add('toast');
    toast.classList.add('derBot');
    main.appendChild(toast);
});
document.querySelector('button[name=btnD]').addEventListener('click',()=>{
    eleiminarClases();
    toast.classList.add('toast');
    toast.classList.add('bot');
    main.appendChild(toast);
});
document.querySelector('button[name=btnDI]').addEventListener('click',()=>{
    eleiminarClases();
    toast.classList.add('toast');
    toast.classList.add('botLef');
    main.appendChild(toast);
});