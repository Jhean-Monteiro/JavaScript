// superclass (classe mãe)
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if (valor > this.saldo) {
        console.log(`Saldo Insuficiente: ${this.saldo}`)
        return;
    } 

    this.saldo -= valor
    this.verSaldo()
}
Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this.verSaldo()
}
Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`)
}



function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo Insuficiente: ${this.saldo}`)
        this.verSaldo();
        return;
    } 

    this.saldo -= valor
    this.verSaldo()
}

function ContaPopanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}

ContaPopanca.prototype = Object.create(Conta.prototype)
ContaPopanca.prototype.constructor = ContaPopanca

const cc = new ContaCorrente(11, 22, 0, 100)
cc.sacar(50)
cc.sacar(51)

console.log()

const cp = new ContaPopanca(12, 33, 0)
cp.depositar(90)
cp.sacar(50)
cp.sacar(51)