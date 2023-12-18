"use strict";

let btnCambio = document.querySelector("input[name=cambio]:checked").value;
let li = document.createElement("li");
const apro = document.querySelector(".aprobado");
const susp = document.querySelector(".suspenso");

const listaAlumnos = document.querySelector(".listaAlumnos");

listaAlumnos.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() == "li") {
    let text = e.target;
    listaAlumnos.removeChild(e.target);

    switch (btnCambio) {
      case "aprobado":
        apro.append(text);
        console.log(e.target.tagName);
        break;

      case "suspenso":
        susp.appendChild(text);
        break;

      default:
        break;
    }
  }
});

// apro.addEventListener("click", (e) => {
//   if (e.target.tagName.toLowerCase() == "li") {
//     let text = e.target.innerHTML;
//     apro.removeChild(e.target);

//     switch (btnCambio) {
//       case "aprobado":
//         listaAlumnos.appendChild(li).innerHTML = text;
//         console.log(e.target.tagName);
//         break;

//       case "suspenso":
//         apro.appendChild(li).innerHTML = text;
//         console.log(e.target.tagName);
//         break;

//       default:
//         break;
//     }
//   }
// });

// susp.addEventListener('click',(e)=>{
//     if (e.target.tagName.toLowerCase() == "li") {
//         let text = e.target.innerHTML;
//         susp.removeChild(e.target);
    
//         switch (btnCambio) {
//           case "aprobado":
//             apro.appendChild(li).innerHTML = text;
//             console.log(e.target.tagName);
//             break;
    
//           case "suspenso":
//             listaAlumnos.appendChild(li).innerHTML = text;
//             console.log(e.target.tagName);
//             break;
    
//           default:
//             console.log(e.target.tagName);
//             break;
//         }
//       }
// });
