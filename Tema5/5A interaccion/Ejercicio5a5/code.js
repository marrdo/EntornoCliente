"use strict";

let arrProvincias = ["Álava","Albacete","Alicante","Almería","Ávila","Badajoz","Baleares","Barcelona","Burgos","Cáceres","Cádiz","Castellón",
"Ciudad Real","Córdoba","Coruña","Cuenca","Girona","Granada","Guadalajara","Guipuzcoa","Huelva","Huesca","Jaén","León","Lleida",
"Rioja","Lugo","Madrid","Málaga", "Murcia","Navarra","Orense","Asturias","Palencia","Las Palmas","Pontevedra","Salamanca",
"Tenerife","Cantabria","Segovia","Sevilla","Soria","Tarragona","Teruel","Toledo","Valencia","Valladolid",
"Vizcaya","Zamora","Zaragoza","Ceuta","Melilla"];

const mostrarCiudad = document.querySelector(".ciudad");
let cPostal = document.querySelector("#cp");


cPostal.addEventListener("keyup", e =>{
    const codigo = e.target.value;

    if(codigo.length != 5){
        return;
    }

    const provincia = Number(codigo.slice(0,2)-1);

    if(isNaN(provincia)){
        mostrarCiudad.innerHTML = "Debe introducir solo numeros.";
    }

    mostrarCiudad.innerHTML = `${arrProvincias[provincia]}`;
});