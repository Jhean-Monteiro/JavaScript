
// Function Declaration (Declaração de função)

function oi(nome){
    let teste = `Oi ${nome}`
    return teste
}

const variavel = oi('Luiz')
console.log(variavel)


console.log(oi('Luiza'))


function soma(x, y) {
    z = (x+y)
    return z
}
valor1 = 4
valor2 = 8
resultado = soma(valor1, valor2)
console.log(resultado)



function subtracao(x, y) {
    z = (x-y)
    return z
}

resultado = subtracao(5, 10)
console.log(resultado)


function multiplicacao(x, y) {
    z = (x*y)
    return z
}

resultado = multiplicacao(20, 14)
console.log(resultado)


function divisao(x, y) {
    z = (x/y)
    return z
}

resultado = divisao(10, 5)
console.log(resultado)


function potenciacao(x, y) {
    z = (x**y)
    return z
}

resultado = potenciacao(2, 6)
console.log(resultado)



// Function Expression (Expressão de função) Pode ser nomeada ou anônima.
const raiz = function(n) {
    return n ** 0.5
}

// Arrow Function (Função seta) Introduzida no ES6 (2015), sintaxe mais curta e com comportamento diferente no this.
const raizz = (n) => {
    return n ** 0.5
}


resultado = raiz(4)
console.log(resultado)
resultado = raizz(9)
console.log(resultado)
resultado = raiz(16)
console.log(resultado)
resultado = raizz(25)
console.log(resultado)


