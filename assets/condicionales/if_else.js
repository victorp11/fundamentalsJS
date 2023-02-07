
let score = 7
if (score >= 8){
    document.writeln('Alumno aprobado con: '+ score)
} else {
    document.writeln('Alumno reprobado con: '+ score)
}

document.write('<br>')
let num = 100
if (num ==='100'){
    document.writeln('SON IGUALES')
}else{
    document.writeln('NO SON IGUALES')

}




/*
let num1 = '100'
let num2 = 100


//== Revisa por el valor
//=== Valor estricto revisa por el tipo de dato y el valor..
if (num1 === num2){
    console.log('igual')
}else{
    console.log('diferente')
}


const dinero = 1000

let retirar = prompt('Cuanto deseas retirar?',0);

if (dinero > retirar){
    
}else

*/


const dinero = 1000

let retirar = prompt('Cuanto deseas retirar?',0);


if(retirar <= dinero){    
    document.writeln('No cuentas con dinero suficiente para retirar')
}else if (retirar > 2000 && retirar <= 5000 ){
    document.writeln('Se puede realizar el retiro ')
}else if (retirar >=  5000){
    document.writeln('No se permite retirar mas de 5k diarios')
}else{
    document
}


