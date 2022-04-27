
let carritoGuardado = JSON.parse(localStorage.getItem("carrito"));

for (let i = 0; i < carritoGuardado.length; i++){
    let containerProductos = document.getElementById('productos');
    let producto = document.createElement("div");
    producto.innerHTML = `
    <div class="texto-producto">
    <p>${carritoGuardado[i].nombre}<p>
    <p>Total: $${carritoGuardado[i].precio}</p>
    <p>Cantidad: ${carritoGuardado[i].cantidad}</p>
    </div>
    <img src="../img/productos/${carritoGuardado[i].img}" alt="${carritoGuardado[i].nombre}">`;
    producto.className = "producto";
    containerProductos.append(producto);  
};