function funcao14() {
    // 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
    // mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
    // que eles foram informados.

    const vetor = [];

    const prompt = require('prompt-sync')();

    for (i = 1; i <= 7; i++) {
        let nomes = prompt("Digite o nome da pessoa: ");
        vetor.push(nomes);
        vetor.reverse(nomes);
    }
    console.log(vetor);
}
module.exports.funcao14 = funcao14;