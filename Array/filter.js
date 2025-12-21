// filter filtra o array

const numeros = [5, 4, 6, 9, 46, 32, 64, 9, 56, 92, 54]

let numerosFiltrados = numeros.filter((valor) => valor > 10)
console.log(numerosFiltrados)







const pessoas = [
    {nome: 'Jhean', idade: 21},
    {nome: 'Ana', idade: 10},
    {nome: 'William', idade: 40},
    {nome: 'Luiz', idade: 100},
    {nome: 'Sol', idade: 66},
    {nome: 'Saturno', idade: 400},
]
// retorne as pessoas que tem o nome com 5 letras ou mais
const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length >= 5)
console.log(pessoasComNomeGrande)

// retorne as pessoas com mais de 50 anos
const pessoasVelhas = pessoas.filter((obj) => obj.idade >= 50)
console.log(pessoasVelhas)

// retorne as pessoas cujo nome termina com a
const pessoasNomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(pessoasNomeTerminaComA)