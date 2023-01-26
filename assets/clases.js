


class Perro {
    constructor(nombre) {
        this.nombre = nombre;
    }
    // Método
    hablar() {
        document.writeln(this.nombre + ' ladra.');
    }
    comer(){
        document.writeln('Hola soy '+this.nombre +', Gracias por alimentarme!!.');
    }
}

var mascota_1 = new Perro('Pancho');
mascota_1.hablar(); // Pancho ladra.
document.writeln('</br>');
mascota_1.comer()
document.writeln('</br>');
var mascota_2 = new Perro('Kika');
mascota_2.hablar(); // Kika ladra.






/*
class Rectangulo {
    constructor (alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
    // Getter
    get area() {
       return this.calcArea();
     }
    // Método
    calcArea () {
      return this.alto * this.ancho;
    }
  }
  
  const cuadrado = new Rectangulo(10, 10);
  
  document.write(cuadrado.area); // 10
  */