// indices:   012345
const nome = 'Jhean ';
const nomeCompleto = ['Jhean', 'Monteiro', 'Da', 'Silva']

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}

for (let i in nome) {
    console.log(nome[i])
}

// usando for of (mais facil pra pegar o valor)
for (let valor of nome) {
    console.log(valor)
}


for (let valor of nomeCompleto) {
    console.log(valor)
}