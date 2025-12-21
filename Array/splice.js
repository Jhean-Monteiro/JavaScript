const nomes = ['joão', 'pedro', 'miguel', 'isabel', 'teresa', 'maria']


let removidos = nomes.splice(-3, 2) // a partir do indice -3, deleta dois elementos
console.log(nomes, removidos)

// simula o pop, que remove o ultimo elemento
let pop = nomes.splice(-1, 1)
console.log(nomes)

// simula o shift, que remove o primeiro elemento
let shift = nomes.splice(0, 1)
console.log(nomes)


// simula o push, que adiciona no final da lista
nomes.splice(nomes.length, 0, 'ana')
console.log(nomes)

// simula o unshift, que adiciona no inicio da lista
nomes.splice(0, 0, 'joaquim')
console.log(nomes)


const concatenação = nomes.concat(removidos) // junta as duas listas

console.log(concatenação)