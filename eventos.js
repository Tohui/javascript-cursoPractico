const h1 = document.querySelector('h1');
const form = document.getElementById('form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//=======================================================

let btnOnClick = (event) => {
    
    valor1 = parseInt(input1.value);
    valor2 = parseInt(input2.value)
  const sumaInputs = valor1 +  valor2;
  pResult.innerText = "Resultado: " + sumaInputs;
}

//==========================================================

btn.addEventListener('submit',btnOnClick);