class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`)
    }
    comer() {
        console.log(`${this.nome} está comendo`)
    }
    beber() {
        console.log(`${this.nome} está bebendo`)
    }
}

const p1 = new Pessoa('Jhean', 'Monteiro')
const p2 = new Pessoa('Julian', 'Oliveira')
const p3 = new Pessoa('Jackson', 'Silva')
const p4 = new Pessoa('Luiz', 'Miranda')
console.log(p2)
p2.beber()