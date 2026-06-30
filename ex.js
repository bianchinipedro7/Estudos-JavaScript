// Exercício Prático
// Crie um switch que mostre:
// 1-3: "Primeiro trimestre"
// 4-6: "Segundo trimestre"
// 7-9: "Terceiro trimestre"
// 10-12: "Quarto trimestre"
// default: "Mês inválido"

const mes = 11;

switch (mes) {
    case 1:
    case 2:
    case 3:
        console.log('Primeiro Trimestre');
        break;

    case 4:
    case 5:
    case 6:
        console.log('Segundo Trimestre');
        break;

    case 7:
    case 8:
    case 9:
        console.log('Terceiro Trimestre');
        break;

    case 10:
    case 11:
    case 12:
        console.log('Quarto Trimestre');
        break;

    default:
        console.log('Mês Inválido');
}