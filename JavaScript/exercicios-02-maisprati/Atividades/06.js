function funcao06() {
    // 06. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
    // tentar descobrir qual foi o valor sorteado.
    const prompt = require("prompt-sync")();
    let numero = parseInt(prompt("Tente adivinhar o numero entre 1 e 5: "));

    function adivinhe(numero) {
        let numeroSorteado = parseInt(Math.random() * 5) + 1;
        if (numero == numeroSorteado) {
            console.log("Parabens o seu número foi sortedo, seu número: " + numero);
        } else {
            console.log("Sinto muito, não foi dessa vez o numero sorteado foi: " + numeroSorteado)
        }
    }
    adivinhe(numero);
}
module.exports.funcao06 = funcao06;