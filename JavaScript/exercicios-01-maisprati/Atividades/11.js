// 11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
// cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
// ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
// NEGATIVO.

const prompt = require("prompt-sync")();

while (true) {
    let numero = parseInt(prompt("Digite um Número: "));

    if (numero <= 0) {
        console.log("Número nulo ou negativo. Encerrando o programa.");
        break;
    } else if (isNaN(numero)) {
        console.log("Isso não é um número, por favor digite um número.")
    } else if (numero % 2 === 0) {
        console.log("O número " + numero + " é par.");
    } else {
        console.log("O número " + numero + " é ímpar.");
    }
}