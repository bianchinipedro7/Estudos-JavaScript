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
const firstElement = residents[0]; // <----- duvida OK O first element é o primeiro objeto do array
console.log(residents[0]);  // { name: 'Luíza', lastName: 'Guimarães', floor: 10, apartment: 1005 }

// Último elemento:
const lastElement = residents[residents.length - 1];
console.log(residents[residents.length - 1]);  // { name: 'Zoey', lastName: 'Brooks', floor: 1, apartment: 101 } // OK pois o length mostra a quantidade total, porém a posição é iniciada do 0

// Iterando sobre array de objetos
for (let index = 0; index < residents.length; index++) {
    const element = residents[index];
    console.log(element);
}

// Dentro do for, existem 3 parâmetros obrigatórios
// Início: Da onde o for irá partir (no exemplo irá partir do zero)
// Fim: Até onde ele vai (no exemplo irá até o último elemento do array)
// Como / Meio: Como irá passar por cada elemento (no exemplo irá passar de 1 em 1)

// OBS: For of é sempre usado para contagem do primeiro ao último elemento, se limitando à isso. 

// Arrays em objetos são ideais para:
// - Lista de usuários, produtos ou entidades similares
// - Dados tabulares como resultados de consultas bancos de dados // resultados de consultas? OK

// Criação da função
const addProperty = (object, key, value) => {
    if (typeof object[key] === "undefined") {
        object[key] = value;
    }
}; // Explicar a sintaxe disso

// Funções como esta são úteis quando:
// - Precisamos aplicar a mesma lógica para modificar vários objetos
// - Queremos validações antes de adicionar propriedades
// - Estamos encapsulando a lógica de modificação para tornar o código mais limpo 
// Exemplo destas razões para esclarecer melhor

// DICA: Use .toLowerCase() quando quiser comparar strings sem se preocupar com letras maiúsculas/minúsculas. Como assim? Tem alguma diferença estar maiúsculo ou minúsculo?
// CUIDADO: Strings são imutáveis, ou seja, os métodos não alteram o valor original. Como assim?

console.log(parseFloat("10.5")); // Irá retornar 10.5 Já esta escrito 10.5, não era pra converter string em number? Tipo ten and a half?