class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já ligado`)
            return;
        }

        this.ligado = true
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já desligado`)
            return;
        }

        this.ligado = false
    }
} 

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo
    }
}

const d1 = new Smartphone('Iphone', 'Vermelho', 'MAX')
console.log(d1)

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }
    ligar() {
        console.log('olha, você alterou o metodo ligar...')
    }
}

const tablet = new Tablet('xiaomi', true)
tablet.ligar()
console.log(tablet)