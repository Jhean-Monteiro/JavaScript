class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // métodos de instancia
    aumentarVolume(valor) {
        this.volume += valor;
    }
    diminuirVolume(valor) {
        this.volume -= valor;
    }

    // método estático
    static trocaPilha() {
        console.log('vou trocar')
    }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume(50)
controle1.diminuirVolume(25)
console.log(controle1)

// assim que chama métodos estáticos
ControleRemoto.trocaPilha()