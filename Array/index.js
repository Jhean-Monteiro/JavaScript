//               0        1        2       3        4      5
const alunos = ['Luiz', 'Maria', 'Joao', 'Jhean'];
console.log(alunos)

alunos[0] = 'William' // altera o primeiro indice da lista
console.log(alunos)

alunos[4] = 'Helena' // adiciona um novo indice
console.log(alunos)

console.log(alunos.length) // tamanho da lista

// adiciona mais um indice no final (ja que o tamanho da lista fica no exato numero a frente do indice final, visto que o primeiro indice é 0)
// alunos[alunos.length] = 'Jackson';
// alunos[alunos.length] = 'Mario';
// alunos[alunos.length] = 'Adamastor';

alunos.push('Alaster') // funçao que adiciona no final da lista
alunos.push('Jenyfer')
console.log(alunos)

alunos.unshift('Marte') // adiciona no indice 0
console.log(alunos)

alunos.pop() // remove o ultimo indice da lista
console.log(alunos)

alunos.shift() // remove o primeiro indice da lista
console.log(alunos)

delete alunos[1] // remove o elemento sem remover o indice (fica vazio)
console.log(alunos)

console.log(alunos.slice(0,4)) // fatia a lista do indice 0 ao 4 (para no 4, mas sem pegar esse indice)




/*
isso pode:
const array = [1, 2, 3, 4]
array.pop()
array[0] = 1024
saida: [ 1024, 2, 3, 4 ]
*/

/*
isso nao pode:
const array = [1, 2, 3, 4]
array = 'Legal' // Assigment to constant variable
*/