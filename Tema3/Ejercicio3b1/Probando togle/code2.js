// Elementos que se obtienen
var modes = document.querySelector("#modes_menu");
var mode_btn = document.querySelector("#modes-btn");

// Evento 
mode_btn.onclick = () => {
  modes.classList.toggle("modes_menu--ocultar");
};

// Puede utilizar addEventListener si lo deseas en lugar de onclick, como por ejemplo:
// mode_btn.addEventListener("click", () => {}, false);