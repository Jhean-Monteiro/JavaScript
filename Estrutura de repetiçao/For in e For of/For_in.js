// com arrays

//   indices:       0          1        2        3       4
const frutas = ['acerola', 'tomate', 'amora', 'jaca', 'manga']

for (let i in frutas) {
    console.log(`a fruta -${frutas[i]}- esta no indice -${i}-`)
}


// com objetos:
const pessoa = {
    nome: 'Jhean',
    sobrenome: 'Monteiro',
    idade:20
}

for (let chave in pessoa) {
    console.log(chave,':', pessoa[chave])
}