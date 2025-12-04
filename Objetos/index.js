const pessoa1 = {
    nome: 'Jhean',
    sobrenome: 'Monteiro',
    idade: 25,

    fala() { // IMPORTANTE: 'fala' aqui seria um metodo dentro do objeto pessoa1  
        console.log(`${this.nome} ${this.sobrenome} diz 'OI'`);
    },

    incrementaIdade() {
        ++this.idade;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade(); // isso aqui atualiza a idade no objeto
pessoa1.incrementaIdade();
pessoa1.incrementaIdade();
pessoa1.incrementaIdade();
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
console.log(pessoa1);

const pessoa2 = {
    nome: 'Julian',
    sobrenome: 'Oliveira',
    idade: 9
};


// funçao que cria objetos
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa3 = criaPessoa('Luiz', 'Otavio', 30)
const pessoa4 = criaPessoa('Luiza', 'Otavia', 20)
const pessoa5 = criaPessoa('Pedro', 'Rezende', 10)
const pessoa6 = criaPessoa('Luan', 'Algusto', 30)
const pessoa7 = criaPessoa('Rodrigo', 'Castro', 50)
console.log(pessoa3)
console.log(pessoa4)
console.log(pessoa5)
console.log(pessoa6)
console.log(pessoa7)


