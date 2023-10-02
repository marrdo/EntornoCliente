"use strict"

//////////////
//Functions
//////////////////

function validar() {
    //Recuperamos los errores

    let divErrores=document.getElementById("errores");  
    //1.- Comprobamos que todos los campos estan rellenos.
    let datoNombre=document.getElementById("txtNombre").value;
    let datoEdad= document.getElementById("txtEdad").value;
    let datoTurnos= document.getElementById("txtTurnos").value;
    divErrores.innerHTML="";
    if((datoNombre=="")|| (datoEdad=="") || (datoTurnos )){
        divErrores.innerHTML +="<p>Todos los campos son obligatorios</p>";
    }
    //2.- Comprobamos que el nombre no tenga mas de 20 caracteres.
    if(datoNombre.length>20){
        divErrores.innerHTML +="<p>El nombre no puede tener mas de 20 caracteres</p>";
    }

    //3.- Comprobamos que la edad es correcta.
    datoEdad=Number(datoEdad);
    if(datoEdad<18 || datoEdad>67){
        divErrores.innerHTML +="<p>La edad debe estar entre 18 y 67</p>";
    }

    //4.- Comprobamos que el numero de turnos sea correcto.
    if(datoTurnos!="Mañana" && datoTurnos!="Tarde"){
        divErrores.innerHTML +="<p>El numero de turnos debe ser Mañana o Tarde</p>";
    }

    //5.- Comprobamos que la contraseña sea correcta.
    let datoContraseña=document.getElementById("password1").value;
    let datoContraseña2=document.getElementById("password2").value;

    if (datoContraseña!=datoContraseña2) {
        divErrores.innerHTML +="<p>Las contraseñas no coinciden</p>";
    }
    
    if (datoContraseña.length<6 || datoContraseña.length>12) {
        divErrores.innerHTML +="<p>La contraseña debe tener entre 6 y 12 caracteres</p>";
    } 
 
        
}
        
    






/////////////////
///MAIN
/////////////

document.getElementById("btnValidar").addEventListener("click",validar)