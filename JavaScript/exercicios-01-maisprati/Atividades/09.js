// 9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
// do mesmo, conforme a tabela abaixo:

const prompt = require("prompt-sync")()

let regioes = parseInt(prompt("Digite o Número da Região: "));

switch (regioes) {
    case 1:
        console.log("Sul");
        break;
    case 2:
        console.log("Norte");
        break;
    case 3:
        console.log("Leste");
        break;
    case 4:
        console.log("Oeste");
        break;
    case 5: case 6:
        console.log("Nordeste");
        break;
    case 7: case 8: case 9:
        console.log("Sudeste");
        break;
    default:
        if (regioes >= 10 && regioes <= 20) {
            console.log("Centro-Oeste");
        } else if (regioes >= 25 && regioes <= 50) {
            console.log("Nordeste");
        } else if (isNaN(regioes)) {
            console.log("Região inválida ou não encontrada");
        } else {
            console.log("Produto importado");
        }
}