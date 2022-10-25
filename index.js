//==================================================================================
//arrays y objetos
let imprimirPrimerElementoArray = (arr) =>  {
    console.log(`El tamanio de array es de: ${arr.length}`);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);   
    }
}

let nuevoArray = ["Hola", "mundo", "mi", "nombre", "es", "tohui"];
let objeto1 ={
    nombre: "fulanito",
    edad: 3,
    comidasFavoritas: ["pollo frito", "vegetales",'pizza']
}

let objeto2 ={
    nombre: "tohui",
    edad: 23,
    comidasFavoritas: ["pollo frito", "vegetales",'pizza']
}

let objeto3 ={
    nombre: "fernando",
    edad: 22,
    comidasFavoritas: ["pollo frito", "vegetales",'pizza']
}

let arrayObjeto1 =Object.entries(objeto1);
let arrayObjeto2 =Object.keys(objeto2);
let arrayObjeto3 =Object.values(objeto3);
/*
imprimirPrimerElementoArray(nuevoArray);
console.log("-----------------------------")
imprimirPrimerElementoArray(arrayObjeto1);
imprimirPrimerElementoArray(arrayObjeto2);
imprimirPrimerElementoArray(arrayObjeto3);
*/

//===============================================================================
//reduccion de condicionales

const tiposSubscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic:'Puedes tomar casi todos los cursos de platzi',
    expert:'Tu y alguien mas pueden tomar todos los cursos de platzi',
    expertduo:'Tu y alguien mas pueden tomar todos los cursos de platzi'
}

const conseguirTipoSuscripcion = (suscripcion) => {
    if(tiposSubscripciones[suscripcion]){
       console.log(tiposSubscripciones[suscripcion]);
       return;
    }
    console.warn('ese tipo de subscripcion no existe')
}

conseguirTipoSuscripcion("free");

