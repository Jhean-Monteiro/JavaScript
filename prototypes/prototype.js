// cadeia: 
// new object --> Object.prototype -->
const objA = {
    chaveA: 'A'
    // __proto__
}

const objB = {
    chaveB: 'B'
    // objA
        // __proto__
}

const objC = new Object()
objC.chaveC = 'C' 

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objC.chaveA)


function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('camiseta', 100)
p1.desconto(50)
p1.aumento(200)
console.log(p1)

const p2 = {
    nome: 'caneca',
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype);
p2.desconto(50)
p2.aumento(200)
console.log(p2)


const p3 = Object.create(Produto.prototype)
p3.preco = 150
p3.aumento(33.3333333333333333333)
console.log(p3)