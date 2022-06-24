let billeteraVirtual = 0
const changuito = []


//Clase para crear Productos
class Producto {
    constructor(articulo) {
        this.tipo = articulo.tipo;
        this.id = articulo.id;
        this.nombre = articulo.nombre;
        this.precio = articulo.precio;
        this.imagen = articulo.imagen
    }
    sumaIva() {
        this.precio = Math.round(this.precio * 1.21);
    }
}

//Clase para crear Changuito
class ProductosEnCanasta {
    constructor(articulo) {
        this.tipo = articulo.tipo;
        this.id = articulo.id;
        this.nombre = articulo.nombre;
        this.precio = articulo.precio;
        this.imagen = articulo.imagen
        this.cantidad = 1;
    }
    cambiarCantidad(accion) {
        switch (accion) {
            case `sumar`:
                this.cantidad += 1;
                break;
            case `restar`:
                if (this.cantidad > 1) {
                    this.cantidad -= 1;
                } else {
                    const indexProducto = changuito.findIndex(indexElemento => indexElemento.id == this.id);
                    changuito.splice(indexProducto, 1);
                }
                break;
        }
    }
}



var myArray = [{ id: 1, name: 'John' }, { id: 2, name: 'Rick' }, { id: 3, name: 'Anna' }];
console.log(myArray)
myArray.splice(0, 2)
console.log(myArray)

//Funcion para sumar todos los productos del changuito.

const totalChanguito = () => {
    totalAPagar = changuito.reduce((total, elemento) => total + (elemento.precio * elemento.cantidad), 0);
    return (totalAPagar);
}


// Array de Objetos
let productosSinAlcohol = [
    new Producto({ tipo: "SA", id: "SA 1", nombre: "Sprite 2,25 Lts", precio: 300, imagen: `./imagenes/Sprite 2,25 Lts.jpg` }),
    new Producto({ tipo: "SA", id: "SA 2", nombre: "Coca 2,25 Lts", precio: 350, imagen: `./imagenes/Coca 2,25 Lts.jpg` })
];

// Array de Objetos
let productosConAlcohol = [
    new Producto({ tipo: "CA", id: "CA 1", nombre: "Fernet 750cc", precio: 915, imagen: `./imagenes/Fernet 750cc.jpg` }),
    new Producto({ tipo: "CA", id: "CA 2", nombre: "Gancia 950ml", precio: 495, imagen: `./imagenes/Gancia 950ml.jpg` })
];

// Array para Sumar unir los arrays
let misProductos = [];

// Array Concatenado entre productos con y sin alcohol
misProductos = productosSinAlcohol.concat(productosConAlcohol);
for (const productos of misProductos) {
    productos.sumaIva();
}

titulo.innerHTML = ` Bienvenido a nuestra tienda de Bebidas !`


const catalogoProductos = document.getElementsByClassName(`catalogoProductos`);
console.log(catalogoProductos);

let productoPrecio = document.querySelectorAll(`.catalogoProductosPrecio`)
let productoNombre = document.querySelectorAll(`.catalogoProductosTitulo`)
let productoImagen = document.querySelectorAll(`.catalogoProductosImg`)
let catalogoDeProductos = document.getElementById(`catalogo`)

// Utilizado para ver los productos con los botones.
const verTodo = document.getElementById(`verProductos`);
const verProduSA = document.getElementById(`verProductosSA`);
const verProduCA = document.getElementById(`verProductosCA`);

verTodo.addEventListener(`click`, () => { verTodoElCatalogo(misProductos) });
verProduCA.addEventListener(`click`, () => { verTodoElCatalogo(productosConAlcohol) });
verProduSA.onclick = () => { verTodoElCatalogo(productosSinAlcohol) };


// Funcion para ver todo el catalogo.
const verTodoElCatalogo = (productos) => {
    const listaProductosYaPasados = document.querySelectorAll(`.catalogoProductos`)
    for (const productosAnteriores of listaProductosYaPasados) {
        productosAnteriores.remove();
    }
    for (const catalogo of productos) {
        const etiqueta = document.createElement(`div`);
        etiqueta.className = `catalogoProductos`
        etiqueta.innerHTML = `
    <img src="${catalogo.imagen}" alt="${catalogo.nombre}" height="250" width="250" class="catalogoProductosImg"> 
    <div class="catalogoProductosDescripcion>
    <h1 class="catalogoProductosTitulo"> ${catalogo.nombre}</h1>
    <p class="catalogoProductosPrecio"> $ ${catalogo.precio} </p>
    </div>
    <div><button class="btn btn-secondary" id="agregar_${catalogo.id}">Agregar</button> </div>
    `
        catalogoDeProductos.append(etiqueta)
        botonAgregarProductos = document.getElementById(`agregar_${catalogo.id}`)
        botonAgregarProductos.addEventListener(`click`, (e) => {
            e.preventDefault();
            insertarProductosAChanguito(catalogo)
        })
    }
}

//variables usadas en el changuito.
let canastaDeCompras = document.getElementById(`canasta`);

//Funcion para saber index de un elemento del array por ID
saberI = (arrayABuscar, elementoBuscado) => {
    return (arrayABuscar.findIndex(elemento => elemento.id === elementoBuscado.id))
}

//Funcion para agregar productos al html
const agregarProductoAlChanguitoEnHtml = (productoAAgregar) => {
    const etiquetaChango = document.createElement(`div`);
    etiquetaChango.classList.add(`productosDelChanguito`);
    etiquetaChango.id = `${productoAAgregar.id}`;
    etiquetaChango.innerHTML = `
<img src="${productoAAgregar.imagen}" alt="${productoAAgregar.nombre}" height="250" width="250" class="changuitoProductoImagen">
<div class="changuitoDescripcionProducto">
<h1>Producto: ${productoAAgregar.nombre}</h1>
<p>Precio por Unidad: ${productoAAgregar.precio}</p>
<p id="cantidad_${productoAAgregar.id}">Cantidad agregada: 1 </p>
</div> 
<div><button id="elminiar_${productoAAgregar.id}">Elminiar</button> </div>`
    canastaDeCompras.append(etiquetaChango)
}

//Funcion para agregar productos al changito.
insertarProductosAChanguito = (producto) => {
    let index = saberI(changuito, producto)
    if (index > -1) {
        changuito[index].cambiarCantidad(`sumar`);
        cantidad = document.getElementById(`cantidad_${producto.id}`)
        cantidad.innerHTML = `Cantidad agregada: ${changuito[index].cantidad} `
    } else {
        changuito.push(new ProductosEnCanasta({ tipo: producto.tipo, id: producto.id, nombre: producto.nombre, precio: producto.precio, imagen: producto.imagen }))
        agregarProductoAlChanguitoEnHtml(producto);
        botonParaEliminarProductosDeChanguito(producto);
    }
}

//Funcion para el boton para eliminar productos.
botonParaEliminarProductosDeChanguito = (productoAEliminar) => {
    for (productosEnChango of changuito) {
        const eliminarUnProducto = document.getElementById(`elminiar_${productoAEliminar.id}`)
        const cantidadProducto = document.getElementById(`cantidad_${productoAEliminar.id}`)
        let index = saberI(changuito, productoAEliminar)
        eliminarUnProducto.onclick = () => {
            changuito[index].cambiarCantidad(`restar`);
            if (changuito[index].cantidad > 0) {
                cantidadProducto.innerHTML = `Cantidad agregada: ${changuito[index].cantidad} `
            } else {
                //la idea del else es poder remover los objetos! 
                const listadoDeProductosActualizado = document.querySelectorAll(`.productosDelChanguito`)
            }
        }
    }
}

//Inputs  para nombre y apellido
const nombreInput = document.getElementById(`nombre`);
const apellidoInput = document.getElementById(`apellido`);
const respuestaInput = document.getElementById(`respuesta`);
const formularioInput = document.getElementById(`datosPersonales`);

formularioInput.onsubmit = (e) => {
    e.preventDefault();
    respuestaInput.innerHTML = `Bienvenido ${nombreInput.value} ${apellidoInput.value}`
}

//Inputs  para agregar dinero
const dineroInput = document.getElementById(`saldo`);
const formDinero = document.getElementById(`dineroAGastar`);
const dineroIngresado = document.getElementById(`dineroIngresado`);

formDinero.onsubmit = (e) => {
    e.preventDefault();
    billeteraVirtual = dineroInput.value
    dineroIngresado.innerHTML = `Su Saldo Actual es: $ ${billeteraVirtual}`
}