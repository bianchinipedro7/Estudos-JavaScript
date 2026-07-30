const movies = [
    { id: 1, title: "The Matrix", year: 1999, genre: "Sci-Fi" },
    { id: 2, title: "Titanic", year: 1997, genre: "Romance" },
    { id: 3, title: "Avengers Endgame", year: 2019, genre: "Action" },
    { id: 4, title: "Parasite", year: 2019, genre: "Thriller" },
    { id: 5, title: "Gladiator", year: 2000, genre: "Action" }
];

// Use um for tradicional para exibir no console os títulos de todos os filmes.
for (let i = 0; i < 5; i++) {
    console.log(movies[i].title)
}

console.log('\n')

// Use for...of para mostrar o gênero (genre) de cada filme da lista.
for (const genres of movies) {
    console.log(genres.genre)
}

console.log('\n')

// Use forEach para exibir a seguinte frase para cada filme:
movies.forEach(movie => {
    console.log("O filme", movie.title, "foi lançado em", movie.year)
});

console.log('\n')

// Usando for, crie um novo array chamado recentes apenas com filmes lançados depois de 2010.
for (let ii = 0; ii < movies.length; ii++) {
   if (movies[ii].year >= 2010) {
     console.log(movies[ii].title)
}}

console.log('\n')

// Use forEach para contar quantos filmes são do gênero "Action".
movies.forEach(movie => {
    if (movie.genre === 'Action') {
        console.log(movie.title, ' - ', movie.genre)
    }
});

console.log('\n')

// Use forEach com o índice (index) para imprimir:
// "[1] The Matrix"
// "[2] Titanic"
// E assim por diante.
movies.forEach(movie => {
    console.log(movie.id, movie.title)
});
