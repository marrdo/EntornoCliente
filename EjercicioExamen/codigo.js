"use strict";

///////////////////
// FUNCTIONS
///////////////////

///////////////////
// MAIN
///////////////////

/*      //////// CREACION DEL OBJETO ALMACEN ////////////       */
//Primero creamos el objeto almacen. Lo que supone crear los dos arrays
let almacen = new Almacen();

//Creamos las variables directas de los arrays que creamos con almacen
let catalogo = almacen.catalogo;
let stock = almacen.stock;
console.log(catalogo);
console.log(stock);
console.log("debajo esta almacen");
console.log(almacen);

/* ///////////////// FORMULARIO DE ALTA PRODUCTO //////////////*/
/*Recuperamos todas las clases que se llamen formulario
Esto nos devuelve una lista con todos los nodos que tiene la clase.
*/
const listaDeFormularios = document.querySelectorAll(".formulario");

/*
claseFormulario devuelve una NodeList, esto significa que devuelve una
lista de nodos HTML, por tanto, para poder aplicarlo a cada
uno de los list de la lista hay que recorrerlo con un foreach como
si se tratase de un array.
*/

/*Las ocultamos mediante la clase oculto*/
listaDeFormularios.forEach((formulario) => {
  formulario.classList.add("oculto");
});

/*//////////////// ALTA PRODUCTO ////////////////////////*/
/*Boton de alta producto, funcionalidad*/
//1.- Rescatamos el formulario alta producto
const frmAltaProducto = document.querySelector("#frmAltaProducto");
//2.- Rescatamos el botón de Alta de Producto
const btnFormAltaProducto = document.querySelector("#btnFormAltaProducto");
//3.- Hacemos que el boton elimine el display oculto

btnFormAltaProducto.addEventListener("click", () => {
  /*Esto lo hago para ocultar todas las clases cuando se puls el Boton
    de este modo, pule el boton que pulse, siempre se oculta todo y 
    se muestra el que yo quiera con el click del boton.*/
  listaDeFormularios.forEach((formulario) => {
    formulario.classList.add("oculto");
  });

  frmAltaProducto.classList.remove("oculto");
});

//4.- Recogemos los datos que introduce el usuario
//      ID
const idProducto = document.querySelector('input[name="txtIdProducto"]');
//      NOMBRE
const nombreProdcuto = document.querySelector('input[name="txtNombre"]');
//      PRECIO
const precioProducto = document.querySelector('input[name="txtPrecio"]');
//      MODELO DE MOVIL
const modeloMovil = document.querySelector('input[name="txtModelo"]');
//      ANDROID comprobarlo si estáchecked o no
// Primero rescato el boton.
let androidCheckbox = document.querySelector('input[name="txtAndroid"]').value;
//Con la variable android obtengo un boolean de tru si lo esta o false si no.
let android = androidCheckbox.checked;
//      MATERIAL CARCASA
let materialSelect = document.querySelector('select[name="txtMaterial"]');
let material = materialSelect.value;

/*/ COMPROBAR CUAL ES LA OPCION QUE ELIGE EL USUARIO MOVIL O CARCASA /*/
/* //////////////// Fieldset de movil y de carcasa ////////////*/
const fMovil = document.querySelector("#fMovil");
const fCarcasa = document.querySelector("#fCarcasa");
/* Recuperamos los campos radio que se pueden selecionar
Al recuperar tipoProducto con un querySelectorAll nos devuelve una 
lista con todos los input[name="txtTipo"], al recorrer la lista sabremos
cual esta cheked.
*/
let tipoProducto = document.querySelectorAll('input[name="txtTipo"]');

/*Recorremos los input radio que hemos recodigo a ver cual esta checked.*/

// Itera sobre todos los elementos del conjunto de radio buttons con el nombre 'txtTipo'.
tipoProducto.forEach((boton) => {
  // Añade un evento de cambio para cada botón de radio.
  boton.addEventListener("change", () => {
    // Verifica si el valor del botón de radio seleccionado es 'movil'.
    if (boton.value == "movil") {
      // Si es 'movil', muestra el fieldset de Móvil y oculta el de Carcasa.
      fMovil.classList.remove("oculto");
      fCarcasa.classList.add("oculto");
    } else {
      // Si no es 'movil', oculta el fieldset de Móvil y muestra el de Carcasa.
      fMovil.classList.add("oculto");
      fCarcasa.classList.remove("oculto");
    }
  });
});

/* //////////// BOTON ALTA PRODUCTO //////////////// */
/* Metemos todos los valores en el array de catalogo */
// Recuperamos boton de alta
const btnAltaProducto = document.querySelector("#btnAltaProducto");

// Le añadimos el addEventListener
btnAltaProducto.addEventListener("click", () => {
  console.log("hola");
  // Tipo de producto es la lista de botones de selección de tipo de producto
  tipoProducto.forEach((boton) => {
    if (boton.value === "movil") {
      // Obtén los valores de los campos de entrada
      const idProductoValue = idProducto.value;
      const nombreProductoValue = nombreProdcuto.value;
      const precioProductoValue = precioProducto.value;
      const modeloMovilValue = modeloMovil.value;
      const androidCheckboxValue = androidCheckbox.checked;

      // Crea una nueva instancia de Movil con los valores obtenidos
      let movil = new Movil(
        idProductoValue,
        nombreProductoValue,
        precioProductoValue,
        modeloMovilValue,
        androidCheckboxValue
      );

      // Añade el nuevo objeto Movil al array catalogo
      if (almacen instanceof Almacen) {
        almacen.altaProducto(movil);
      }
    } else {
      const idProductoValue = idProducto.value;
      const nombreProductoValue = nombreProdcuto.value;
      const precioProductoValue = precioProducto.value;
      //Con carcasa ya tenemos el material gracias a materialSelect.value en material

      let carcasa = new Carcasa(
        idProductoValue,
        nombreProductoValue,
        precioProductoValue,
        material
      );

      if (almacen instanceof Almacen) {
        almacen.altaProducto(carcasa);
      }
    }
  });
});

/* /////////////////// FORMULARIO DE MODIFICACION DE STOCK //////////// */
//Recuperamos el formulario de modificacion de Stock
const formModificaStock = document.querySelector('#frmEntradaSalidaStock');
//Recuperamos el boton de modificar el Stock
const btnModificaStock = document.querySelector('#btnFormEntradaSalidaStock');

//Hacemos que solo se vea el formualrio de modificacion de stock.
btnModificaStock.addEventListener("click",()=>{
    listaDeFormularios.forEach((formulario) => {
        formulario.classList.add("oculto");
      });
    
      formModificaStock.classList.remove("oculto");
});

//Recogemos los datos de entrada y salida de stock
const idProductoStock = document.querySelector('input[name="txtIdProductoStock"]').value;
const unidadesStock = document.querySelector('input[txtNumUnidades]').value;

//Recuperamos el boton de Entrada salida para hacer acciones en el array
const btnEntrSalida = document.querySelector('#btnEntradaSalidaStock');
//Accionamos el boton con un evento click. Usamos los metodos de los objetos.
