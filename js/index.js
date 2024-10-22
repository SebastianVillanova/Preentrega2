
let carrito = [];
let carritoNuevo = [];
let carritoPrecio = [];
let totalProductos;

let cards = [
    {   nombre: "Guitarra Electrica Ibanez S970cwnt Ser. Premium - Natural",
        precio: 1760879,
        descuento: true
    },
    {   nombre: "Guitarra Electrica Ibanez Rg950 Qmzbi Premium 6c Black Ice",
        precio: 1819099,
        descuento: false
    },
    {   nombre: "Guitarra Eléctrica Guild S100 Polara Solid Body Caoba Cherry",
        precio: 2819699,
        descuento: false
    },
    {   nombre: "Guitarra Electrica EpiPhone Les Paul Classic Color Negra",
        precio: 1288599,
        descuento: false
    },
    {   nombre: "Guitarra Electrica Esp Ltd Sc337 Bk 7 Cuerdas",
        precio: 1441699,
        descuento: false
    },
    {   nombre: "Guitarra Eléctrica Ltd Ec401bk Tipo Les Paul 2 Humbucker Emg",
        precio: 3379899,
        descuento: false
    }
];

function sumarCarrito(a){
    carrito.push(a);
}


function revisarCarrito(){
    let nombre = prompt("ingrese producto");
    for (let nombres of cards){
        carritoNuevo.push(nombres.nombre);
    }
    if(carritoNuevo.includes(nombre)){
        sumarCarrito(nombre);
    } else{
        alert("El producto no se encuentra en venta");
    }
}

/// 
function precioCarrito(){
    for(let precios of cards){
        if (carrito.includes(precios.nombre)){
            carritoPrecio.push(precios.precio);
        }
        totalProductos = carritoPrecio.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
}

revisarCarrito();
revisarCarrito();
precioCarrito();

alert(`Su carrito tiene los productos: 
${carrito}`);
alert(`Precio total del carrito : ${totalProductos}`);


