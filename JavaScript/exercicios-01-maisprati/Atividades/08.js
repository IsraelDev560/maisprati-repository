// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require("prompt-sync")()

let num1 = parseInt(prompt("Digite o Primeiro Número: "));
let num2 = parseInt(prompt("Digite o Segunda Número: "));

if (num1 == num2) {
    console.log("os valores são iguais.");
} else if (num1 > num2) {
    console.log(num2, num1);
} else if (isNaN(num1 || num2)) {
    console.log("Isso não é um número.");
} else {
    console.log(num1, num2);
}