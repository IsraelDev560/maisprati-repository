function funcao11() {
    // 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
    //     Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
    //     valores da sequência.

    const prompt = require('prompt-sync')();
    let soma = 0;
    let termo = parseInt(prompt("Digite o termo a ser utilizado: "));
    let razao = parseInt(prompt("Digite a razão a ser utilizada: "));

    for (let i = 1; i <= 10; i++) {
        let calculo = termo + (i - 1) * razao;
        console.log(`Termo ${i}: ${calculo}`);
        soma += calculo;
    }
    console.log(`A soma dos termos é: ${soma}`);
}
module.exports.funcao11 = funcao11;