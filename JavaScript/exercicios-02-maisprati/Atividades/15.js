function funcao15() {
    // 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
    // final, mostre quais são os números pares que foram digitados e em que posições eles
    // estão armazenados.

    const prompt = require('prompt-sync')();
    const vetor = [];
    let retornoPares = [];
    let retornoPosicoes = [];

    for (let i = 1; i <= 10; i++) {
        let numero = parseInt(prompt("Digite um número: "));
        vetor.push(numero);
    }
    vetor.forEach((numero, posicoes) => {
        if (numero % 2 === 0) {
            retornoPares.push(numero);
            retornoPosicoes.push(posicoes);
        }
    });
    console.log("\n");
    console.log(`Vetor completo: ${vetor}`);
    console.log(`Os Números pares são: ${retornoPares}`);
    console.log(`As posições são: ${retornoPosicoes}`);
    console.log("\n");
}
module.exports.funcao15 = funcao15;