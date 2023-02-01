// busca un elemento HTML por el ID
let box = document.getElementById('card1')
//document.writeln(box)
//box.innerHTML = 'ESTO ES UNA CAJA DESDE JS'
box.style.background = "red";
box.style.color = 'white'

//Busca por el ID del texto para cambiar el texto
let cardTitle = document.getElementById('cardTitle')
cardTitle.innerHTML = 'TITULO DE LA PRIMER TARJETA'




//Para buscar componente por clase, regresa un arreglo de valores
let card2 = document.getElementsByClassName('card')
console.log(card2)

//Podemos incluir un iterador para modificar valores
for(let i = 0;  i < card2.length;i++){
    card2[i].style.background = "blue";
    card2[i].style.color = "white";
}

let numTareas = document.getElementById('numTareas')
numTareas.innerHTML = card2.length


let box3;
//Para buscar componenetes por id
box3 = document.querySelector('#card2')
console.log(box3)
//Para buscar componenetes por clase
box3 = document.querySelector('.card')
console.log(box3)
//Selecciona por estructura
box3 = document.querySelector('.card .card-body .card-title')
box3.innerHTML = 'Nueva tarea'
console.log(box3)

let box4;
//Retorna todos los componentes que se encuentran de la clase
box4 = document.querySelectorAll('.card')
//Retorna una NodeList con los valores que encuentre con esa clase
console.log(box4)


function enviarSaludo(){
    let name = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;

    let enviar = 'Se envio mensaje a: '+ name +', con el email:'+email;

    alert(enviar);
}


function agrega_tarea() {
    var elemento = document.createElement("li");
    var texto = document.createTextNode("Elemento de prueba");
    elemento.classList.add('list-group-item')
    //elemento.classList.add("onclick='javascript:alert('event has been triggered');")
    elemento.appendChild(texto);
    //elemento.onclick = changeTaskState();
    elemento.onclick = function() { console.log('123123') };
  

    //agregar un evento dinamico
    //elemento.addEventListener('click', changeTaskState)

   

    var lista = document.getElementById("lista");
    lista.appendChild(elemento);
   
    var nuevoElemento = "<li class='list-group-item'>REGISTRO</li>";
    lista.innerHTML = lista.innerHTML + nuevoElemento;
  }


  function itemDone() {
    var listItems = document.querySelectorAll("li");
    var i;
    for (i = 0; i < listItems.length; i++) {
        listItem[i].className = "itemDone";
    }
};




box3 = document.querySelector('#lista .list-group-item')
box3.click(function() {
    var textLoaded = 'Loading element with id='
           + $(this).data('id');
     $('#loading-content').text(textLoaded);
  });



  const addNewTask = event => {
    event.preventDefault();
    //const { value } = event.target.taskText;
    //if(!value) return;
    const task = document.createElement('div');
    task.classList.add('alert', 'alert-primary');
    task.addEventListener('click', changeTaskState)
    task.textContent = 'Nueva Tarea';
    tasksContainer.prepend(task);
    //event.target.reset();
};


const changeTaskState = event => {
    console.log(event.target.classList)
    event.target.classList.add('alert', 'alert-danger');
    event.target.innerHTML = 'terminado'
}


//Consumir recursos dinamicos de imagenes
let img = document.createElement("img");
img.src = "https://picsum.photos/seed/picsum/200/300";

img.style.border = "10px solid orange";
img.style.borderRadius = "10px";

document.body.appendChild(img);


//adecuarlo al estilo de nuesta pagina
document.querySelectorAll('div')[0].appendChild(img);


for(let i = 0; i < 10; i++) {
	const img = document.createElement("img");
	img.src = "https://picsum.photos/200/301?id=" + i;
	img.addEventListener("click", function() {
		console.log(i); // selected index number
		img.style.border = "10px solid orange";

	})
	document.body.appendChild(img);
    //document.querySelectorAll('div')[0].appendChild(img);
}



for(let i = 0; i < 10; i++) {
    const img = document.createElement("img");
    img.src = "https://picsum.photos/200/301?id=" + i;
    img.classList.add("img-margin");
    document.querySelectorAll('div')[0].appendChild(img);
}


for(let i = 0; i < 10; i++) {
    const img = document.createElement("img");
    img.src = "https://picsum.photos/200/301?id=" + i;
  
    img.setAttribute("class", "img-margin");
  
    img.addEventListener("click", function() {
  
      images =  document.querySelectorAll('img')  
      for (var i = 0; i < images.length; i++) {
        console.log(images[i])
        images[i].style.border = "";
        //images[i].classList.remove('img-rounded-border');
      }
      img.style.border = "10px solid orange";
      //img.classList.add("img-rounded-border");
    })
    document.querySelectorAll('div')[0].appendChild(img);
  }
