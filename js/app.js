class Articulo {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const articulos = [
    new Articulo("rtx3060", 250),
    new Articulo("rtx3090", 400),
    new Articulo("rtx4070", 800),
    new Articulo("ps5", 900),
    new Articulo("xboxOne", 250),
    new Articulo("dualsense", 130),
]

const articulosSeleccionados = [];

function añadirArticulo(x) {
    articulosSeleccionados.push(x);
};

function obtenerArticulo() {
    confirm("Seleccione 3 productos para adquirir su descuento");
    let seleccion = prompt("1:rtx3060, 2:rtx3090, 3:rtx4070, 4:ps5, 5:xboxOne, 6:dualsense");
    if (seleccion == 1)  {
     return "rtx3060";
    }else if (seleccion == 2) {
        return "rtx3090";
    }else if (seleccion == 3){
        return "rtx4070";
    }else if (seleccion == 4) {
        return "ps5";
    }else if (seleccion == 5) {
        return "xboxOne";
    }else if (seleccion == 6) {
        return "dualsense";
    }else{
        alert("El producto ingresado no existe, intente con otro");
        obtenerArticulo();
    }
};

alert("Bienvenido a PattoTech"+","+ "Todos los productos tienen 10% de descuento si compras 2 20% y si compras 3 30%");

for(let i = 0; i <3; i++) {
    const nombreArticulo = obtenerArticulo();
    const articulo1 =  articulos.find(articulo => articulo.nombre == nombreArticulo);

    añadirArticulo(articulo1);
}

for (let i = 0; i < articulosSeleccionados.length; i++) {
    const elemento = articulosSeleccionados[i];
    console.log(elemento);
}

console.log(articulosSeleccionados);

const preciosSeleccionados = articulosSeleccionados.map(art=> art.precio);
console.log(preciosSeleccionados);

const descuentosFinales = [];

preciosSeleccionados.forEach((art, i) => {
    let descuentos = 0;
    descuentos += Math.round(0.1 * (i + 1) * art);
    return descuentosFinales.push(descuentos);

});

console.log(descuentosFinales);

let descuentoTotal = 0;
descuentosFinales.forEach((descuento) => {

    descuentoTotal += descuento;
})
alert(`El descuento aplicado es de: $ ${descuentoTotal} USD`);

let preciosSinDescuento = 0;
preciosSeleccionados.forEach((precio) => {
    preciosSinDescuento += (precio);
})
alert(`El monto total para pagar es de $ ${preciosSinDescuento - descuentoTotal} USD`);