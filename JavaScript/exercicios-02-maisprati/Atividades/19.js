function funcao19() {
    // 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
    // repetição. Escrever cada um deles no formato HH.MM.SS.
    const prompt = require('prompt-sync')();
    const horarios = [];

    for (let i = 1; i <= 5; i++) {

        let hora = parseInt(prompt("Digite a hora, Formato (HH): "));
        let minutos = parseInt(prompt("Digite os minutos, Formato (MM): "));
        let segundos = parseInt(prompt("Digite os segundos, Formato (SS): "));

        horarios.push(`${hora}:${minutos}:${segundos}`);
        if (hora > 23) {
            console.log("Horário inválido.");
        } else if (minutos > 59) {
            console.log("Minuto invalido.");
        } else if (segundos > 59) {
            console.log("Segundos inválido.")
        } else if (hora < 0 || minutos < 0 || segundos < 0) {
            console.log("Número negativo!.");
        } else {
            continue;
        }
    }
    console.log(horarios);
}
module.exports.funcao19 = funcao19;