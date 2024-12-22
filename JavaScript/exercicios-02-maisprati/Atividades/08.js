function funcao08() {
    // 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
    // podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
    // sistema funciona assim:
    // - até 10 h de atividade no mês: ganha 2 pontos por hora
    // - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
    // - acima de 20 h de atividade no mês: ganha 10 pontos por hora
    // - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
    // Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
    // Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

    const prompt = require("prompt-sync")();
    let horas = parseInt(prompt("Quantas horas de exercicio fisico você fez? "));

    let ganhos = 0.5;
    let pontosTotais;
    if (horas <= 10) {
        pontosTotais = 2 * horas;
    }
    else if (horas <= 20) {
        pontosTotais = 5 * horas;
    }
    else if (horas > 20) {
        pontosTotais = 10 * horas;
    }
    else {
        console.log("Valor inválido.");
    }
    console.log("Você obteve: " + pontosTotais + " Pontos");
    console.log("E ganhou R$" + ganhos * pontosTotais);
}
module.exports.funcao08 = funcao08;