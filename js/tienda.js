// Constructor de producto
function Producto(nombre,codigo,precio,stock,nivel){
    this.nombre = nombre;
    this.codigo = codigo;
    this.precio = precio;
    this.stock = stock;
    this.img = `${codigo}.png`;
    this.nivel = nivel
}
// Array con los productos
const productos = [
    producto = new Producto ("Dekiru Nihongo Rojo", "dekiru-nihongo-principiante",300,23,"Principiante"),
    producto = new Producto ("Dekiru Nihongo Amarillo", "dekiru-nihongo-intermedio",400,20,"Intermedio"),
    producto = new Producto ("Dekiru Nihongo Azul", "dekiru-nihongo-avanzado",500,5,"Avanzado"),
    producto = new Producto ("Shinkansen Master N3 - Lectura", "shinkansen-3-reading",530,6,"Avanzado"),
    producto = new Producto ("Shinkansen Master N4 - Lectura", "shinkansen-4-reading",350,10,"Intermedio"),
    producto = new Producto ("Shinkansen Master N4 - Vocabulario", "shinkansen-4-vocabulario",400,7,"Intermedio")
];

// Loop para generar las cards de cada producto

for (let i = 0; i < productos.length; i++){
    let containerProductos = document.getElementById('productos');
    let producto = document.createElement("div");
    producto.innerHTML = `
    <div class="texto-producto">
    <p>${productos[i].nombre}<p>
    <p>$${productos[i].precio}</p>
    <a name="${productos[i].codigo}" class="btn btn-dark añadir-al-carrito-btn"" >Añadir</a></div>
    <img src="../img/productos/${productos[i].img}" alt="${productos[i].nombre}">`;
    producto.className = "producto";
    containerProductos.append(producto);  
};

// Elementos del DOM
let carritoDelUsuario = [];
const numeroCarrito = document.getElementById('numero-carrito');
let botonDeAñadirAlCarrito = document.querySelectorAll(".añadir-al-carrito-btn");

// Revisar en local storage si ya hay productos en el carrito
window.addEventListener('load', function(){
    let carritoGuardado = JSON.parse(localStorage.getItem("carrito"));
    if (carritoGuardado != null){
        carritoDelUsuario = carritoGuardado;
        numeroCarrito.classList.add('numero-carrito');
        let numeroDeProductos = 0;
        for (let i = 0; i <carritoDelUsuario.length;i++){
            numeroDeProductos = numeroDeProductos + carritoDelUsuario[i].cantidad;
        }
        // Actualizar número del carrito
        numeroCarrito.innerText = `${numeroDeProductos}`;
    }
})

// Loop para agregar event listeners a los botones de cada producto
for (const e of botonDeAñadirAlCarrito){
    e.addEventListener('click',encontrarProducto);
}

function encontrarProducto (e) {
    carritoDelUsuario == 0 && numeroCarrito.classList.add('numero-carrito');
    // Encontrar la data del producto seleccionado
    let productoSeleccionado = productos.find((el) => el.codigo === e.target.name)
    // Guardar producto en el carrito del usuario
    agregarProducto(productoSeleccionado);
    // calcular cantidad de artículos
    let numeroDeProductos = 0;
    for (let i = 0; i <carritoDelUsuario.length;i++){
        numeroDeProductos = numeroDeProductos + carritoDelUsuario[i].cantidad;
    }
    // Actualizar número del carrito
    numeroCarrito.innerText = `${numeroDeProductos}`;

}

// Carrito del usuario
const carrito = document.getElementById('carrito');
const resumenCompra = document.getElementById('resumen-compra');

// Aparecer resumen de compra cuando el usuario da clic en la cesta
function revisarCarrito(){
    resumenCompra.style.visibility == 'visible'? desaparecerResumenCompra() : aparecerResumenCompra();
}

carrito.addEventListener('click', revisarCarrito);
    
function aparecerResumenCompra (){
    let carritoGuardado = JSON.parse(localStorage.getItem("carrito"));
    resumenCompra.style.visibility = 'visible';
    let carritoDeCompra = [];
    for (let i = 0; i < carritoGuardado.length; i++){
        carritoDeCompra.push(
           `<div class="producto-resumen">
           <div class="producto-resumen-texto"><p>${carritoGuardado[i].nombre}</p>
            <p>Total: $${carritoGuardado[i].precio}</p>
            <p>Cantidad: ${carritoGuardado[i].cantidad}</p></div>
            <img src="../img/productos/${carritoGuardado[i].img}" alt="${carritoGuardado[i].nombre}"></div>`
        );
    };
    let resultadoHTML = carritoDeCompra.join(" ");
    resumenCompra.innerHTML = `
    <h3>Tu carrito</h3>
    ${resultadoHTML}
    <a name="comprar" href="procesarCompra.html" class="btn btn-dark comprar-btn">Comprar</a></div>`
    ;  
};

function desaparecerResumenCompra(){
    resumenCompra.style.visibility = 'hidden';
}

// Procesar compra

function agregarProducto (producto) {
    const comprobarSiExiste = (element) => element.nombre === producto.nombre;
    if (carritoDelUsuario.some(comprobarSiExiste)){
        let productoEnElCarrito = carritoDelUsuario.find((el) => el.nombre === producto.nombre);
        productoEnElCarrito.precio = productoEnElCarrito.precio + producto.precio;
        productoEnElCarrito.cantidad++;

    } else {
        let productoTotal = {
            nombre: producto.nombre,
            cantidad: 1,
            precio: producto.precio,
            img: producto.img
        }
        carritoDelUsuario.push(productoTotal);
    }
    // guardar en local storage
    const carritoEnJson = JSON.stringify(carritoDelUsuario);
    localStorage.setItem("carrito", carritoEnJson);
};

// reiniciar carrito

const reiniciarBoton = document.getElementById('reiniciar');
reiniciarBoton.addEventListener('click',reiniciar);
function reiniciar () {
    localStorage.removeItem('carrito');
    location.reload(true);
    numeroCarrito.className = '';
};

