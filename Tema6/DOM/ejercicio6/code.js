"use strict";

const tabla = document.querySelector(".tablita");
const listAlumnos = document.querySelector(".listaAlumnos");

const btnTabla = document.querySelector("#btnTabla");
const btnIncorporar = document.querySelector('#incorporacion');

btnTabla.addEventListener("click", () => {
    tabla.innerHTML = "";
  let lis = document.querySelector(".listaAlumnos");
  lis = lis.children;

  lis = Array.from(lis);

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const thNombre = document.createElement("th");
  const thApellido = document.createElement("th");
  const tbody = document.createElement("tbody");
  
    table.appendChild(thead);
    thNombre.innerText = 'Nombre';
    thApellido.innerText = 'Apellido';

    thead.appendChild(tr);
    tr.appendChild(thNombre);
    tr.appendChild(thApellido);

  for (let li of lis) {
    let nombre = li.innerText.slice(0, li.innerText.indexOf(" "));
    let apellido = li.innerText.slice(li.innerText.indexOf(" ")+1);
    let filaAlumno = document.createElement("tr");
    let celdaNombre = document.createElement("td");
    let celdaApellido = document.createElement("td");
    tbody.appendChild(filaAlumno);
    celdaNombre.innerText = nombre;
    celdaApellido.innerText = apellido;
    filaAlumno.appendChild(celdaNombre);
    filaAlumno.appendChild(celdaApellido);
  }

  table.appendChild(tbody);
  tabla.appendChild(table);
  table.setAttribute("class", "tablaCreada");
});

btnIncorporar.addEventListener('click', ()=>{
    let nombre = document.querySelector('input[name=nombre]').value;
    let apellido = document.querySelector('input[name=apellido]').value;
    let saberTabla = document.querySelector('.tablaCreada');
    let listaAlumnos = document.querySelector('.listaAlumnos');

    if (saberTabla != null) {
        let tablaCreada = document.querySelector('.tablaCreada tbody');
        let filaNueva = document.createElement('tr');
        let tdNombre = document.createElement('td');
        let tdApellido = document.createElement('td');
        tdNombre.innerText = nombre;
        tdApellido.innerText = apellido;

        filaNueva.appendChild(tdNombre);
        filaNueva.appendChild(tdApellido);

        tablaCreada.appendChild(filaNueva);

        let nuevoLi = document.createElement('li');
        nuevoLi.innerText = nombre + " " + apellido;
        listaAlumnos.appendChild(nuevoLi);
    }else{
        let nuevoLi = document.createElement('li');
        nuevoLi.innerText = nombre+" "+apellido;
        listaAlumnos.appendChild(nuevoLi);
    }

});

