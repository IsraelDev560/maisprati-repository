// 3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
// ● Some 25 ao primeiro inteiro;
// ● Triplique o valor do segundo inteiro;
// ● Modifique o valor do terceiro inteiro para 12% do valor original;
// ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
// dos primeiros três inteiros.

const prompt = require("prompt-sync")()

let n1 = parseInt(prompt("Digite o Primeiro número: "));
let n2 = parseInt(prompt("Digite o Segundo número: "));
let n3 = parseInt(prompt("Digite o Terceiro número: "));
let n4 = parseInt(prompt("Digite o Quarto número: "));

if (isNaN(n1 || n2 || n3 || n4)) {
    console.log("Digite apenas números.");
} else {
    n4 += n1 + n2 + n3;
    let soma = n1 + 25;
    let multiplica = n2 * 3;
    let porcentagem = 0.12 * n3;

    console.log(soma);
    console.log(multiplica);
    console.log(porcentagem);
    console.log(n4);
}

