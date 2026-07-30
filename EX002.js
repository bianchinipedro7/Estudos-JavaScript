// Imprima todos os números de 1 a 20 usando um loop for.

for (let i = 0; i <= 20; i++) {
    console.log(i)

}

console.log('\n')

// Dada uma lista de nomes, imprima apenas os que começam com a letra 'A'.

const nomes = ['Ana', 'Pedro', 'Isabela', 'Enrico', 'Arthur', 'Amanda']
nomes.forEach(nome => {
    if (nome[0] === 'A') {
        console.log(nome)
    }
});

console.log('\n')

// Some todos os valores de um array de números usando reduce.

const numbers = [1, 2, 474, 74, 7, 714, 71, 7, 174, 2, 875, 7]
soma = numbers.reduce((a, b) => a + b, 0)
console.log(soma)

console.log('\n')

// Crie um novo array apenas com os números pares de uma lista.

numbers.forEach(number => {
    if (number %2 == 0) {
        console.log(number)
    }
});

console.log('\n')

// Use for...of para exibir todos os elementos de um array de objetos.

const movies = [
    { id: 1, title: "The Matrix", year: 1999, genre: "Sci-Fi" },
    { id: 2, title: "Titanic", year: 1997, genre: "Romance" },
    { id: 3, title: "Avengers Endgame", year: 2019, genre: "Action" },
    { id: 4, title: "Parasite", year: 2019, genre: "Thriller" },
    { id: 5, title: "Gladiator", year: 2000, genre: "Action" }
];

for (const movie of movies) {
    console.log(movie)
}

console.log('\n')    

// Crie uma função que receba um array de strings e retorne um novo array com todas as strings em maiúsculo (map).

const random = ['bcwc', 'woxw', 'bweuc']
const caps = random.map((strings) => strings.toUpperCase())
console.log(caps)

console.log('\n')

// Filtre os usuários maiores de idade de um array de objetos {nome, idade}.

const pessoas = [
    {nome: 'Pedro', idade: 23},
    {nome: 'cac', idade: 40},
    {nome: 'caeefc', idade: 22},
    {nome: 'faef', idade: 17},
    {nome: 'afeae', idade: 10},
    {nome: 'fqewf', idade: 35}
]

maioresDeIdade = pessoas.filter((pessoa) => pessoa.idade > 18)
console.log(maioresDeIdade)

console.log('\n')

// Desafio: Dado um array de compras, calcule o valor total e retorne uma lista apenas com os itens acima de R$ 50.

const compras = [
    {produto: 'vssv', valor: 100},
    {produto: 'cac', valor: 90},
    {produto: 'caeefc', valor: 15},
    {produto: 'faef', valor: 25},
    {produto: 'afeae', valor: 49},
    {produto: 'fqewf', valor: 200}
]

acimaDe50 = compras.filter((compra) => compra.valor > 50)
console.log(acimaDe50)