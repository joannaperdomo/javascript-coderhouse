
let carritoGuardado = JSON.parse(localStorage.getItem("carrito"));

// Mostrar cada item del carrito
for (let i = 0; i < carritoGuardado.length; i++){
    let containerProductos = document.getElementById('listado-productos');
    let producto = document.createElement("li");
    producto.innerHTML = `
        <div class="ms-2 me-auto">
        <div class="fw-bold">${carritoGuardado[i].nombre}</div>
            Precio total: $${carritoGuardado[i].precio}
        </div>
        <span class="badge bg-dark rounded-pill">${carritoGuardado[i].cantidad}</span>`;
    producto.className = "list-group-item d-flex justify-content-between align-items-start";
    containerProductos.append(producto);  
};

// Total de la compra
let totalDelPedido = 0;

for (let valor of carritoGuardado){
    let cantidad = valor.precio;
    totalDelPedido += cantidad;
}

const cuentaFinal = document.getElementById('cuenta-final');
cuentaFinal.innerText = `Total del pedido: $${totalDelPedido}`;