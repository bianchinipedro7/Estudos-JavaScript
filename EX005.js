// Crie uma função chamada processarTexto que receba um texto e, dentro dela, tenha uma função interna que conte quantas palavras o texto possui.
// Explique por que usar funções aninhadas pode ajudar na organização do código.

// function processarTexto(texto) {

//     let totalEspaco = 0

//     for (let i = 0; i < texto.length; i++) {
//         const cadaCaracter = texto[i];
//         console.log(i, cadaCaracter)
//         if (cadaCaracter == ' ') {
//             totalEspaco += 1
//         }
//     }
//     console.log(totalEspaco += 1)
// }
// processarTexto('Oi meu nome é Pedro')












let textoLimpo = ('Oi meu nome é Pedro')

console.log(textoLimpo.split(' ').length)

textoLimpo.split(' ').length;