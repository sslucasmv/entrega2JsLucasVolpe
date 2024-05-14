
const tableBody = document.querySelector("tbody")


function recuperarCarrito(){
    return JSON.parse(localStorage.getItem("miCarrito"))

}


const carrito = recuperarCarrito();


function armarFilaHtml(producto){
    return `  <tr>
    <td>${producto.id}</td>
    <td>${producto.codigoProd}</td>
    <td>${producto.nombre}</td>
    <td>${producto.precio}</td>
    <td>${producto.categoria}</td>
</tr>`
}





if(carrito){
    tableBody.innerHTML = "";
    carrito.forEach((producto) => {
        tableBody.innerHTML += armarFilaHtml(producto)
      
    })
}