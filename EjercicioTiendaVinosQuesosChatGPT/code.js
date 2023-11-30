"use strict";

/////////////
//FUNCTIONS
/////////////


function ocultarFormularios(){

    document.querySelectorAll('form').forEach((f)=>{
        f.classList.add('oculto');
    });
}

function mostrarAgregar(){
    ocultarFormularios();
    const formAlta = document.querySelector('#frmAltaProducto');
    formAlta.classList.remove('oculto');
}

function agregarDatos(){
    
    let nombreProducto = document.querySelector('#txtNombre').value;
    let tipoProducto = document.querySelector('input[name=lstTipos]:checked').value;
    let precio = document.querySelector('#txtPrecio').value;
    let estado = document.querySelector('input[name=rbtEstado]:checked').value;

    if(tipoProducto == 'vino'){
        let anioCosecha = document.querySelector('#lstAnioCosecha').value;
        let vino = new Vino(nombreProducto,anioCosecha,tipoProducto,precio,estado);

        tienda.agregarProducto(vino);
        console.log(tienda.almacen);

    }else{
        let lstOrigen = document.querySelector('#lstOrigen').value;
        let queso = new Queso(nombreProducto,tipoProducto,lstOrigen,precio,estado);

        tienda.agregarProducto(queso);
        console.log(tienda.almacen);
    }

}

function mostrarVender(){
    ocultarFormularios();
    const formVender = document.querySelector('#frmVentaProducto');
    formVender.classList.remove('oculto');
}

function venderProducto(){
    let nomProducto = document.querySelector('#txtLocalizador').value;
    tienda.venderProducto(nombreProducto);
}

/////////////
//MAIN  
/////////////

let tienda = new Tienda();

console.log(tienda.almacen);

ocultarFormularios();

const btnFrmAgregar = document.querySelector('#btnFrmAgregarProducto');

btnFrmAgregar.addEventListener('click',mostrarAgregar);

const btnAgregarProducto = document.querySelector('#btnAgregarProducto');
btnAgregarProducto.addEventListener('click',agregarDatos);


const btnFormVender = document.querySelector('#btnFrmVenderProducto');
btnFormVender.addEventListener('click', mostrarVender);

const btnVender = document.querySelector('click',venderProducto);

const btnRefrescar = document.querySelector('#btnRefrescarTotales');
btnRefrescar.addEventListener('click',()=>{
    const seccionTotal = document.querySelector('#seccionTotales');
    let totalProductos = tienda.almacen.length;
    let productosVendidos= tienda.almacen.find((p)=>p.estado == 'agotado') || 0;
    console.log(productosVendidos);
    productosVendidos = productosVendidos.length ;
    console.log(productosVendidos);
    let productosEnStock = tienda.almacen.find((p)=>p.estado === 'disponible') || 0;
    console.log(productosEnStock);
    productosEnStock = productosEnStock.length ;
    console.log(productosEnStock);

    seccionTotal.innerHTML = "";
    seccionTotal.innerHTML += `<p>Hay ${totalProductos} cantidad de productos en el almacen</p>`;
    seccionTotal.innerHTML += `<p>Hay ${productosVendidos} cantidad de productos vendidos</p>`;
    seccionTotal.innerHTML += `<p>Hay ${productosEnStock} cantidad de productos en stock</p>`;
});