"use strict";

function loadXMLDOC(filename, callback) {
  let xhttp;
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
  }

  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === XMLHttpRequest.DONE) {
      if (xhttp.status === 200) {
        callback(xhttp.responseXML);
        // callback(xhttp.responseText); // si el fichero es de texto
      } else {
        console.log("Hubo un error con la petición.");
      }
    }
  };
  xhttp.open("GET", filename, true); //true = asíncrona, //false = síncrona
  xhttp.send();
}

function cargarArchivo(xml) {
  const resultado = document.querySelector(".resultado");
  let result = "";

  xml.querySelectorAll("food").forEach((element) => {
    console.log(element);
    const name = element.childNodes;
    const price = name.nextElementSibling;
    const description = price.nextElementSibling;
    const calories = description.nextElementSibling;

    result += `<li>${name.textContent}</li>
      <li>${price.textContent}</li>
      <li>${description.textContent}</li>
      <li>${calories.textContent}</li>`;
  });

  resultado.innerHTML += `<ul>${result}</ul>`;
}

const imprimeXML = loadXMLDOC("w3SchoolFile.xml", cargarArchivo);
