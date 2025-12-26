function aleatorio(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('BAD VALUE')

        setTimeout(() => {
            resolve(msg)
        }, tempo)

    })
}

esperaAi('frase1', aleatorio(1,3)).then(resposta => {
    console.log(resposta)
    return esperaAi('frase2', aleatorio(1, 3))
}).then(resposta => {
    console.log(resposta)
    return esperaAi(1111, aleatorio(1, 3))
}).then(resposta => {
    console.log(resposta)
}).then(() => {
    console.log('eu serei o ultimo a ser exibido')
}).catch(e => {
    console.log('ERRO', e)
})

console.log('isso aqui vai ser exibido antes de qualquer um promise')