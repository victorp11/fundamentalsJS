
//Imaginemos que queremos imprimir cierta cantidad de numeros
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)


/*l
//Podemos utilizar ciclos para crearlos

let redes_sociales = ['Facebook','Instagram','tiktok','twitter']

//imprimir nombres con el ciclo
//Se ejecuta cuando la condicional es verdadera
let i = 0
while(i < redes_sociales.length){
    console.log(redes_sociales[i]);
    i= i+1;
    //i++;
}

//break dentro del while

//continue


// Impresion de numero creciente - decreciente
let numero = 1;
while( numero < 11 ) {
  console.log( numero + " - " + (11-numero) );
  numero++;
}
*/

let i = 0
do
{
    i++;
    document.writeln(i);
} while ( i < 10);



// Pedira un numero y sumara los valores desde 1 a ese valor dado.
let sum = 0
let num_1 = 10
do{
    document.writeln(num_1)
    sum += num_1
    num_1 = num_1 - 1
}while( num_1 > 0)
document.writeln('LA SUMA ES: '+ sum)


for (inicialización; condición; actualización) { 
    //sentencias a ejecutar en cada iteración 
}