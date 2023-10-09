"use strict";

/////////////
//Functions
/////////////

function recuperarCookie(String) {
  document.cookie = String;
  let arrayCadena = document.cookie.split("=");
  for (let i = 0; i < arrayCadena.length; i++) {
    if (i == 1) {
      return arrayCadena[i];
    }
  }
}
