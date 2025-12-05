/*
&& -> AND -> E (todas as expressoes precisam ser verdadeiras para retornar true)
|| -> OR -> OU
! -> NOT -> NAO
*/

// AND se uma (ou mais) for falsa, retorna false
console.log(true && true)
console.log(true && false)
console.log(false && false)
console.log(10 < 20 && 20 > 10 && 50 === 50 && 50 <= 100)
console.log(10 < 20 && 20 > 10 && 50 === 50 && 50 === 100) // uma unica expressao falsa retornou false
console.log(' ')


// OR basta uma ser verdadeira, e retorna true
console.log(true || true)
console.log(true || false)
console.log(false || false)
console.log(10 > 20 || 20 < 10 || 50 !== 50 || 50 < 100) // basta uma ser verdadeira, e retorna true
console.log(10 > 20 || 20 < 10 || 50 !== 50 || 50 > 100) // retorna false, pois todas as exxpressoes sao falsas
console.log(' ')

console.log(true != true)
console.log(true != false)
console.log(false != false)
console.log(`true negado = ${!true}`)
console.log(`false negado = ${!false}`)
console.log(' ')


const usuario = 'Luiz';
const senha = '123456'

const vaiLogar = usuario === 'Jhean' && senha === '123456'
console.log(vaiLogar)


// curto circuito
console.log('Luiz Otavio' && NaN && 'Maria') // para no false (NaN)
