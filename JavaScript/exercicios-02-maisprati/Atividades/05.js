function funcao05() {
    // 05. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
    const prompt = require("prompt-sync")();
    console.log("Vamos jogar JoKenPo?");
    console.log("Digite um número ente 1-2-3. \n1 para 'Pedra'\n2 para 'Papel'\n3 Para 'Tesoura' ")
    let opcao = parseInt(prompt("Opção 1: "));
    let opcao2 = parseInt(prompt("Opção 2: "));

    function escolha(opcao, opcao2) {
        if (opcao === 1 && opcao2 === 2 || opcao === 2 && opcao2 === 1) {
            return console.log("O papel vence a pedra.");
        }
        else if (opcao == 2 && opcao2 == 3 || opcao == 3 && opcao2 == 2) {
            return console.log("A Tesoura vence o papel.");
        }
        else if (opcao == 1 && opcao2 == 3 || opcao == 3 && opcao2 == 1) {
            return console.log("A pedra vence a tesoura.");
        } else {
            return console.log("São iguais.");
        }
    }
    escolha(opcao, opcao2);
}
module.exports.funcao05 = funcao05;