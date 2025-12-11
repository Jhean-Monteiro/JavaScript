function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'segunda';
        break;
    case 2:
        diaSemanaTexto = 'terça';
        break;
    case 3:
        diaSemanaTexto = 'quarta';
        break;
    case 4:
        diaSemanaTexto = 'quinta';
        break;
    case 5:
        diaSemanaTexto = 'sexta';
        break;
    case 6:
        diaSemanaTexto = 'sabado';
        break;
    default: 
        diaSemanaTexto = ''
    }

    return diaSemanaTexto

}

const data = new Date('2025-12-06 20:20:40');
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana)




// if (diaSemana === 0) {
//     diaSemanaTexto = 'Domingo'
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'segunda'
// } else if (diaSemana === 2) {
//     diaSemanaTexto = 'terça'
// } else if (diaSemana === 3) {
//     diaSemanaTexto = 'quarta'
// } else if (diaSemana === 4) {
//     diaSemanaTexto = 'quita'
// } else if (diaSemana === 5) {
//     diaSemanaTexto = 'sexta'
// } else if (diaSemana === 6) {
//     diaSemanaTexto = 'sabado'
// }

console.log(diaSemana, diaSemanaTexto)


function ZeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}