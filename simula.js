const dbIngredientes = [

    {

        nombre: "harina",
        unidad: "kg",
        familia: "harinas y otros",
        unidadprecio: "kg",
        precio: 1.27,
        moneda: "U$S",
    },
    {

        nombre: "levadura",
        unidad: "sobre",
        familia: "harinas y otros",
        unidadprecio: "sobre",
        precio: 0.8,
        moneda: "U$S",
    },
    {

        nombre: "sal",
        unidad: "paq",
        familia: "condimentos",
        unidadprecio: "paq",
        precio: 1.43,
        moneda: "U$S",
    },
    {

        nombre: "azucar",
        unidad: "kg",
        familia: "harinas y otros",
        unidadprecio: "kg",
        precio: 1.46,
        moneda: "U$S",
    },
    {

        nombre: "agua",
        unidad: "lt",
        familia: "liquidos",
        unidadprecio: "lt",
        precio: 0.83,
        moneda: "U$S",
    },
    {

        nombre: "leche",
        unidad: "lt",
        familia: "lacteos",
        unidadprecio: "lt",
        precio: 1.07,
        moneda: "U$S",
    },
    {

        nombre: "aceite",
        unidad: "lt",
        familia: "liquidos",
        unidadprecio: "lt",
        precio: 2.42,
        moneda: "U$S",
    },
    {

        nombre: "tomates",
        unidad: "kg",
        familia: "frutas y verduras",
        unidadprecio: "kg",
        precio: 1.9,
        moneda: "U$S",
    },
    {

        nombre: "tomillo",
        unidad: "atado",
        familia: "condimentos",
        unidadprecio: "atado",
        precio: 1.51,
        moneda: "U$S",
    },
    {

        nombre: "laurel",
        unidad: "paq",
        familia: "condimentos",
        unidadprecio: "paq",
        precio: 1.51,
        moneda: "U$S",
    },
    {

        nombre: "manteca",
        unidad: "paq",
        familia: "lacteos",
        unidadprecio: "paq",
        precio: 1.76,
        moneda: "U$S",
    },
    {

        nombre: "huevos",
        unidad: "doc",
        familia: "comestibles",
        unidadprecio: "doc",
        precio: 6.0,
        moneda: "U$S",
    },
    {

        nombre: "yemas huevo",
        unidad: "doct",
        familia: "comestibles",
        unidadprecio: "doc",
        precio: 6.0,
        moneda: "U$S",
    },
    {

        nombre: "vainilla",
        unidad: "frasco",
        familia: "dulces y postres",
        unidadprecio: "frasco",
        precio: 2.95,
        moneda: "U$S",
    },
    {

        nombre: "limon",
        unidad: "kg",
        familia: "frutas y verduras",
        unidadprecio: "kg",
        precio: 1.0,
        moneda: "U$S",
    },
    {

        nombre: "polvo de hornear",
        unidad: "sobre",
        familia: "harinas y otros",
        unidadprecio: "sobre",
        precio: 1.54,
        moneda: "U$S",
    },
    {

        nombre: "dulce de membrillo",
        unidad: "paq",
        familia: "dulces y postres",
        unidadprecio: "paq",
        precio: 1.51,
        moneda: "U$S",
    },
];

const dbUnidades = [

    {
        id: "kg",
        nombre: "kilogramo",
    },
    {
        id: "g",
        nombre: "gramo",
    },
    {
        id: "ml",
        nombre: "mililitro",
    },
    {
        id: "uni",
        nombre: "unidad",
    },
    {
        id: "rama",
        nombre: "rama",
    },
    {
        id: "hoja",
        nombre: "hoja",
    },
    {
        id: "frasco",
        nombre: "frasco",
    },
    {
        id: "sobre",
        nombre: "sobre",
    },
    {
        id: "paq",
        nombre: "paquete",
    },
    {
        id: "lt",
        nombre: "litro",
    },
    {
        id: "atado",
        nombre: "atado",
    },
    {
        id: "docena",
        nombre: "docena",
    },
];


const dbUnidadesequiv = [

    {
        unidadA: "kg",
        unidadB: "g",
        ingrediente: "todos",
        conversion: 1000
    },
    {
        unidadA: "lt",
        unidadB: "ml",
        ingrediente: "todos",
        conversion: 1000
    },
    {
        unidadA: "doc",
        unidadB: "uni",
        ingrediente: "todos",
        conversion: 12
    },
    {
        unidadA: "kg",
        unidadB: "uni",
        ingrediente: "tomate",
        conversion: 8
    },
    {
        unidadA: "atado",
        unidadB: "g",
        ingrediente: "tomillo",
        conversion: 30
    },
    {
        unidadA: "paq",
        unidadB: "hoja",
        ingrediente: "laurel",
        conversion: 30
    },
    {
        unidadA: "paq",
        unidadB: "g",
        ingrediente: "manteca",
        conversion: 200
    },
    {
        unidadA: "frasco",
        unidadB: "ml",
        ingrediente: "vainilla",
        conversion: 100
    },
    {
        unidadA: "kg",
        unidadB: "uni",
        ingrediente: "limon",
        conversion: 10
    },
    {
        unidadA: "sobre",
        unidadB: "g",
        ingrediente: "polvo hornear",
        conversion: 100
    },
    {
        unidadA: "paq",
        unidadB: "g",
        ingrediente: "dulce de membrillo",
        conversion: 500
    },
    {
        unidadA: "sobre",
        unidadB: "g",
        ingrediente: "levadura",
        conversion: 10
    },
    {
        unidadA: "paq",
        unidadB: "g",
        ingrediente: "sal",
        conversion: 500
    },
];

const dbRecetas = [
    {

        nombre: "Pizza",
        porciones: 8,
        recetadesc: "Como se mezclan los ingredientes"
    },
    {

        nombre: "Pascualina",
        porciones: 8,
        recetadesc: "Como se mezclan los ingredientes"
    },
    {

        nombre: "Pastafrola",
        porciones: 8,
        recetadesc: "Como se mezclan los ingredientes"
    },
];

const dbIngRecetas = [
    {
        idreceta: "Pizza",
        iding: "harina",
        canting: 150,
        unidading: "g",

    },
    {
        idreceta: "Pizza",
        iding: "levadura",
        canting: 20,
        unidading: "g",

    },
    {
        idreceta: "Pizza",
        iding: "sal",
        canting: 15,
        unidading: "g",

    },
    {
        idreceta: "Pizza",
        iding: "azucar",
        canting: 5,
        unidading: "g",

    },
    {
        idreceta: "Pizza",
        iding: "agua",
        canting: 125,
        unidading: "ml",

    },
    {
        idreceta: "Pizza",
        iding: "leche",
        canting: 125,
        unidading: "ml",

    },
    {
        idreceta: "Pizza",
        iding: "aceite",
        canting: 80,
        unidading: "ml",

    },
    {
        idreceta: "Pizza",
        iding: "tomates",
        canting: 0.4,
        unidading: "kg",

    },
    {
        idreceta: "Pizza",
        iding: "tomillo",
        canting: 5,
        unidading: "g",

    },
    {
        idreceta: "Pizza",
        iding: "laurel",
        canting: 3,
        unidading: "hojas",

    },
];

let trueOrFalse = true;



function menu() {
    let opcion = (prompt("Elije una opción  \n \n Por consola \n 1. Ver ingredientes \n 2. Ver unidades \n 3. Ver equivalencias entre unidades \n 4. Ver ingredientes de una receta \n 5. Ver costo de una receta \n 10. Salir"));

    while (trueOrFalse) {

        switch (opcion) {
            case "1":
                lingredientes();
                break;
            case "2":
                lunidades();
                break;
            case "3":
                lunidadesrel();
                break;
            case "4":
                lingreceta();
                break;
            case "5":
                vcostoreceta();
                break;
            case "10":
                trueOrFalse = false;
                break;
            default:
                alert("No has elegido una opción válida");
                opcion = prompt(
                    "Elije una opción  \n \n Por consola \n 1. Ver ingredientes \n 2. Ver unidades \n 3. Ver equivalencias entre unidades \n 4. Ver ingredientes de una receta \n 5. Ver costo de una receta \n 10. Salir"
                );
                break;
        }
    }
}

function lingredientes() {
    let ingredientes = "";
    let cabezal = "Nombre  Unidad  Precio U$S"
    dbIngredientes.forEach((ing) => {
        ingredientes += ing.nombre + "    " + ing.unidad + "    " + ing.precio + "\n";
    });
    //alert(ingredientes);
    console.log(cabezal)
    console.log(ingredientes)
    menu();
}

function lunidades() {
    let unidades = "";
    let cabezal = "ID   Nombre"
    dbUnidades.forEach((uni) => {
        unidades += uni.id + "  " + uni.nombre + "\n";
    });

    console.log(cabezal)
    console.log(unidades)
    menu();
}

function lunidadesrel() {
    let unidadesrel = "";
    let cabezal = "UnidadA     UnidadB   Ingrediente  Factor AxFB"
    dbUnidadesequiv.forEach((uni) => {
        unidadesrel += uni.unidadA + "       " + uni.unidadB + "  " + uni.ingrediente + "  " + uni.conversion + "\n";
    });

    console.log(cabezal)
    console.log(unidadesrel)
    menu();
}

function lingreceta() {

    let unareceta = prompt("Ingrese el nombre de una receta");
    let recetaEncontrada = dbIngRecetas.filter(
        (elm) => elm.idreceta === unareceta
    );

    if (recetaEncontrada.length > 0) {
        recetaEncontrada.forEach((elm) => {
            console.log(elm.iding + "   " + elm.canting + "   " + elm.unidading);
        });
    } else {
        alert("La receta no existe");
    }
    menu();
}

function vcostoreceta() {

    let unareceta = prompt("Ingrese el nombre de una receta");
    let recetaEncontrada = dbIngRecetas.filter(
        (elm) => elm.idreceta === unareceta
    );

    if (recetaEncontrada.length > 0) {
        recetaEncontrada.forEach((elm) => {
            buscarprecio(elm.iding, elm.unidading);
        });
    } else {
        alert("La receta no existe");
    }
    menu();
}

function buscarprecio(pingrediente, punidad) {
    let ingredienteencontrado = dbIngredientes.filter(
        (elm) => elm.nombre === pingrediente
    );
    if (ingredienteencontrado.length === 1) {
        alert("pase por if 1");
        alert(punidad);
        let vunidadprecio = ingredienteencontrado.unidad
        alert(vunidadprecio)
        //alert(ingredienteencontrado.unidadprecio)
        
        if (ingredienteencontrado.unidadprecio === punidad) {
            alert("pase por if 2");
            alert('pingrediente + " " + punidad + " " + ingredienteencontrado.precio ');
            return ingredienteencontrado.precio;
        };
    } else {
        alert("Ingredientes repetidos en array ingredientes");
        return 0
    }

    //console.log(ingrediente + " " + unidad)
    return
}





menu();