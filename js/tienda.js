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

// Carrito del usuario
const carritoDelUsuario = [];
const numeroCarrito = document.getElementById('numero-carrito');

// Get elements del DOM
let botonDeAñadirAlCarrito = document.querySelectorAll(".añadir-al-carrito-btn");

for (const e of botonDeAñadirAlCarrito){
    e.addEventListener('click',encontrarProducto);
}

function encontrarProducto (e) {
    carritoDelUsuario == 0 && numeroCarrito.classList.add('numero-carrito');
    // Encontrar la data del producto seleccionado
    let productoSeleccionado = productos.find((el) => el.codigo === e.target.name)
    // Guardar producto en el carrito del usuario
    carritoDelUsuario.push(productoSeleccionado);
    // Guardar producto en localStorage
    numeroCarrito.innerText = `${carritoDelUsuario.length}`;

}

// Carrito
const carrito = document.getElementById('carrito');
const resumenCompra = document.getElementById('resumen-compra');

function revisarCarrito(){
    console.log('test');
    resumenCompra.style.visibility == 'visible'? desaparecerResumenCompra() : aparecerResumenCompra();
}


carrito.addEventListener('click', revisarCarrito);
    
function aparecerResumenCompra (){
    resumenCompra.style.visibility = 'visible';
    let carritoDeCompra = [];
    for (let i = 0; i < carritoDelUsuario.length; i++){
        carritoDeCompra.push(
           `<div class="producto-resumen">
           <div class="producto-resumen-texto"><p>${carritoDelUsuario[i].nombre}</p>
            <p>$${carritoDelUsuario[i].precio}</p></div>
            <img src="../img/productos/${carritoDelUsuario[i].img}" alt="${carritoDelUsuario[i].nombre}"></div>`
        );
    };
    let resultadoHTML = carritoDeCompra.join(" ");
    resumenCompra.innerHTML = `
    <h3>Tu carrito</h3>
    ${resultadoHTML}
    <a name="comprar" href="procesarcompra.html" class="btn btn-dark comprar-btn">Comprar</a></div>`
    ;  
};

function desaparecerResumenCompra(){
    resumenCompra.style.visibility = 'hidden';
}


// Procesar compra