const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafito')
const pid = document.querySelector('#pid')
const perfilID = document.getElementById('perfilID')
const input = document.querySelector('input')

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})

//=============================================================
// Escribiendo HTML desde Jvascript

h1.innerHTML = 'Lorem Ipsum';
h2.innerText = 'Texto seguro';

console.log(h1.getAttribute('class'));

h1.setAttribute('class','rojo')
h1.classList.add('azul');
h1.classList.add('morado');
h1.classList.replace('morado','cyan')
h1.classList.add('cafe');
h2.classList.remove('cafe');
console.log("Hey: "+h1.classList.contains('cafee'));

input.value = '1234 -->';
document.createElement('h1')
console.log("Etiqueta creada: ",document.createElement('h2'),document.createElement('h3'))

const img  = document.createElement('img');
img.setAttribute('src', 'https://picsum.photos/200/200');

//pid.append(img)

//==============================================================
//Eventos en JavaScript: interactuando con usuarios

const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector('#result')

let btnOnClick = () => {
  console.log(input1.value + +input2.value);
  pResult.innerText()
}