function funcao02() {
    // 02. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
    // h
    // -1
    // , exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
    // multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
    const prompt = require("prompt-sync")();
    let velocidadeCarro = parseInt(prompt("Qual a velocidade do carro? "));
    let multa = 5 * velocidadeCarro;
    if (velocidadeCarro > 80) {
        console.log("Você foi multado em R$" + multa + " Por ultrapassar 80km por hora.");
    } else {
        console.log("Velocidade normal.")
    }
}
module.exports.funcao02 = funcao02;