// 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
// valor correspondente em graus Fahrenheit.

const prompt = require("prompt-sync")()

let numero = Number(prompt("Digite a temperatura: "));
let multiplicacao = 1.8;

let atribuicao = multiplicacao * numero;
let resultado = atribuicao + 32;

if (numero == -273){
    console.log("Não é possivel converter ");
} else if(isNaN(numero)){
    console.log("Isso não é um número.");
}
 else{
    console.log(`a temperatura em ${numero} Graus Celsius foi transformada para ${resultado} Fahrenheit`);
}

    

