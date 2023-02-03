

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




