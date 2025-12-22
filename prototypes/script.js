// construtora -> molde (classe)

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome
//    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome
}


// atribuir uma função ao prototype (ao inves de deixar no método) melhora muito a performance do programa
pessoa1.prototype.nomeCompleto = function() {
    return this.nomeCompleto = () => this.nome + ' ' + this.sobrenome

}

const pessoa1 = new Pessoa('Jhean', 'Monteiro')
const pessoa2 = new Pessoa('Luiz', 'Miranda')
console.dir(pessoa1)