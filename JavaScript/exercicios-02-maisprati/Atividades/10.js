function funcao10() {
    // 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
    // cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
    // a) O somatório entre todos os valores;
    // b) Qual foi o menor valor digitado;
    // c) A média entre todos os valores;
    // d) Quantos valores são pares.
    const prompt = require("prompt-sync")();
    const numeros = [];

    let pergunte;
    let soma = 0;
    let dividir = 0;
    let par = 0;
    let menorNumero = 0;
    do {
        let numero = parseInt(prompt("Digite um número: "));
        numeros.push(numero);
        pergunte = prompt("Você quer continuar? (Digite apenas 'S' ou 'N')").toUpperCase();
    } while (pergunte === 'S')

    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
        menorNumero = Math.min(...numeros);
        dividir = soma / numeros[i];
        if (numeros[i] % 2 === 0) {
            par++;
        }
    }

    console.log("A soma dos elementos é:", soma);
    console.log("O menor número digitado foi: " + menorNumero);
    console.log("A média entre todos os valores:", dividir);
    console.log("Os números pares são:", par);
    console.log("Todos os numeros " + numeros);
}
module.exports.funcao10 = funcao10;
