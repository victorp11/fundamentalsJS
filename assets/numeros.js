
/*
//Manejo de numeros
// en JS todos los numeros se crean igual
let number_1 = 20
let number_2 = 30.5
let number_3 = 0.45
let number_4 = -30

//Operacion basica
let resultado ;
//suma
resultado = number_1 + number_2
//resta
resultado = number_1 - number_2
//multiplicacion
resultado = number_1 * number_2
//Operados MATH
let pi = Math.PI;
pi = Math.round(pi)
console.log(pi)
//Raiz cuadrada
let raiz = Math.sqrt(144)
console.log(raiz)
//Valor absoluto
resultado = Math.abs(-500)
console.log(resultado)
//Numero elevando a una potencia
resultado = Math.pow(3,3)
console.log(resultado)
//Maximo y minimo
resultado = Math.min(-87,-1,2,4,5,7)
console.log(resultado)

*/

let prenda_1 = prompt('Valor de la prenda 1');
let prenda_2 = prompt('Valor de la prenda 2');
let prenda_3 = prompt('Valor de la prenda 3');

let subtotal = Number(prenda_1) + Number(prenda_2) + Number(prenda_3)
document.write('El Subtotal de las prenda es:'+ subtotal)
document.write('</br>')

let descuento = subtotal * .30
document.write('El descuento de las prendas es :'+ Math.round(descuento))
document.write('</br>')
let iva = (subtotal - descuento) * .16
document.write('IVA :'+ iva)
document.write('</br>')

let total = subtotal - descuento + iva
document.write('TOTAL :'+ Math.ceil(total))




