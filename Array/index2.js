let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b,c,a];
[a,b,c] = letras;

console.log(a,b,c)


//  ... rest, ... spread
const numeros = [100,200,300,400,500,600,700,800,900]
const [um, dois, tres, quatro, ...resto] = numeros;

console.log(um,dois,tres,quatro)
console.log(resto)



//                  0          1          2
//               0  1  2    0  1  2    0  1  2
const array = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
console.log(array[1][2]) // acessando o numero 6

const [,[,,seis]] = array // forma mais complexa de acessar o 6
console.log(seis)