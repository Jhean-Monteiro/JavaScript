// adicionando elementos em uma pagina usando loop

const elementos = [
    {tag: 'header', texto: 'Primeiro Texto'},
    {tag: 'div', texto: 'Segundo Texto'},
    {tag: 'section', texto: 'Terceiro Texto'},
    {tag: 'footer', texto: 'Quarto Texto'},
]


const container = document.querySelector('.container');
let div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i]
    container.innerHTML += `<${tag}>${texto}</${tag}>`
}