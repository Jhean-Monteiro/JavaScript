/*
entre 0 - 11 = bom dia
entre 12 - 17 = boa tarde
entre 18 - 23 = boa noite
*/

// if pode ser usado sozinho
// sempre que utilizo a palavra else, tem que haver um if antes
// pode ter varios else ifs na checagem
// so pote ter um else, e ele vem por ultimo

const hora = 18;

if (hora >= 0 && hora <= 11) {
    console.log('bom dia')
} else if (hora >= 12 && hora <= 17) {
    console.log('boa tarde')
} else if (hora >= 18 && hora <= 23) {
    console.log('boa noite')
} else {
    console.log('fora do range')
}

const tenhoGrana = false
if (tenhoGrana) {
    console.log('vou sair de casa')
} else {
    console.log('nao vou sair de casa')
}





const numero = 10

if (1 === 1) {
    console.log('literal')
}

if (numero >= 0 && numero <= 5) {
    console.log('o numero esta entre 0 e 5');
} else if (numero >= 5 && numero <= 8) {
    console.log('o numero esta entre - 6 e 8')
} else if (numero >= 9 && numero <= 11) {
    console.log('o numero esta entre 9 e 11')
} else {
    console.log('o numero NAO esta entre 0 e 11');
}