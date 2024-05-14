// boton carrito es el link con la imagen de carrito
const botonCarrito = document.querySelector("a#carrito");


const carrito = [];

// contenedor de las cards 
const contenedor = document.getElementById("contCard");

    // funcion para que aparezca el carrito en 0
    function iniciarTodo(){
        if(carrito.length=== 0){
        botonCarrito.innerHTML="<span>0</span>";  
        }
    }
    iniciarTodo()

// actualiza el estado del carrito , cada vez que se da click en un boton de comprar.
function actualizarEstadoCarrito(){
    if(carrito.length > 0) {
        botonCarrito.innerHTML ="<span>" + carrito.length + "</span>";
    } 
}

// si existen productos en productos.js usa la funcion retornarCard para armar el html con esa info.
    function cargarProducto(array) {
        if(array.length > 0){
            array.forEach((producto) => {
                contenedor.innerHTML += retornarCard(producto)
            })
        activarBotonesComprar();
        } else {
            alert("error")
        }
    }

cargarProducto(productos);


// funcion retorna una card armada en html con datos de productos.js
function retornarCard(producto){
    return ` <div class="card">
    <div class="card-body">
    <img src='${producto.imagen}' />
      <h2 class="card-title">${producto.nombre}</h2>
      <p class="price-card">$ ${producto.precio.toLocaleString('es-AR')}</p>
      <button id=${producto.id} class="btn btn-success mt-2">Comprar</button>
    </div>
  </div>`
}

// hacer una funcion que active los botones de comprar 
function activarBotonesComprar() {
    const botonesComprar = document.querySelectorAll("button.btn-success");
    for(let boton of botonesComprar){
        boton.addEventListener("click",() => {
        const productoSeleccionado = productos.find((producto) => producto.id === parseInt(boton.id))
        carrito.push(productoSeleccionado)
        actualizarEstadoCarrito()
        localStorage.setItem('miCarrito', JSON.stringify(carrito));
        })
    }
}

// evento redirije al listado de productos elegidos
botonCarrito.addEventListener("click",() => {
    event.preventDefault();
    if(carrito.length > 0) { 
       location.href="tucompra.html";
       
    } else {
        alert("debes agregar al menos un producto")
    }
})