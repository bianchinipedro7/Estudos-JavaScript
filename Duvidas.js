//******************** DÚVIDAS ********************//

if (true) {
  var x = 10;
  let y = 20;
}

console.log(x); // 10 (var vaza do bloco)
console.log(y); // Erro! (let não vaza do bloco) //OK

// Pra que usar o let? // OK
// Posso declarar variávereis assim? x = 'Pedro' // OK
// Se sim, pra que eu usaria o let? // OK

//Falsy e Truthy não entendi // OK

console.log(Array.isArray(numeros)); // true // OK

// Objetos em JavaScript são estruturas de dados que permitem armazenar coleções de pares de chave-valor. // OK


// Existem duas maneiras de acessarmos propriedades:
// 1) Notação de ponto (objeto.propriedade): Mais limpa e direta quando você conhece o nome da proproiedade
// 2) Notação em colchetes (objeto.['propriedade']): Útil quando o nome da propriedade está em uma variável ou contém caracteres especiais 

// Array contendo múltiplos objetos
const residents = [
    {
        name: 'Luíza',
        lastName: 'Guimarães',
        floor: 10,
        apartment: 1005,
    },
    {
        name: 'William',
        lastName: 'Albuquerque',
        floor: 5,
        apartment: 502,
    },
    {
        name: 'Murilo',
        lastName: 'Ferraz',
        floor: 8,
        apartment: 804,
    },
    {
        name: 'Zoey',
        lastName: 'Brooks',
        floor: 1,
        apartment: 101,
    },
];

// Acessando objetos no array
// Primeiro elemento:
firstElement = residents[0]; // <----- duvida
console.log(residents[0]);  // { name: 'Luíza', lastName: 'Guimarães', floor: 10, apartment: 1005 }

// Último elemento:
lastElement = residents[residents.length - 1];
console.log(residents[residents.length - 1]);  // { name: 'Zoey', lastName: 'Brooks', floor: 1, apartment: 101 }

// Iterando sobre array de objetos
for (let index = 0; index < residents.length; index++) {
    const element = residents[index];
    console.log(element);
}

// Arrays são ideia para:
// - Lista de usuários, produtos ou entidades similares
// - Dados tabulares como resultados de consultas bancos de dados // resultados de consultas?