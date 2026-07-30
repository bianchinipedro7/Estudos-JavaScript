// ✏️ Exercícios de Prática — JSON em JavaScript
// 🎯 Objetivo
// Praticar leitura, modificação, criação e iteração de estruturas JSON usando JavaScript.

// ✅ Exercício 1: Acesso a dados
// Dado o seguinte JSON, acesse e imprima no console:

// O nome do usuário
// A cidade onde ele mora
// const json = {
//   "nome": "Camila",
//   "idade": 26,
//   "endereco": {
//     "cidade": "Vitória",
//     "estado": "ES" 
//   }
// };

// console.log(json.nome, json.endereco.cidade)

// // ✅ Exercício 2: Atualizando dados
// // Altere o valor da chave idade para 30 no objeto abaixo e imprima o resultado como JSON (texto).

const json = {
  "nome": "Ricardo",
  "idade": 27,
  "profissao": "Designer"


// };
// // ✅ Exercício 3: Criando um objeto e convertendo para JSON
// // Crie um objeto que represente um carro com as seguintes propriedades:

// // modelo
// // marca
// // ano
// // Depois, converta esse objeto para JSON e imprima no console.

// // ✅ Exercício 4: Iteração com Array
// // Dado o seguinte JSON com dados de produtos, imprima o nome de cada produto:

// const json = {
//   "produtos": [
//     { "nome": "Camiseta", "preco": 29.90 },
//     { "nome": "Tenis", "preco": 199.99 },
//     { "nome": "Boné", "preco": 35.00 }
//   ]
// };
// // ✅ Exercício 5: Adicionando itens a um array
// // Dado o JSON com a lista de tarefas, adicione a tarefa "Estudar JavaScript" e imprima o JSON atualizado.

// const json = {
//   "tarefas": ["Lavar louça", "Arrumar a cama"]
// };
// // ✅ Exercício 6: Conversão de JSON para objeto
// // Você recebeu os seguintes dados do servidor em formato JSON (texto). Converta isso para objeto e acesse o nome:

// const dados = '{"nome":"Paulo", "idade":31}';