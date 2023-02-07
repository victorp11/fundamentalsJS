
//Dentro de los objetos literales, podemos incluir funciones

let Auto = {
    marca: "FORD",
    modelo: "F-150",
    anio: 2023,
    encender: function() {
        console.log("El auto está encendiendo");
        },
    apagar: function() {
        console.log("El auto está apagando");
        }
    };


    console.log(Auto.modelo); // "F-150"
    Auto.apagar(); // "El auto está apagandov