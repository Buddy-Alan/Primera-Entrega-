let ingresarDinero = 0
let billeteraVirtual = 0
let opciones
let selecOpcion = 0
let tipoTarjeta = 0
const changuito = []


//Clase para crear objetos
class Producto {
    constructor(tipo, id, nombre, precio) {
        this.tipo = tipo;
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
    sumaIva() {
        this.precio = Math.round(this.precio * 1.21);
    }
}

class ProductosEnCanasta {
    constructor(tipo, id, nombre, precio, cantidad) {
        this.tipo = tipo;
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = 1;
    }
    cambiarCantidad(accion) {
        switch (accion) {
            case `sumar`:
                this.cantidad += 1;
                break;
            case `restar`:
                this.cantidad -= 1;
                break;
        }
    }
}

// Array de Objetos
let productosSinAlcohol = [
    new Producto("SA", 1, "Sprite 2,25 Lts", 300),
    new Producto("SA", 2, "Coca 2,25 Lts", 350)
];

// Array de Objetos
let productosConAlcohol = [
    new Producto("CA", 1, "Fernet 750cc", 915),
    new Producto("CA", 2, "Gancia 950ml", 495)
];

// Array para Sumar unir los arrays
let misProductos = [];

misProductos = productosSinAlcohol.concat(productosConAlcohol);

// for Of para aplicar la suma de iva.
for (const productos of misProductos) {
    productos.sumaIva();
}

console.log(misProductos);

const clickSobreProducto = () => {
    let consutlarTipo = prompt(` Los tipos son: 
                                - SA de Sin Alcohol.
                                - CA  de Con Alcohol. 
                                Escribe tipo de Producto por favor: `);
    consutlarTipo = consutlarTipo.toUpperCase();
    let consultarId = Number(prompt(`Ingrese ID: `));
    const productoABuscar = misProductos.findIndex(elemen => elemen.tipo === consutlarTipo && elemen.id === consultarId);
    console.log(productoABuscar);
    // const productoAAgregar = misProductos.find(elemen => elemen.tipo === consutlarTipo && elemen.id === consultarId)
    // let productoABuscar = misProductos.indexOf(productoAAgregar);
    changuito.push(new ProductosEnCanasta(misProductos[productoABuscar].tipo, misProductos[productoABuscar].id, misProductos[productoABuscar].nombre, misProductos[productoABuscar].precio))
}


const medioDePAgo = () => {
    for (let i = 0; i < 1; i++) {
        tipoTarjeta = Number(prompt(`Seleccione el medio de pago a utilizar:
        1- Tarjeta de Debito
        2- Tarjeta de Credito
        3- Volver a pagina Anterior`));

        switch (tipoTarjeta) {
            case 1:
                alert("Seleccionaste el medio de pago tarjeta de Debito.");
                recargarSaldo();
                break;
            case 2:
                alert("Seleccionaste el medio de pago tarjeta de Credito.");
                recargarSaldo();
                break;
            case 3:
                alert("Volviendo a pagina anterior")
                break;
            default:
                alert("Por favor ingrese un dato de los anteriormente esablecidos")
                i--
        }
    }

}

// Funcion para ver si alcanza el saldo para comprar productos
const verSiAlcanzaSaldo = (dinero, producto, nombreProducto) => {
    if (dinero >= producto) {
        dinero = dinero - producto;
        alert(`¡Usted Compro el producto seleccionado!`)
        return (dinero);
    } else {
        alert("Su dinero no alcanza para la compra");
        return (dinero);
    }
}

// Funcion para recargar saldo
const recargarSaldo = () => {
    do {
        ingresarDinero = Number(prompt("Ingrese su dinero: "))
        if (ingresarDinero !== Number(ingresarDinero)) {
            alert("Ingrese unicamente numeros");
        }
    }

    while (ingresarDinero !== Number(ingresarDinero))

    billeteraVirtual = billeteraVirtual + ingresarDinero;
}

// Funcion para ver productos.
const productos = () => {
    opciones = Number(prompt(`
    1- ${misProductos[0].nombre} a $${misProductos[0].precio}
    2- ${misProductos[1].nombre} a $${misProductos[1].precio}
    3- ${misProductos[2].nombre} a $${misProductos[2].precio}
    4- ${misProductos[3].nombre} a $${misProductos[3].precio}
    5- Simular Filtrar Productos, clickear productos, y  Agregar a Canasta.
    6- Saber Que hay en Canasta
    7- Volver a Atras
    `))
    switch (opciones) {
        case 1:
            {
                billeteraVirtual = verSiAlcanzaSaldo(billeteraVirtual, misProductos[0].precio);
                break;
            }
        case 2:
            {
                billeteraVirtual = verSiAlcanzaSaldo(billeteraVirtual, misProductos[1].precio);
                break;
            }
        case 3:
            {
                billeteraVirtual = verSiAlcanzaSaldo(billeteraVirtual, misProductos[2].precio);
                break;
            }
        case 4:
            {
                billeteraVirtual = verSiAlcanzaSaldo(billeteraVirtual, misProductos[3].precio);
                break;
            }
        case 5:
            {
                clickSobreProducto();
                break;
            }
        case 6:
            {
                console.log(changuito);
                break;
            }
        case 7:
            {
                alert("Volviendo a Pagina Anterior")
                break;
            }
        default:
            {
                alert("Por favor selecione un numero de los establecidos");
                break;
            }
    }
}



do {
    selecOpcion = Number(prompt(`¡Bienvenido a la tienda online de bebidas!
Su Dinero Actual es: ${billeteraVirtual}
    -1 Ir a productos
    -2 Recargar Saldo
    -3 Salir`))


    switch (selecOpcion) {
        case 1:
            {
                productos();
                break;
            }
        case 2:
            {
                medioDePAgo();
                break;
            }
        case 3:
            {
                alert(`Muchas gracias por confiar en nosotros, ¡vuelva pronto!
                Su saldo sobrante es de: ${billeteraVirtual}
                `)
                break;
            }
        default:
            {
                alert("Por favor selecione un numero de los establecidos")
                break
            }
    }
}

while (selecOpcion != 3);