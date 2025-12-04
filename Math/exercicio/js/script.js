const numero = Number(prompt('Digite um Numero'));
const numeroTitulo = document.getElementById('numero-titulo');
const titulo = document.getElementById('texto');
const titulo2 = document.getElementById('texto2');
const titulo3 = document.getElementById('texto3');
const titulo4 = document.getElementById('texto4');
const titulo5 = document.getElementById('texto5');
const titulo6 = document.getElementById('texto6');

numeroTitulo.innerHTML = numero;
titulo.innerHTML = `<p>Raiz Quadrada: ${numero ** 0.5}</p>`;

titulo2.innerHTML = `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;

titulo3.innerHTML = `<p>é NaN: ${Number.isNaN(numero)}</p>`;

titulo4.innerHTML = `<p>arredondado para baixo: ${Math.floor(numero)}</p>`;

titulo5.innerHTML = `<p>arredondado para cima: ${Math.ceil(numero)}</p>`;

titulo6.innerHTML = `<p>com duas casas decimais: ${numero.toFixed(2)}</p>`;