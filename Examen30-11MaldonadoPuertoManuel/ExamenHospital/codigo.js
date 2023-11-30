"use strict";

////////////////////
// FUNCTIONS
///////////////////
function ocultarFormularios() {
  document.querySelectorAll(".formulario").forEach((f) => {
    f.classList.add("oculto");
  });
}
/**
 * @author @marrdo
 *Al hacer click en aceptar en el formulario Alta medico creamos un medico en el
 *array medicos del hospital
 * @return {*} añadimos al medico al hospital.
 */
function agregarMedico() {
  divListado.innerHTML = "";

  let idMedico = document.querySelector("input[name=txtIdMedico]").value;
  let nombre = document.querySelector("input[name=txtNombre]").value;
  let telefono = document.querySelector("input[name=txtTelefono]").value;
  let email = document.querySelector("input[name=txtEmail]").value;
  let nColegiado = document.querySelector("input[name=txtColegiado]").value;

  if (idMedico === "") {
    divListado.innerHTML = `Debe rellenar el campo id.`;
    return;
  } else if (nombre === "") {
    divListado.innerHTML = `Debe rellenar el campo nombre.`;
    return;
  } else if (telefono === "") {
    divListado.innerHTML = `Debe rellenar el campo teléfono.`;
    return;
  } else if (nColegiado === "") {
    divListado.innerHTML = `Debe rellenar el campo Número de colegiado.`;
    return;
  }

  let medico = new Medico(idMedico, nombre, telefono, email, nColegiado);

  hospital.altaMedico(medico);
  document.querySelector("#frmAltaMedico [name=txtIdMedico]").value ='';
  document.querySelector("input[name=txtNombre]").value = '';
  document.querySelector("input[name=txtTelefono]").value = '';
  document.querySelector("input[name=txtEmail]").value = '';
  document.querySelector("input[name=txtColegiado]").value = '';
}
/**
 *  @author @marrdo
 *Obtenemos los datos para añadir la cita.
 * @return {*} añadimos la cita al array del hospital.
 */
function altaCita() {
  divListado.innerHTML = "";
  let idMedico = document.querySelector("#frmAltaCita [name=txtIdMedico]").value;
  let paciente = document.querySelector("input[name=txtPaciente]").value;
  let fecha = document.querySelector("input[name=txtFecha]").value;
  let hora = document.querySelector("input[name=txtHora]").value;

  let cita = new Cita(idMedico, paciente, fecha, hora);

  hospital.altaCita(cita);
}

///////////////////
// MAIN
///////////////////

//Creamos el hospital

let hospital = new Hospital();
console.log(hospital);

// Guardamos el campo idListado
const divListado = document.querySelector("#listado");

//ocultamos formularios
ocultarFormularios();
//mostramos formulario de alta medico.
document.querySelector("#btnFormAltaMedico").addEventListener("click", () => {
  divListado.innerHTML = "";
  ocultarFormularios();
  document.querySelector("#divFrmAltaMedico").classList.remove("oculto");
});

//Accionamos el boton agregar btnAltaMedico
document
  .querySelector("#btnAltaMedico")
  .addEventListener("click", agregarMedico);

//Mostramos el formulario de citas
document.querySelector("#btnFormAltaCita").addEventListener("click", () => {
  divListado.innerHTML = "";
  ocultarFormularios();

  document.querySelector("#divFrmAltaCita").classList.remove("oculto");
});

//Ejecutamos el btn alta citas para almacenar la cita.

document.querySelector("#btnAltaCita").addEventListener("click", altaCita);

//Recogemos el boton Listado medicos y lo accionamos

document.querySelector("#btnListadoMedicos").addEventListener("click", () => {
  ocultarFormularios();
  divListado.innerHTML = "";
  divListado.innerHTML = hospital.listadoMedicos();
});
//Recogemos el boton Listado citas y lo accionamos
document.querySelector("#btnListadoCitas").addEventListener("click", () => {
  ocultarFormularios();
  divListado.innerHTML = "";
  divListado.innerHTML = hospital.listadoCitas();
});


