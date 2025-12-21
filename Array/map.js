// 'map' modifica o array


const numeros = [5, 6, 9, 46, 32, 56]

// dobre os numeros
const numerosDodrados = numeros.map((valor) => valor * 2)
console.log(numerosDodrados)





const pessoas = [
    {nome: 'Jhean', idade: 21},
    {nome: 'Ana', idade: 10},
    {nome: 'William', idade: 40},
    {nome: 'Luiz', idade: 100},
    {nome: 'Sol', idade: 66},
    {nome: 'Saturno', idade: 400},
]

// retorne apenas uma string com o nome da pessoa
const string = pessoas.map(obj => obj.nome.toString())
console.log(string)

// remova apenas a chave 'nome' do objeto
const idades = pessoas.map(obj => ({ idade: obj.idade}))
    
console.log(idades)

// adicione uma chave de ID em cada objeto

const comID = pessoas.map(function(obj, indice) {
    obj.id = (indice + 1) * 100
    return obj
})
console.log(comID)