


document.addEventListener('keydown', callBack);
function callBack(evt) {
    if (evt.keyCode === 65) {
        alert("You pressed this key: 'a'");
        return;
    } else {
        console.log(evt.keyCode)
        console.log(String.fromCharCode(evt.which))
    }
}


document.addEventListener('keydown', listaEventos);

function listaEventos(evt) {
    document.getElementById('eventKey').innerHTML = e.key;
    document.getElementById('eventCode').innerHTML = e.code;
    document.getElementById('eventKeycode').innerHTML = e.keyCode;
    document.getElementById('eventWhich').innerHTML = e.which; //keyCode
    document.getElementById('fromCharCode').innerHTML = String.fromCharCode(e.keyCode || e.which);
}

//https://css-tricks.com/snippets/javascript/javascript-keycodes/
class Kpress{
    constructor(){
        window.addEventListener('keydown',this.press.bind(null,event,this),false);
    }
    press(e,ths){
        e = window.event? event : e;
e.preventDefault();
document.getElementById('eventKey').innerHTML = e.key;
document.getElementById('eventCode').innerHTML = e.code;
document.getElementById('eventKeycode').innerHTML = e.keyCode;
document.getElementById('eventWhich').innerHTML = e.which; //keyCode
document.getElementById('fromCharCode').innerHTML = String.fromCharCode(e.keyCode || e.which);
    }
}
window.addEventListener('load',function(){
    var kpress = new Kpress();
});