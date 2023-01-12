
//CHF: FRANCO SUIZO
//AUD: DOLAR AUSTRALIANO
//Declaramos arreglo de monedas
let currencies = ['MXN','USD','EUR','CAD']
console.log(currencies);

//Conocer el tamaño de un arreglo lenght
let size = currencies.length;

//si quiero acceder al ultima posicion del arreglo
let last = currencies[currencies.length - 1 ]
console.log(last)

//Agregar una moneda en la ultima posicion 
let new_lenght = currencies.push('JPY')
console.log({new_lenght, currencies})

//Agregar un nuevo valor al inicio del arreglo
new_lenght = currencies.unshift('GBP')
console.log({new_lenght, currencies})


//Borra de la ultima posicion
let delete_currency = currencies.pop();
console.log({delete_currency, currencies})


//Borrar elementos desde una posición
let pos = 1
console.log(currencies)
let delete_currencies =  currencies.splice(pos,2)
console.log({delete_currencies,currencies})


//Posicion indice de una moneda
let currency_pos = currencies.indexOf('EUR');
console.log({currency_pos,currencies})








