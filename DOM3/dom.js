
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
    
}