"use sctric";


let emoticono=document.querySelector(".emoticono");

emoticono.addEventListener("click",(e)=>{
    emoticono.innerHTML = '';
    e.target.innerHTML = '🙁'
    
});

emoticono.addEventListener("dblclick",(e)=>{
    emoticono.innerHTML ='';
    e.target.innerHTML = '😒';
});

emoticono.addEventListener("contextmenu",(e)=>{
    emoticono.innerHTML ='';
    e.target.innerHTML = '😀';
});