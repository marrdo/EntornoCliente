"use strict";

// Crear un elemento li (posiblemente no necesario para el código actual)
let li = document.createElement("li");

// Seleccionar elementos del DOM
const apro = document.querySelector(".aprobado");
const susp = document.querySelector(".suspenso");
let lista; // Variable para almacenar la lista actual
const listaAlumnos = document.querySelector(".listaAlumnos");

// Evento click en el contenedor con clase .listaAlumnos
listaAlumnos.addEventListener("click", (e) => {
  // Verificar si el elemento clicado es un <li>
  if (e.target.tagName.toLowerCase() == "li") {
    // Obtener el valor del radio button seleccionado
    let btnCambio = document.querySelector("input[name=cambio]:checked").value;
    // Obtener el elemento <li> clicado
    let text = e.target;

    // Remover el elemento <li> de la lista actual (.listaAlumnos)
    listaAlumnos.removeChild(e.target);

    // Realizar acciones basadas en el valor del radio button
    switch (btnCambio) {
      case "aprobado":
        // Mover el elemento <li> a la lista de aprobados (.aprobado)
        apro.append(text);
        // Obtener y ordenar la lista de aprobados
        lista = apro.querySelectorAll(".aprobado li");
        let aprobados = Array.from(lista).sort((a, b) => {
          return a.textContent.localeCompare(b.textContent);
        });
        // Limpiar y actualizar la lista de aprobados
        apro.innerHTML = "<h1>Aprobados</h1>";
        aprobados.forEach((nombre) => {
          apro.appendChild(nombre);
        });
        break;

      case "suspenso":
        // Mover el elemento <li> a la lista de suspendidos (.suspenso)
        susp.appendChild(text);
        // Obtener y ordenar la lista de suspendidos
        lista = susp.querySelectorAll(".suspenso li");
        let suspensos = Array.from(lista).sort((a, b) => {
          return a.textContent.localeCompare(b.textContent);
        });
        // Limpiar y actualizar la lista de suspendidos
        susp.innerHTML = "<h1>Suspensos</h1>";
        suspensos.forEach((nombre) => {
          susp.appendChild(nombre);
        });
        break;

      default:
        break;
    }
  }
});


// Evento click en el contenedor con clase .aprobado
apro.addEventListener("click", (e) => {
  // Verificar si el elemento clicado es un <li>
  if (e.target.tagName.toLowerCase() == "li") {
    // Obtener el valor del radio button seleccionado
    let btnCambio = document.querySelector("input[name=cambio]:checked").value;
    // Obtener el elemento <li> clicado
    let text = e.target;

    // Remover el elemento <li> de la lista actual (.aprobado)
    apro.removeChild(text);

    // Realizar acciones basadas en el valor del radio button
    switch (btnCambio) {
      case "aprobado":
        // Mover el elemento <li> a la lista de alumnos (.listaAlumnos)
        listaAlumnos.appendChild(text);
        // Obtener y ordenar la lista de alumnos
        lista = document.querySelectorAll(".listaAlumnos li");
        let alumnos = Array.from(lista).sort((a, b) => {
          return a.textContent.localeCompare(b.textContent);
        });
        // Limpiar y actualizar la lista de alumnos
        listaAlumnos.innerHTML = "<h1>Lista de alumnos</h1>";
        alumnos.forEach((nombre) => {
          listaAlumnos.appendChild(nombre);
        });
        break;

      case "suspenso":
        // Mover el elemento <li> a la lista de suspendidos (.suspenso)
        susp.appendChild(text);
        // Obtener y ordenar la lista de suspendidos
        lista = susp.querySelectorAll(".suspenso li");
        let suspensos = Array.from(lista).sort((a, b) => {
          return a.textContent.localeCompare(b.textContent);
        });
        // Limpiar y actualizar la lista de suspendidos
        susp.innerHTML = "<h1>Suspensos</h1>";
        suspensos.forEach((nombre) => {
          susp.appendChild(nombre);
        });
        break;

      default:
        break;
    }
  }
});


// Evento click en el contenedor con clase .suspenso
susp.addEventListener("click", (e) => {
  // Verificar si el elemento clicado es un <li>
  if (e.target.tagName.toLowerCase() == "li") {
    // Obtener el valor del radio button seleccionado
    let btnCambio = document.querySelector("input[name=cambio]:checked").value;
    // Obtener el elemento <li> clicado
    let text = e.target;

    // Remover el elemento <li> de la lista actual (.suspenso)
    susp.removeChild(e.target);

    // Realizar acciones basadas en el valor del radio button
    switch (btnCambio) {
      case "aprobado":
        // Mover el elemento <li> a la lista de aprobados (.aprobado)
        apro.append(text);
        // Obtener y ordenar la lista de aprobados
        lista = apro.querySelectorAll(".aprobado li");
        let aprobados = Array.from(lista).sort((a, b) => {
          return a.textContent.localeCompare(b.textContent);
        });
        // Limpiar y actualizar la lista de aprobados
        apro.innerHTML = "<h1>Aprobados</h1>";
        aprobados.forEach((nombre) => {
          apro.appendChild(nombre);
        });
        break;

      case "suspenso":
        // Mover el elemento <li> a la lista de alumnos (.listaAlumnos)
        listaAlumnos.appendChild(text);
        // Obtener y ordenar la lista de alumnos
        lista = document.querySelectorAll(".listaAlumnos li");
        let alumnos = Array.from(lista).sort((a, b) => {
          return a.textContent.localeCompare(b.textContent);
        });
        // Limpiar y actualizar la lista de alumnos
        listaAlumnos.innerHTML = "<h1>Lista de alumnos</h1>";
        alumnos.forEach((nombre) => {
          listaAlumnos.appendChild(nombre);
        });
        break;

      default:
        break;
    }
  }
});

