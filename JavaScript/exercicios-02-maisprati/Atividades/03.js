function funcao03() {
    // 03. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
    // Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
    // R$ 0.45 para viagens mais longas.
    const prompt = require("prompt-sync")();
    let distancia = parseInt(prompt("Qual a distancia a percorrer? "));
    let menorDistancia = 0.50;
    let maiorDistancia = 0.45;

    if (distancia <= 200) {
        console.log("O preço da passagem para essa viagem é: R$" + menorDistancia * distancia)
    } else {
        console.log("O preço da passagem para essa viagem é: R$" + maiorDistancia * distancia)
    }
}
module.exports.funcao03 = funcao03;