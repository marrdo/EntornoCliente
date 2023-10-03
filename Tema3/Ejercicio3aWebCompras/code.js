"use strict";

let arrProductos = [
  ["Ambientador", 1.25],
  ["Queso en lonchas", 2.8],
  ["Turrón de chocolate", 1.7],
  ["Chirimoya", 1.54],
  ["Granada", 0.48],
  ["Arroz", 1.3],
];

let precioTotalProducto;
let carrito = [];

function imprimirPedido() {
    fueraProductos.InnerHTML = "";
  totalPedido.InnerHTML = "";
  for (let i = 0; i < carrito.length; i++) {
    totalPedido.InnerHTML +=
      carrito[i][0] + " " + carrito[i][1] + " " + carrito[i][2] + "<br>";
  }
}

function almacenar() {
  let nombre = document.getElementById("productos").value;
  let cantidad = document.getElementById("cantidad").value;
  alert(nombre + " " + cantidad);
  for (let i = 0; i < arrProductos.length; i++) {
    if (nombre == arrProductos[i][0]) {
      precioTotalProducto = cantidad * arrProductos[i][1];
    }
    carrito.push([nombre, precioTotalProducto, cantidad]);
  }
}

let aniadir = document.getElementById("btnAniadir");

aniadir.addEventListener("click", almacenar);

let hacerPedido = document.getElementById("btnPedido");

hacerPedido.addEventListener('click', imprimirPedido);
