


let i 
for (i=0;i<=10;i++) { 
   	document.write(i)
   	document.write("<br>") 
}


const enterprises =['TESLA','AMAZON','MICROSOFT','META']
console.warn('FOR TRADICIONAL')
for (let i = 0; i < enterprises.length; i++){
    console.log(enterprises[i])
}

console.warn('FOR IN')
for(let i in enterprises){
    console.log(enterprises[i])
}

console.warn('FOR OF')
for(let enterprise of enterprises){
    console.log(enterprise)
}




//Escribir los numeros del 1 al 2000 de 50 en 50 
for (i=0;i<=1000;i+=50) 
   	document.write(i)


    let arr =['Nivel 1', 'Nivel 2'] 


    for (i=1;i<=6;i++) { 
        document.write("<h" + i + "> Encabezado de nivel " + i + "</h" + i + ">") 
    }