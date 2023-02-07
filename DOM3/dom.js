
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

function doLogin(){

    


    var user = document.getElementById("user").value;
    var pass = document.getElementById("password").value;

    if (user === pass){
        alert('Ingreso exitoso!')
        document.cookie = "login=true";
        location.reload();
    }else{
        document.cookie = "login=true";
        alert('Password Incorrecto')
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