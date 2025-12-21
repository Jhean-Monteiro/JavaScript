// some todos os valores (reduce)
// retorne um array com os pares (filter)
// retorne um array com o dobro dos valores (map)

const numeros = [5, 4, 6, 9, 46, 32, 64, 9, 56, 92, 54]
const soma = numeros.reduce(function(acumulador,valor, indice, array){
    return acumulador +=valor
}, 0)
console.log(soma)

const pares = numeros.filter(function(valor){
    if (valor % 2 === 0) {
        return valor
    }
})
console.log(pares)




const pessoas = [
    {nome: 'Jhean', idade: 21},
    {nome: 'Ana', idade: 10},
    {nome: 'William', idade: 40},
    {nome: 'Luiz', idade: 100},
    {nome: 'Sol', idade: 66},
    {nome: 'Saturno', idade: 400},
]

// retorne a pessoas mais velha
const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor
})

console.log(maisVelha)