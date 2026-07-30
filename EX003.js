// Crie um pequeno sistema que processe uma lista de compras, mostrando estatísticas e filtrando dados usando loops e métodos de array.
// Requisitos
// Receber um array de objetos representando produtos (nome, preço, categoria, quantidade)

const produtos = [
    {nome:'iPhone 17 Pro Max', preco: 8000, categoria:'Eletrônicos', quantidade: 1},
    {nome:'Yeezy 350 V2', preco: 2000, categoria:'Calçados', quantidade:2},
    {nome:'Sony DualSense Edge', preco: 1200, categoria:'Eletrônicos', quantidade:1},
    {nome:'Nike Phantom Elite Society', preco: 800, categoria:'Caqlçados', quantidade:1},
    {nome:'Whiskey Jack Daniels Tenesse Honey', preco: 160, categoria:'Bedidas', quantidade:3},
    {nome:'Whey Fort 3W Vitafor ', preco:170000, categoria:'Suplementos', quantidade:4}
]

// Exibir todos os produtos na tela 

produtos.forEach(produto => {
    console.log(produto.nome)
});

console.log()

// Calcular o valor total da compra

let totalProdutos = 0
produtos.forEach(produto => {
    totalProdutos += produto.preco * produto.quantidade
});

console.log(totalProdutos)
console.log()

// Listar apenas os produtos de uma categoria específica

const eletronicos = produtos.filter ((produto) => produto.categoria == 'Eletrônicos').forEach(nomeEletronico => {
    console.log(nomeEletronico.nome)
});

console.log()

// Filtrar produtos acima de um certo valor

const acimaDeMil = produtos.filter((produto) => produto.preco >= 1000).forEach(produtoAcimaDeMil => {
    console.log(produtoAcimaDeMil.nome, produtoAcimaDeMil.preco)
});

console.log()

// Calcular a média de preços


let quantidadeTotal = 0

produtos.forEach(produto => {
    quantidadeTotal += produto.quantidade
});

let mediaTotal = totalProdutos / quantidadeTotal
console.log(mediaTotal)

console.log()

// Exibir o produto mais caro e o mais barato

let maisBarato = produtos[0].preco
let maisCaro = produtos[0].preco

produtos.forEach(produto => {
    if (maisBarato > produto.preco) {
        maisBarato = produto.preco
    }
});

produtos.forEach(produto => {
    if (maisCaro < produto.preco) {
        maisCaro = produto.preco
    }
});

console.log(maisBarato)
console.log(maisCaro)
