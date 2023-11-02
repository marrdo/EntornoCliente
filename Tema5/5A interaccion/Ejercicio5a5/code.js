"use strict";







let arrProvincias = ["Álava","Albacete","Alicante","Almería","Ávila","Badajoz","Baleares","Barcelona","Burgos","Cáceres","Cádiz","Castellón",
"Ciudad Real","Córdoba","Coruña","Cuenca","Girona","Granada","Guadalajara","Guipuzcoa","Huelva","Huesca","Jaén","León","Lleida",
"Rioja","Lugo","Madrid","Málaga", "Murcia","Navarra","Orense","Asturias","Palencia","Las Palmas","Pontevedra","Salamanca",
"Tenerife","Cantabria","Segovia","Sevilla","Soria","Tarragona","Teruel","Toledo","Valencia","Valladolid",
"Vizcaya","Zamora","Zaragoza","Ceuta","Melilla"];



let btn=document.querySelector("#btn");

let nPostal=document.querySelector("#cp").value;

btn.addEventListener("click",()=>{
    
    nPostal = Array.from(nPostal);
    nPostal=Number(nPostal[0]+nPostal[1]);
        console.log(nPostal);
        
    if (nPostal.length == 5) {
        console.log(typeof(nPostal.length));
    }
});





