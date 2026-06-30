//******************** NOTES JAVASCRIPT ********************//

// TIPOS DE DADOS
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
pesssoa = { nome: "Henrique", age: 23 }; // object
listaNumerica = [1, 2, 3, 4, 5, 6, 7, 8, 9] // array
nada = null; // null
indefinido; // undefined
function wassup() { return "Wassup, G" } // function

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

console.log(p, admin, usuario)
console.log(p)
console.log(admin)
console.log(usuario)

// Tipos com typeof
// Este operador retorna o tipo de uma variável
// Exemplo:

fullName = 'Pedro Henrique Campos Bianchini';
birthCity = 'Cuiabá';
birthYear = 2003;

console.log(fullName, birthCity, birthYear);

// Operações Aritméticas
// Soma: + 
// Subtração: -
// Multiplicação: *
// Divisão: /
// Módulo (resto da divisão): %

console.log(9 + 10);
console.log(76 - 9);
console.log(10 * 10);
console.log(25 / 5);
console.log(10 / 3);

// Incremento e Decremento

let number1 = 20
number += 2 // Incrementa 2 ao número
number -= 2 // Decrementa 2 do número

console.log(number1) //irá printar 20

// Exercício (Calcular área e perímetro)

const base = 5;
const altura = 8;
const area = base * altura;
const perimetro = base + base + altura + altura
console.log(area, perimetro)

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
    console.log("Apto à dirigir")
} else if (age < 18 || !temCarteira) {
    console.log("Inapto à dirigir")
}

// ARRAYS
// São listas que podem armazenar múltiplos valores em uma única variável
// Exemplo:

const numbers = [1, 2, 3, 4, 5];
const frutas = [banana, maçã, abacaxi];
const dadosDiversos = ["Pedro", 23, true, ["JavaScript", "Python", "Golang"]]

// Acessando Elementos dos Arrays

const cores = ["red", "green", 'blue']

// Acessando por índice (sempre começa em 0)

console.log(cores[0]);
console.log(cores[1]);
console.log(cores[2]);

// Printando a quantidade de elementos

console.log(cores.length); // 3

// Manipulando Arrays 

const fruits = ['orange', 'grape', 'lemon'];

//Adicionando elementos

frutas.push('apple'); //adiciona elemento no final da lista
fruits.unshift('strawberry'); // adiciona elemento no começo da lista

console.log(fruits) // Irá printar ['apple', 'orange', 'grape', 'lemon', 'strawberry']

// Removendo Elementos

fruits.pop(); // Remove o último elemento da lista
fruits.shift(); // Remove o primeiro elemento da lista

console.log(fruits); // Irá printar ['orange', 'grape', 'lemon']

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

// Em JavaScript, um objeto é criado usando chaves {} e consiste em palavras de chave-valor, onde as chaves são strings ou identificadores e os valores podem ser quaisquer tipos de dados.
// Exemplo: 

const pessoa = {
    nome: 'Pedro',
    idade: 23,
    altura: 1.75,
};

// Acessando propriedades de um objeto
console.log(pessoa.nome) // Pedro
console.log(pessoa.idade) // 23
console.log(pessoa.altura) // 1.75

// Existem duas maneiras de acessarmos propriedades:
// 1) Notação de ponto (objeto.propriedade): Mais limpa e direta quando você conhece o nome da proproiedade
// 2) Notação em colchetes (objeto.['propriedade']): Útil quando o nome da propriedade está em uma variável ou contém caracteres especiais

// Objetos Aninhados (Nested Objects)
// Objetos podem conter outros objetos como valores, criando estruturas hierarquicas de dados
//Exemplo:

// Objeto com outro objeto dentro
const account = {
    agency: '0975',
    bank: {
        cod: 2128 - 8,
        id: 23,
        title: 'TyreBank',
    },
};

// Acessando objetos aninhados

console.log(account.bank)  // { cod: '2128-8', id: 23, name: 'TrybeBank' }
console.log(account['bank']); // { cod: '2128-8', id: 23, name: 'TrybeBank' }
console.log(bank); // { cod: '2128-8', id: 23, name: 'TrybeBank' }

// Objetos com múltiplos níveis
// Podemos ter vários níveis de aninhamento para representar estruturas de dados complexas
// Exemplo:

const user = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    info: {
        name: 'Jake',
        lastName: 'Peralta',
        address: {
            street: 'Rua Dalvo Trombeta, 357 - Fundos',
            district: 'Xererê',
            city: 'Santana do Livramento',
            state: 'Rio Grande do Norte',
        },
    },
};

// Diferentes formas de acessar as propriedades

console.log(user['id']); // 99
console.log(user.email); // jakeperalta@gmail.com
console.log(user.info.address.street); // Rua Dalvo Trombeta, 357 - Fundos
console.log(user['info']['address']['city']); // Santana do Livramento

// Objetos dentro de Arrays
// Arrays podem conter objetos, permitindo armazenar coleções de entidades semelhantes
// Exemplo:

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
firstElement = residents[0];
console.log(residents[0]);  // { name: 'Luíza', lastName: 'Guimarães', floor: 10, apartment: 1005 }

// Último elemento:
lastElement = residents[residents.length - 1];
console.log(residents[residents.length - 1]);  // { name: 'Zoey', lastName: 'Brooks', floor: 1, apartment: 101 }

// Iterando sobre array de objetos
for (let index = 0; index < residents.length; index++) {
    const element = residents[index];
    console.log(element);
}

// Arrays de objetos são ideiais para:
// - Lista de usuários, produtos ou entidades similares
// - Dados tabulares como resultados de consultas bancos de dados
// - Coleções de itens com propriedades consistentes 

// Clean Code / Boa Prática
// São formas de escrever código de forma organizada e uniformizada 

// Adicionando e Alterando Dados 
// Objetos em JS são dinâmicos, propriedades podem ser adicionadas, modificadas ou removidas a qualquer momento
// Exemplo:

const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Software Engineer',
};

// Adicionando propriedade com notação de ponto
customer.lastName = 'Faria'
console.log(customer);  // { firstName: 'Roberto', age: 22, job: 'Software Engineer', lastName: 'Faria' }

// Alterando propriedade com notação de colchetes
customer['lastName'] = 'Silva';
console.log(customer);  // { firstName: 'Roberto', age: 22, job: 'Software Engineer', lastName: 'Silva' }

// Adicionando Propriedades Através de Função
// Podemos criar funções utilitárias para modificar objetos de forma consistente
// Exemplo: 

const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Software Engineer',
    // birthPlace: '', // A propriedade que será adicionada não precisa estar comentada
};

// Criação da função
const addProperty = (object, key, value) => {
    if (typeof object[key] === "undefined") {
        object[key] = value;
    }
};

// Chamada da função passando os valores dos parâmetros
addProperty(customer, 'birthPlace', '19/07/1932');

// Exibe o objeto transformado
console.log(customer);  // { firstName: 'Roberto', age: 22, job: 'Software Engineer', birthPlace: '19/07/1932' }

// Funções como esta são úteis quando:
// - Precisamos aplicar a mesma lógica para modificar vários objetos
// - Queremos validações antes de adicionar propriedades
// - Estamos encapsulando a lógica de modificação para tornar o código mais limpo

// TIPOS DE DADOS E MÉTODOS ÚTEIS

// Tipos de dados (String)
// Strings: representam qualquer sequência de caracteres, sempre em aspas
// Métodos úteis para strings:
// .length: retorna o tamanho da string
// .toUpperCase(): transforma tudo em maiúsculo
// .toLowerCase(): transforma tudo em minúsculo
// .includes(): verifica se contém uma palavra dentro da string
// .replace(): substitui um trecho do texto 
// .slice(): recorta parte da string
// Exemplo:

const frase = 'Aprender JavaScript é divertido'
console.log(frase.length); // 31
console.log(frase.toUpperCase()); // APRENDER JAVASCRIPT É DIVERTIDO!
console.log(frase.includes("JavaScript")); // true
console.log(frase.replace("divertido", "poderoso")); // Aprender JavaScript é poderoso!

// Tipos de dados (Number)
// Numbers: representam números inteiros ou decimais
// Métodos úteis para numbers:
// .toFixed(): define o número de casas decimais
// .toString(): converte o número para texto
// parseInt(): converte uma string para número inteiro
// parseFloat(): converte uma string para número decimal
// isNaN(): verifica se o valor não é um numero

const valor = 10.56789;

console.log(valor.toFixed(2)); // 10.57
console.log(typeof valor.toString()); // string
console.log(parseInt("123")); // 123
console.log(parseFloat("10.5")); // 10.5
console.log(isNaN("abc")); // true

// Tipos de dados (Boolean)
// Booleans: usados para representar valores lógicos
// Booleans em si não possuem métodos próprios, mas são muito usados em condições, exemplo:

if (true) {
  console.log("Isso sempre acontece");
}

// Tipos de dados (Arrays)
// Arrays: são estruturas que armazenam vários valores em uma única variável
// Métodos úteis para Arrays:
//.push(): adiciona um item no final
// .pop(): remove o último item
// .shift(): remove o primeiro item
// .unshift(): adiciona item no início
// .includes(): verifica se um item existe na lista
// .indexOf(): retorna a posição de um item
// .length: quantos itens existem no array
// .join(): junta os itens em uma string
// .slice(): cria uma cópia parcial do array
// .splice(): remove ou substitui itens
// Exemplo:

const itens = ["copo", "prato", "garfo"];

itens.push("faca"); // ["copo", "prato", "garfo", "faca"]
console.log(itens.length); // 4
console.log(itens.includes("garfo")); // true
console.log(itens.indexOf("prato")); // 1

// Tipos de dado (Objetos)
// Objetos: são usados para representar uma estrutura com propriedades nomeadas
// Métodos úteis para objetos:
// objeto.chave: acessa o valor diretamente
// objeto["chave"]:	outra forma de acessar a propriedade
// Object.keys(): retorna todas as chaves
// Object.values(): retorna todos os valores
// Object.entries(): retorna chaves e valores em pares
// Exemplo: 

const pessoa = {
  nome: "Alberto",
  idade: 28,
  cidade: "Iúna"
};

console.log(pessoa.nome); // Alberto
console.log(Object.keys(pessoa));   // ["nome", "idade", "cidade"]
console.log(Object.values(pessoa)); // ["Alberto", 28, "Iúna"]

// DATAS E HORAS
// Tipo Date
// JS possui um tipo chamado date usado para representar:
// Segundos
// Minutos
// Horas
// Dias
// Meses
// Anos
// Para criar uma nova data, usamos:

const agora = new Date();
console.log(agora); // Cria um objeto com a data e hora atual do sistema

// Data Específica
// Como criar:

const natal = new Date(2024, 11, 25); // Ano, MÊS (começa do zero), Dia
console.log(natal);

// OBS: Sempre lembrar que Janeiro em JS é o mês 0

// Porquê usar Datas?
// - Para exibir o dia e hora atual
// - Para calcular diferenças de tmepo (dias restantes, prazos e contagens regressivas)
// - Para formatar mensagens com o dia da semana ou hora
// - Para agendar algo em sistemas de agendda, relatórios, logs
// Métodos mais usados com datas:
// getFullYear(): retorna o ano com 4 dígitos (ex: 2025)
// getMonth(): retorna o mês (0 a 11)
// getDate(): retorna o dia do mês (1 a 31)
// getDay(): dia da semana (0 = domingo, 6 = sábado)
// getHours(): hora atual (0 a 23)
// getMinutes(): minutos atuais
// getSeconds(): segundos atuais
// toLocaleDateString(): retorna a data formatada para o idioma
// toLocaleTimeString(): retorna a hora formatada para o idioma
