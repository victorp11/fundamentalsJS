


let invoice = {
    number: 1,
    client: 'LIVINGLAB',
    currency: 'USD',
    coords: {
        lat: 42.0,
        long: -108.61
    },
    services: ['LAPTOPS','COFFE','GAS','INTERNET'],
    location: {cp: 31100, address:'Av. Americas'},
    subtotal: 500,
    IVA: 80
}

document.writeln(invoice.client)
document.writeln('<br>')
document.writeln(invoice['client'])
document.writeln('<br>')
document.writeln(invoice.coords.lat)
document.writeln('<br>')
document.writeln(invoice.services[1])
document.writeln('<br>')
document.writeln('<hr>')
document.writeln(invoice.services[invoice.services.length -1])

//
delete invoice.IVA






/*












let invoice = { number: '1', 
                client: 'lIVINGLAB', 
                currency: 'USD',
                coords: {
                    lat: 42.0,
                    lon: -108.1
                },
                services: ['LAPTOPS','COFFE','GAS','INTERNET'],
                location: { cp: '31100', address: 'AV AMERICAS'},
                subtotal: 500,
                IVA: 80
                }

console.log(invoice)
//Podemos acceder a metodos de diferentes maneras
console.log('Cliente:', invoice.client );
console.log('Cliente:', invoice['client'] );
console.log('Latitud:', invoice.coords.lat );

//Calcula el ultimo servicio que le ofrecemos a la empresa
console.log('Ultimo Servicio:', invoice.services[invoice.services.length -1 ] );


//borrar una propiedad
delete invoice.IVA;
console.log(invoice)

//agregar una propiedad
invoice.info = 'GASTOS EN GENERAL'


*/