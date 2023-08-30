const dbIngredientes = [
    {
        id: 1,
        nombre: "harina",
        unidad: "kg",
        familia: "harinas y otros",
        unidadprecio: "kg",
        precio: 1.27,
        moneda: "U$S",
    },
    {
        id: 2,
        nombre: "levadura",
        unidad: "sobre",
        familia: "harinas y otros",
        unidadprecio: "sobre",
        precio: 0.8,
        moneda: "U$S",
    },
    {
        id: 3,
        nombre: "sal",
        unidad: "paq",
        familia: "harinas y otros",
        unidadprecio: "paq",
        precio: 1.43,
        moneda: "U$S",
    },
    {
        id: 4,
        nombre: "azucar",
        unidad: "kg",
        familia: "harinas y otros",
        unidadprecio: "kg",
        precio: 1.46,
        moneda: "U$S",
    },
]


let trueOrFalse = true;

function initProgram() {
    
        let opcion = parseInt(
            prompt(
                "Elije una opción  \n 1. Ver ingredientes \n 2. Ver unidades \n 3. Ver equivalencias entre unidades \n 10. Salir"
           )
        )
    
    while (trueOrFalse) {

       switch (opcion) {
            case 1:
               
                break;
            case 2:
                
                break;
           case 3:
               
                break;
            case 10:
                trueOrFalse = false;
                break;
        }
    }
}




