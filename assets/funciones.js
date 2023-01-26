

document.write('hola desde js');

function saludar() {
    console.log('Hola Mundo');
}

function saludar2() {
    console.log('Hola Mundo');
}

//No es posible 
//let saludar = 'hola';

saludar();
saludar2();


//Funciones con saludar
function saludar_nombre(nombre){
    console.log('hola: '+nombre);
}

//
saludar_nombre('Victor Ponce')


//Funciones con saludar
function funcion_parametros(num1,num2){
    console.log('---')
    console.log(arguments);
    //console.log('hola: '+ nombre);
}

//
funcion_parametros('123','123123',true);


let saludar_flecha = () => {
    console.log('saludar flecha')
}


//Antes
var fecha = new Date(),
hora = fecha.getHours();

var saludo = function (hr) {
  if (hr <= 5) {
    return 'Es muy temprano!!';
  } else if(hr >= 6 && hr <= 11) {
    return 'Buenos días!!!';
  } else if(hr >= 12 && hr <= 18) {
    return 'Buenas tardes!!!';
  } else {
    return 'Buenas noches!!!';
  }
};

console.log( saludo(hora) ); //Imprime el saludo dependiendo la hora del día




