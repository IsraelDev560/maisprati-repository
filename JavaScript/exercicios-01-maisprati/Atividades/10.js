// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um Número: "));
let contador = 0;

if (isNaN(numero)) {
    console.log("Isso não é um número!!!");
} else {
    do {
        console.log(numero);
        contador++;
    } while (contador < 10);
}