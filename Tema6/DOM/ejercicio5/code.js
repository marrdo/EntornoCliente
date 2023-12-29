"use strict";
// Selecciona el botón con el id "ordenar"
let btnOrdenar = document.querySelector("#btnOrdernar");

// Selecciona el botón con el id "buscar"
let btnBuscar = document.querySelector("#buscar");

// Selecciona el elemento con la clase "listarNombres"
let cuadro = document.querySelector(".listarNombres");

// Agrega un event listener al botón de ordenar
btnOrdenar.addEventListener("click", () => {
  // Obtiene todas las filas de la tabla
  let filas = document.querySelectorAll("tbody tr");

  // Obtiene la referencia al cuerpo de la tabla
  const tabla = document.querySelector("tbody");

  // Limpia el contenido actual del cuerpo de la tabla
  tabla.innerHTML = "";

  // Ordena las filas según el contenido de la primera celda (columna "Nombre")
  Array.from(filas)
    .sort((a, b) => {
      return a.children[0].textContent.localeCompare(b.children[0].textContent);
    })
    .forEach((fila) => {
      // Agrega cada fila ordenada de nuevo al cuerpo de la tabla
      tabla.appendChild(fila);
    });
});

// Agrega un event listener al botón con el id "btnBuscar"
btnBuscar.addEventListener("click", () => {
  // Crea un nuevo elemento <ul> (lista desordenada) para contener los resultados de la búsqueda
  const ul = document.createElement("ul");

  // Crea un nuevo elemento <ul> para contener la lista ordenada final
  const finalizado = document.createElement("ul");

  // Obtiene el valor del cuadro de búsqueda y elimina espacios en blanco al principio y al final
  let texto = document.querySelector("#busqueda").value.trim();

  // Limpia el contenido anterior del contenedor de resultados
  cuadro.innerHTML = "";

  // Obtiene el elemento tbody de la tabla
  const tbody = document.querySelector("tbody");

  // Convierte la colección de elementos hijos de tbody en un array
  let filas = Array.from(tbody.children);

  // Itera sobre cada fila de la tabla
  filas.forEach((fila) => {
    // Comprueba si el texto ingresado coincide con el comienzo del contenido de la primera celda de cada fila
    if (fila.firstElementChild.textContent.startsWith(texto)) {
      // Si hay coincidencia, crea un nuevo elemento <li> (elemento de lista) y establece su contenido con el texto de la celda
      const li = document.createElement("li");
      li.textContent = fila.firstElementChild.textContent;

      // Agrega el elemento <li> al elemento <ul>
      ul.appendChild(li);
    }
  });

  // Obtiene la lista de elementos hijos de la lista desordenada
  let lista = ul.children;

  // Ordena la lista alfabéticamente según el contenido de los elementos <li>
  Array.from(lista)
    .sort((a, b) => {
      return a.textContent.localeCompare(b.textContent);
    })
    .forEach((li) => {
      // Agrega cada elemento <li> ordenado al nuevo elemento <ul>
      finalizado.appendChild(li);
    });

  // Agrega la lista ordenada completa al contenedor especificado por cuadro
  cuadro.appendChild(finalizado);
});
