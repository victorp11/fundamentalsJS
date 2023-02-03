

/*
const payment_method = 'cas3h'

switch (payment_method) {
    case 'cash':
        console.log('pago con efectivo');
        break;
    default:
        console.log('Sin pago');
        break;
}
*/

/*
const calificacion = 9

switch (calificacion) {
    case 10 :
        console.log('Reprobado');
        break;
    case 9 :
        console.log('323');
    case 8 :
        
    default:
        console.log(calificacion);
        break;
}*/

/*
let num_random = Math.floor(Math.random()*10)
console.log(num_random);

switch (num_random) {
    case 1:
        console.log('Es numero 1')
        break;
    case 2:
        console.log('Es numero 2')
        break;
    case 3:
        console.log('Es numero 2')
        break;
    case 4:
        console.log('Es numero 2')
        break;
    default:
        console.log('No atinaste')
        break;
}*/


/*
var fecha = new Date();
var dia = fecha.getDay();
var traduccion = "";

switch(dia){
	case 0:
		traduccion = "domingo";
		break;
	case 1:
		traduccion = "lunes";
		break;			
	case 2:
		traduccion = "martes";
		break;			
	case 3:
		traduccion = "miércoles";
		break;			
	case 4:
		traduccion = "jueves";
		break;			
	case 5:
		traduccion = "viernes";
		break;			
	case 6:	
		traduccion = "sábado";
		break;	
	default:
		traduccion = "error";					
}
document.write("<p>hoy es " + traduccion +"</p>");
*/


/*
let edad;
edad = prompt ('Por favor introduce edad:');
if (edad =="") { alert ('No has introducido edad'); }
edad = Number(edad);
switch (edad) {
    case 0: alert ("Acaba de nacer hace poco"); break;
    case 18: alert ("Está justo en la mayoría de edad"); break;
    case 65: alert ("Está en la edad de jubilación"); break;
    default: alert ("La edad no es valida"); break;
}
*/



i = 0; // Inicialización de la variable contador

// Condición: Mientras la variable contador sea menor de 5
while (i < 5) {
  console.log("Valor de i:", i);

  i = i + 1; // Incrementamos el valor de i
}
