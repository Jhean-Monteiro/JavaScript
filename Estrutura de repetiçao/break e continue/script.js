const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

for (let numero of numeros) {
    if (numero === 2) {
        continue;
    }

    if (numero === 5 || numero === 8) {
        continue;
    }

    if (numero === 15) {
        break;
    }

    console.log(numero)
}