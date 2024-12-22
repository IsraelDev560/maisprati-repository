function funcao01() {
    // 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
    // Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
    // Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
    // vida um fumante perderá e exiba o total em dias.

    const prompt = require("prompt-sync")();
    let quantidadeCigarros = parseInt(prompt("Qual a quantidade de cigarros que você fuma por dia? "));
    let anosFumando = parseInt(prompt("À quantos anos você fuma? "));

    let diasFumando = anosFumando * 365;
    let totalCigarros = diasFumando * quantidadeCigarros;
    let total = totalCigarros * 10 / 1440;

    console.log("Você perderá aproximadamente " + Math.round(total) + " dias de vida devido ao hábito de fumar.");
}
module.exports.funcao01 = funcao01;
