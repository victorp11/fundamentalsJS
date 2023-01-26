

//dentro de una pagina de internet podemos acceder a propiedades desde el objeto document
let elemento;
elemento = document;
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.forms;


/*
//Document desde objecto document
document.head
document.body
document.forms
document.forms[0].method
document.links[0].classList
document.images
document.scripts
*/

/*

// busca un elemento HTML con el id
//Retorna el primer valor del ID creado
let box = document.getElementById('miCaja')
//document.writeln(box)
box.innerHTML = 'ESTO ES UNA CAJA DESDE JS'
box.style.background = "red";
box.style.color = 'white'

//Podemos integara una funcion para que nos cambie el color 
function cambia_color( color){
    box.style.background = ""+color+"";
}
console.log('caja 1')
console.log(box)

let box2;
//Para buscar componenetes dentro de nuestra pagina por clase
box2 =  document.getElementsByClassName('miCaja2')[0]
box2.style.background = "blue";
console.warn(box2)
*/


/*
    --- QUERY SELECTOR MAS PARECIDO A JQUERY --
*/
/*
let box3;
//Para buscar componenetes dentro de nuestra pagina por id
box3 =  document.querySelector('#miCaja2')
console.log(box3)
//Para buscar componenetes dentro de nuestra pagina por clase
box3 =  document.querySelector('.miCaja2')
console.log(box3)

//Selecciona por estructura
box3 =  document.querySelector('.miCaja2 .midiv')
console.log(box3)
*/


/*

let box4;
//Retorna todos los componentes que se encuentran en la clase
box4 =  document.querySelectorAll('#miCaja2')
//Retorna una NodeList con los valores que encuentre con esa clase
console.log(box4)


//Todas los elementos p
let matches = document.querySelectorAll('p');
console.log( matches)
//Busqueda estructurada de elementos
let inner = document.querySelectorAll('.title .subtitle');
console.log( inner)


*/

// Modificando texto
const encabezado = document.querySelector('h1')
console.log(encabezado.innerText)
console.log(encabezado.innerHTML)

//Imprimir en pantalla en el DOM
const new_title = 'NUEVO TITULO'
encabezado.innerHTML = new_title


//Modificando imagenes
const img = document.querySelector('img')
console.log(img)
img.src = 'assets/imagenes/node.png'





