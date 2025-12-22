// produto -> aumento, desconto
// camiseta = cor, caneca = material
function Produto(nome,preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}
Produto.prototype.desconto = (quantia) => {
    this.preco -= quantia;
}

function Camiseta(nome,preco,cor) {
    Produto.call(this, nome, preco) // pega tudo da 'classe mãe': Produto
    this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta
const camiseta = new Camiseta('regata', 7.5, 'preta')
camiseta.aumento(10)
console.log(camiseta)

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material
    this.estoque = estoque

}

const caneca = new Caneca('bonita', 20, 'porcelana', 4)
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca
console.log(caneca)