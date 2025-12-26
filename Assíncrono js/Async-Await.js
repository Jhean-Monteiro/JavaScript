function aleatorio(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('cai no erro')
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise')
            return;
        }, tempo)

    })
}

async function executa() {
    try {
        const fase1 = await esperaAi('fase1', aleatorio(1,3))
        console.log(fase1)
        const fase2 = await esperaAi('fase2', aleatorio(1,3))
        console.log(fase2)
        const fase3 = await esperaAi('fase3', aleatorio(1,3))
        console.log(fase3)
        console.log('terminamos na fase', fase3)
    } catch(e) {
        console.log(e)
    }
}

executa()


/*
esperaAi('fase1', aleatorio(0,3))
    .then(valor => {
        console.log(valor)
    })
*/