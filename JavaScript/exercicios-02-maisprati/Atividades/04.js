function funcao04() {
    // 04. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
    // comprimentos e diga se é possível formar um triângulo com essas retas.
    // Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
    // lado deve ser menor que a soma dos outros dois.
    const prompt = require("prompt-sync")();
    let lado1 = parseInt(prompt("Digite um número: "));
    let lado2 = parseInt(prompt("Digite outro número: "));
    let lado3 = parseInt(prompt("Digite o ultimo número: "));

    if ((lado1 + lado2) > lado3 && (lado2 + lado3) > lado1 && (lado1 + lado3) > lado2) {
        console.log("é possivel formar um triângulo");
    } else {
        console.log("Não é possivel formar um triângulo.");
    }
}
module.exports.funcao04 = funcao04;