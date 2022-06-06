let ingresarDinero = 0
let billeteraVirtual = 0
let fernet = 600
let coca = 300
let sprite = 300
let gancia = 500
let opciones
let selecOpcion = 0

const verSiAlcanzaSaldo = (dinero, producto) => {
    if (dinero >= producto) {
        dinero = dinero - producto;
        return (dinero);
    } else {
        alert("Su dinero no alcanza para la compra");
        return (dinero);
    }
}

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

const productos = () => {
    opciones = Number(prompt(`
    1- Fernert $600
    2- Coca $300
    3- Sprite $300
    4- Gancia $500
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
        default:
            {
                alert("Por favor selecione un numero de los establecidos");
                break;
            }
    }
}



do {
    selecOpcion = Number(prompt `¡Bienvenido a la tienda online de bebidas!
Su Dinero Actual es: ${billeteraVirtual}
    -1 Ir a productos
    -2 Recargar Saldo
    -3 Salir`)


    switch (selecOpcion) {
        case 1:
            {
                productos();
                break;
            }
        case 2:
            {
                recargarSaldo();
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