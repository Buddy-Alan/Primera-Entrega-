let ingresarDinero = 0
let billeteraVirtual = 0
let fernet = Number(600);
let coca = Number(300);
let sprite = Number(300);
let gancia = Number(500);
let opciones
let selecOpcion = 0
let tipoTarjeta = 0

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
const verSiAlcanzaSaldo = (dinero, producto) => {
    if (dinero >= producto) {
        dinero = dinero - producto;
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
    1- Fernert $600
    2- Coca $300
    3- Sprite $300
    4- Gancia $500
    5- Volver a Atras
    `))
    switch (opciones) {
        case 1:
            {
                billeteraVirtual = verSiAlcanzaSaldo(billeteraVirtual, fernet);
                break;
            }
        case 2:
            {
                billeteraVirtual = verSiAlcanzaSaldo(billeteraVirtual, coca);
                break;
            }
        case 3:
            {
                billeteraVirtual = verSiAlcanzaSaldo(billeteraVirtual, sprite);
                break;
            }
        case 4:
            {
                billeteraVirtual = verSiAlcanzaSaldo(billeteraVirtual, gancia);
                break;
            }
        case 5:
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