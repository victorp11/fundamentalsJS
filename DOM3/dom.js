
/*
let serie_1 = document.getElementById('serie_1')

serie_1.innerHTML = 'ESTO ES UNA CAJA SERIE DESDE JS'
serie_1.style.background = 'red'
serie_1.style.color = 'white'


console.log(serie_1)

let serie_2;
serie_2 = document.getElementsByClassName('card')


let color = ['red','blue','white','orange']
for(let i=0; i < serie_2.length;i++){
    console.log(serie_2[i])
    serie_2[i].style.background = color[i];
	serie_2[i].style.color = "white";
    
}*/


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
    


let series = {
                serie_0: {name: 'nombre', descripcion: 'Desc'},
                serie_1: {name: 'nombre_2', descripcion: 'Desc 2'},
}


document.querySelectorAll('.card')

for(i=0; i< document.querySelectorAll('.card').length;i++){
    let card_info = document.querySelectorAll('.card')[i]
    card_title= card_info.querySelector('.card .card-title')
    card_text= card_info.querySelector('.card .card-text')

    console.log(card_info)
    if (series['serie_'+i] !== undefined){
        card_title.innerHTML = series['serie_'+i].name
        card_text.innerHTML =  series['serie_'+i].descripcion
    }
   

}



let img = document.createElement("img");
img.src = "fondo_netflix.jpeg";
img.style.border = "10px solid orange";
img.style.borderRadius = "10px";
//document.body.appendChild(img);

console.log(img.src);

var src = document.getElementById("myImg");
src.appendChild(img);



var login = document.getElementById("btn_login");

var modal = document.getElementById("exampleModal");







function doLogin(){

    
    var user = document.getElementById("user").value;
    var pass = document.getElementById("password").value;

    if (user === pass){
        alert('Ingreso exitoso!')
        let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('exampleModal')) // Returns a Bootstrap modal instance
        // Show or hide:
        //modal.show();
        modal.hide();
        let btn_login =document.getElementById('btn_login')
        btn_login.className = "btn btn-success";
        btn_login.innerHTML = 'Cerrar sesión'
        //document.cookie = "login=true";
        //location.reload();
    }else{
        document.cookie = "login=true";
        alert('Usuario/Password Incorrecto')
    }

}





var modal = new bootstrap.Modal(document.getElementById('exampleModal'));

function closeDialog() {
    let d = document.getElementById('exampleModal')
    d.style.display = "none"
    d.close()
}




function crearSerie(){
    var user = document.getElementById("nombreSerie").value;
    var pass = document.getElementById("password").value;
}



function editarSerie(){
    let nombre = document.getElementById("nombreSerie").value;
    let descripcion = document.getElementById("descripcionSerie").value;
    let imagen = document.getElementById("imagenSerie").value;


    document.getElementById("imagen_serie_1").src = imagen;
    document.getElementById("titulo_serie_1").innerHTML = nombre;
    document.getElementById("descripcion_serie_1").innerHTML = descripcion;
}



//Iteramos todas las imagenes y le asigno un listener
for(i=0; i< document.querySelectorAll('.card').length;i++){
    //Tomamos cada una de las tarjetas
    let card_info = document.querySelectorAll('.card .card-img-top')[i]
    //asigno listener dinamico
    card_info.addEventListener("click", function() {
        
        for (let i = 0; i < document.querySelectorAll('.card').length; i++) {
                document.querySelectorAll('.card .card-img-top')[i].style.border = ""
            } 
    
        console.log(i); // selected index number
        card_info.style.border = "10px solid orange";
        })
}




function visitarNetflix(event) {
console.log(event)
    event.preventDefault();
    alert("Se ah dado clic al enlace pero el sitio no ah sido abierto");
  }
