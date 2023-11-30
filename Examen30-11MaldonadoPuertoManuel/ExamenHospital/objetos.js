"use strict";

class Hospital {
  constructor(medicos = [], citas = []) {
    this.medicos = medicos;
    this.citas = citas;
  }

  altaMedico(oMedico) {
    const divListado = document.querySelector("#listado");
    divListado.innerHTML = "";

    if (
      this.medicos.some((medico) => {
        return oMedico.id == medico.id;
      })
    ) {
      divListado.innerHTML = `Error: 
    id ${oMedico.id} registrado previamente.`;
    } else {
      this.medicos.push(oMedico);
      divListado.innerHTML = `Alta de médico OK`;
    }
  }

  altaCita(oCita) {
    const divListado = document.querySelector("#listado");
    divListado.innerHTML = "";

        // Comprobamos si el medico existe en el array
    let buscarId = this.medicos.some(
        (medico) => Number(medico.id) === Number(oCita.id)
        
    );

    // Existe
    if (buscarId) {
      this.citas.push(oCita);

      divListado.innerHTML = `Alta de
        cita OK`;
    } else {
      divListado.innerHTML = `idMedico: ${oCita.id} no registrado.`;
    }
  }

  listadoMedicos() {
    //Calculamos los medicos ue hay sin emails
    let contador = 0;
    this.medicos.forEach((medico) => {
      if (medico.email === "") {
        contador++;
      }
    });
    //Mostramos la tabla
    let s = `<table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Telefono</th>
        <th>Email</th>
        <th>Nº Colegiado</th>
      </tr>
    </thead>
    <tbody>`;
    for (let medico of this.medicos) {
      if(medico instanceof Medico){
        s += medico.toHTMLRow();
      }
    }
    s += `</tbody>
        <tfoot>
            <tr rowspan= "5">
                <td>Hay ${contador} médicos sin emails.</td>
            </tr>
        </tfoot>`;

    return s;
  }

  listadoCitas() {
    let s = `<table>
    <thead>
        <tr>
            <th>Id Médico</th>
            <th>Nombre médico</th>
            <th>Paciente</th>
            <th>Fecha</th>
            <th>Hora</th>
        </tr>
    </thead>
    <tbody>`;
    for (let cita of this.citas) {
        if(cita instanceof Cita){
            s += cita.toHTMLRow();
        }
      
    }
    s += `</tbody>`;

    return s;
  }
}

class Medico {
  constructor(idMedico, nombre, telefono, email = null, colegiado) {
    this.id = idMedico;
    this.nombre = nombre;
    this.telefono = telefono;
    this.email = email;
    this.colegiado = colegiado;
  }

  toHTMLRow() {
    return `<tr>
    <td>${this.id}</td>
    <td>${this.nombre}</td>
    <td>${this.telefono}</td>
    <td>${this.email}</td>
    <td>${this.colegiado}</td>
            </tr>`;
  }
}

class Cita {
  constructor(idMedico, paciente, fecha, hora) {
    this.id = idMedico;
    this.paciente = paciente;
    this.fecha = fecha;
    this.hora = hora;
  }
  //d de médico, el nombre del médico, el
  // nombre del paciente y la fecha y hora de la cita
  toHTMLRow() {
    let medico = hospital.medicos.find((medico) => medico.id == this.id);
    console.log("Esto es CitaHTMLROW:");
    console.log(medico);
    return `<tr>
    <td>${this.id}</td>
    <td>${medico.nombre}</td>
    <td>${this.paciente}</td>
    <td>${this.fecha}</td>
    <td>${this.hora}</td>
</tr>`;
  }
}
