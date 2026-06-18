//******************** NOTES JAVASCRIPT ********************//

// Tipos de dados
// 01 - Number: Valores Numéricos
// 02 - String: Texto entre aspas '' ou ""
// 03 - Boolean: True or False
// 04 - Function: Bloco de código que executa uma tarefa
// 05 - Object: Coleções de propriedades representando uma entidade
// 06 - Undefined: Valor indefinido (variável declarada sem valor)
// 07 - Null: Valor intencionalmente inexistente
// Exemplos:

idade = 30; // number
nome = "Pedro"; // string
reprovado = false; // boolean
pesssoa = {nome: "Henrique", age: 23}; // object
listaNumerica = [1, 2, 3, 4, 5, 6, 7, 8, 9] // array
nada = null; // null
indefinido; // undefined
function wassup() { return "Wassup, G"} // function

/* OBS: Em JavaScript sempre usamos a camelCase para nomear variáveis e funções, evitando usar acentos e caracteres especiais */

// Tipos de declaração

var nome = 'Pedro';
let nomeDois = 'Henrique';
const nomeTres = 'Campos'

// var: visível em toda função globalmente
// let: visível apenas no bloco em que foi declarada
// const: igual ao let, mas o valor não pode ser alterado

// Exemplo de declaração e exibição

p = 'Pedro';
let admin = 'admin@email.com'
const usuario = 'admin123'

console.log (p, admin, usuario)
console.log (p)
console.log (admin)
console.log (usuario)

// Tipos com typeof
// Este operador retorna o tipo de uma variável
// Exemplo:

fullName = 'Pedro Henrique Campos Bianchini';
birthCity = 'Cuiabá';
birthYear = 2003;

console.log (fullName, birthCity, birthYear);

// Operações Aritméticas
// Soma: + 
// Subtração: -
// Multiplicação: *
// Divisão: /
// Módulo (resto da divisão): %

console.log (9 + 10);
console.log (76 - 9);
console.log (10 * 10);
console.log (25 / 5);
console.log (10 / 3);

// Incremento e Decremento

let number1 = 20
number += 2 // Incrementa 2 ao número
number -= 2 // Decrementa 2 do número

console.log (number1) //irá printar 20

// Exercício (Calcular área e perímetro)

const base = 5;
const altura = 8; 
const area = base * altura;
const perimetro = base + base + altura + altura
console.log (area, perimetro)

// Operadores de Comparação
// Igualdade solta: ==  (compara valores, ignora o tipo)
// Igualdade estrita === (compara valores e tipos)
// Diferente != ou !===
// Maior: >
// Maior ou Igual: >=
// Menor: <
// Menor ou Igual: <=
// Exemplo:

const a = 10;
const b = 20;
console.log(a == b);  // false
console.log(a === 10); // true
console.log(a > b); // false
console.log(a < b); // true
console.log(a != b); // true
console.log(a !== 10); // false

// Operadores Lógicos
// E lógico: && (true se os dois forem true)
// OU lógico: || (true se pelo menos um for true)
// Não lógico: ! (inverte o valor)

const age = 18;
const temCarteira = true;

if (age > 18 && temCarteira == true) {
    console.log ("Apto à dirigir")
} else if (age < 18 || !temCarteira){
    console.log ("Inapto à dirigir")
}

// Arrays
// São listas que podem armazenar múltiplos valores em uma única variável
// Exemplo:

const numbers = [1, 2, 3, 4, 5];
const frutas = [banana, maçã, abacaxi];
const dadosDiversos = ["Pedro", 23, true, ["JavaScript", "Python", "Golang"]]

// Acessando Elementos dos Arrays

const cores = ["red", "green", 'blue']

// Acessando por índice (sempre começa em 0)

console.log (cores [0]);
console.log (cores [1]);
console.log (cores [2]);

// Printando a quantidade de elementos

console.log (cores.length); // 3

// Manipulando Arrays 

const fruits = ['orange', 'grape', 'lemon'];

//Adicionando elementos

frutas.push ('apple'); //adiciona elemento no final da lista
fruits.unshift ('strawberry'); // adiciona elemento no começo da lista

console.log (fruits) // Irá printar ['apple', 'orange', 'grape', 'lemon', 'strawberry']

// Removendo Elementos

fruits.pop(); // Remove o último elemento da lista
fruits.shift(); // Remove o primeiro elemento da lista

console.log (fruits); // Irá printar ['orange', 'grape', 'lemon']

// Alterando Elementos

fruits[0] = 'blueberry' // Irá alterar orange por blueberry
console.log(fruits); // ['blueberry', 'grape', 'lemon']

// Objetos em JavaScript
// São estruturas que permitem armazenar informações (dados) e comportamentos (funções). Sendo importantes para:
// Organização: agrupam dados relacionados, mantendi seu código mais fácil de entender
// Reutilização: facilitam a reutilização de código e dados em diferentes áreas do programa
// Representação intuitiva: modelam entidades do mundo real de forma intuituva (pessoas, contas, produtos, etc)
// Flexibilidade: podem ser criados, modificados e expandidos dinamicamente durante a execução do programa
// Base para POO: são fundamentais para a Programação Orientada a Objetos
// Quando usar Objetos? Useo-os quando precisar:
// - Agrupar características relacionadas de uma entidade (ex: dados de uma pessoa)
// - Organizar informações complexas com estrutura hierárquica
// - Passar múltiplos valores como um único argumento para funções
// - Armazenar dados que precisam ser acessados por nomes (chaves) em vez de índices numéricos
// - Implementar registros ou estruturas de dados personalizados
// - Representar conceitos de domínio da aplicação (clientes, produtos, pedidos, etc)

// Criando e Acessando Objetos